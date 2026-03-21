import { useState, useEffect } from 'react';

export const SCHEDULE = [
  { time: '11:30 AM – 12:30 PM', label: 'Round 1', description: 'TypeScript Fundamentals & Type System', type: 'round' as const },
  { time: '12:30 PM – 12:40 PM', label: 'Break', description: '', type: 'break' as const },
  { time: '12:40 PM – 2:20 PM', label: 'Round 2', description: 'Advanced Type Patterns & Scenarios', type: 'round' as const },
  { time: '2:20 PM – 3:30 PM', label: 'Lunch Break', description: '', type: 'break' as const },
  { time: '3:30 PM – 6:00 PM', label: 'Round 3', description: 'React + TypeScript Coding Challenge', type: 'round' as const },
  { time: '6:00 PM – 6:05 PM', label: 'Break', description: '', type: 'break' as const },
  { time: '6:05 PM – 6:30 PM', label: 'Round 4', description: 'TypeScript Configuration Mastery', type: 'round' as const },
];

export function parseTime(timeStr: string): number {
  const match = timeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return 0;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3].toUpperCase();
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

export function getScheduleRange(time: string): [number, number] {
  const [start, end] = time.split('–').map((s) => s.trim());
  return [parseTime(start), parseTime(end)];
}

export function formatClock(date: Date): string {
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
}

export function useScheduleClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  const activeIndex = SCHEDULE.findIndex((item) => {
    const [start, end] = getScheduleRange(item.time);
    return currentMinutes >= start && currentMinutes < end;
  });

  let remainingLabel = '';
  if (activeIndex !== -1) {
    const [, end] = getScheduleRange(SCHEDULE[activeIndex].time);
    const endSeconds = end * 60;
    const diff = endSeconds - currentSeconds;
    if (diff > 0) {
      const mins = Math.floor(diff / 60);
      const secs = diff % 60;
      remainingLabel = `${mins}m ${secs.toString().padStart(2, '0')}s remaining`;
    }
  }

  const activeItem = activeIndex !== -1 ? SCHEDULE[activeIndex] : null;

  const lastEnd = getScheduleRange(SCHEDULE[SCHEDULE.length - 1].time)[1];
  const eventEnded = currentMinutes >= lastEnd;

  return { now, currentMinutes, activeIndex, activeItem, remainingLabel, eventEnded };
}

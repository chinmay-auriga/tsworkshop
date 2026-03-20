const SCHEDULE = [
  { time: '11:00 AM – 12:05 PM', label: 'Round 1', description: 'TypeScript Fundamentals & Type System', type: 'round' as const },
  { time: '12:05 PM – 12:15 PM', label: 'Break', description: '', type: 'break' as const },
  { time: '12:15 PM – 1:15 PM', label: 'Round 2', description: 'Advanced Type Patterns & Scenarios', type: 'round' as const },
  { time: '1:15 PM – 2:00 PM', label: 'Lunch Break', description: '', type: 'break' as const },
  { time: '2:00 PM – 3:05 PM', label: 'Round 3', description: 'React + TypeScript Coding Challenge', type: 'round' as const },
  { time: '3:05 PM – 3:15 PM', label: 'Break', description: '', type: 'break' as const },
  { time: '3:15 PM – 4:20 PM', label: 'Round 4', description: 'TypeScript Configuration Mastery', type: 'round' as const },
  { time: '4:20 PM – 4:30 PM', label: 'Break', description: '', type: 'break' as const },
  { time: '4:30 PM – 5:35 PM', label: 'Round 5', description: 'Full Integration Challenge', type: 'round' as const },
];

export function Itinerary() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-10">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Workshop Itinerary</h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">21 March 2026 &middot; Starts at 11:00 AM</p>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
        <ol className="space-y-3">
          {SCHEDULE.map((item) => (
            <li
              key={item.time}
              className={`
                flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 rounded-xl border px-4 py-3
                ${item.type === 'break'
                  ? 'border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-950/30'
                  : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950'
                }
              `}
            >
              <span className="shrink-0 font-mono text-sm font-semibold text-gray-500 dark:text-gray-400 w-52">
                {item.time}
              </span>
              <div>
                <span className={`font-semibold ${item.type === 'break' ? 'text-yellow-700 dark:text-yellow-400' : 'text-gray-700 dark:text-gray-200'}`}>
                  {item.label}
                </span>
                {item.description ? (
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">&mdash; {item.description}</span>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

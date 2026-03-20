export type TeamName = 'Kapil Ke Khaas' | 'Nishant Ke Favourite';

export interface Round {
  id: number;
  title: string;
  description: string;
  unlocked: boolean;
}

export const ROUNDS: Round[] = [
  {
    id: 1,
    title: 'Round 1',
    description: 'TypeScript Fundamentals & Type System',
    unlocked: true,
  },
  {
    id: 2,
    title: 'Round 2',
    description: 'Advanced Type Patterns & Scenarios',
    unlocked: false,
  },
  {
    id: 3,
    title: 'Round 3',
    description: 'React + TypeScript Coding Challenge',
    unlocked: false,
  },
  {
    id: 4,
    title: 'Round 4',
    description: 'TypeScript Configuration Mastery',
    unlocked: false,
  },
  {
    id: 5,
    title: 'Round 5',
    description: 'Full Integration Challenge',
    unlocked: false,
  },
];

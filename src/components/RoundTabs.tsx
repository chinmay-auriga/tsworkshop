import type { Round } from '../data';

interface RoundTabsProps {
  rounds: Round[];
  activeRound: number;
  onSelectRound: (id: number) => void;
}

export function RoundTabs({ rounds, activeRound, onSelectRound }: RoundTabsProps) {
  const visibleRounds = rounds.filter((round) => round.unlocked);

  return (
    <div className="flex flex-wrap gap-2">
      {visibleRounds.map((round) => {
        const isActive = round.id === activeRound;

        return (
          <button
            key={round.id}
            onClick={() => onSelectRound(round.id)}
            className={`
              relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all
              ${isActive
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 cursor-pointer'
              }
            `}
          >
            {round.title}
          </button>
        );
      })}
    </div>
  );
}

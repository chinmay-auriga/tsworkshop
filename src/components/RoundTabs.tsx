import type { Round } from '../data';

interface RoundTabsProps {
  rounds: Round[];
  activeRound: number;
  onSelectRound: (id: number) => void;
}

export function RoundTabs({ rounds, activeRound, onSelectRound }: RoundTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {rounds.map((round) => {
        const isActive = round.id === activeRound;
        const isLocked = !round.unlocked;

        return (
          <button
            key={round.id}
            onClick={() => !isLocked && onSelectRound(round.id)}
            disabled={isLocked}
            className={`
              relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all
              ${isLocked
                ? 'bg-gray-100 dark:bg-gray-800/50 text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-60'
                : isActive
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 cursor-pointer'
              }
            `}
          >
            {isLocked && (
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {round.title}
          </button>
        );
      })}
    </div>
  );
}

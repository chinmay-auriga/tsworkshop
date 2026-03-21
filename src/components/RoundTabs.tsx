import type { Round, UserRole } from '../data';

export type ActiveTab = number | 'itinerary' | 'other-team' | 'leaderboard';

interface RoundTabsProps {
  rounds: Round[];
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  team: UserRole;
}

export function RoundTabs({ rounds, activeTab, onSelectTab, team }: RoundTabsProps) {
  const isAdmin = team === 'Admin';

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelectTab('itinerary')}
        className={`
          relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all
          ${activeTab === 'itinerary'
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-blue-500/20'
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 cursor-pointer'
          }
        `}
      >
        Itinerary
      </button>
      {rounds.map((round) => {
        const isActive = round.id === activeTab;

        return (
          <button
            key={round.id}
            onClick={() => onSelectTab(round.id)}
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
      {!isAdmin && (
        <button
          onClick={() => onSelectTab('other-team')}
          className={`
            relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all
            ${activeTab === 'other-team'
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-blue-500/20'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 cursor-pointer'
            }
          `}
        >
          Their Questions
        </button>
      )}
    </div>
  );
}

import type { UserRole } from '../data';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  team: UserRole;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onLogout: () => void;
  onLeaderboard: () => void;
}

export function Header({ team, theme, onToggleTheme, onLogout, onLeaderboard }: HeaderProps) {
  const isAdmin = team === 'Admin';
  const isBlueTeam = team === 'Nishant Ke Favourite';

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hidden sm:block">
            TS Workshop
          </h1>
          <div
            className={`
              px-3 py-1 rounded-full text-xs font-bold
              ${isAdmin
                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
                : isBlueTeam
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                  : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
              }
            `}
          >
            {team}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onLeaderboard}
            className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors cursor-pointer font-semibold"
            title="Leaderboard"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7z" fill="currentColor" />
            </svg>
            <span className="hidden sm:inline">Leaderboard</span>
          </button>
          <button
            onClick={onLogout}
            className="text-sm px-3 py-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Logout
          </button>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}

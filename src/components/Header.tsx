import type { TeamName } from '../data';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  team: TeamName;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function Header({ team, theme, onToggleTheme }: HeaderProps) {
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
              ${isBlueTeam
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
              }
            `}
          >
            {team}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}

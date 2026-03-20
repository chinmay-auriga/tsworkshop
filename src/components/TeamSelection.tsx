import type { TeamName } from '../data';

interface TeamSelectionProps {
  onSelect: (team: TeamName) => void;
}

export function TeamSelection({ onSelect }: TeamSelectionProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          TypeScript Day Workshop
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Choose your team to get started
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
        <button
          onClick={() => onSelect('Nishant Ke Favourite')}
          className="group flex-1 relative overflow-hidden rounded-2xl border-2 border-blue-500/30 bg-white dark:bg-gray-900 p-8 transition-all hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="text-5xl mb-4">🔵</div>
            <h2 className="text-xl font-bold mb-1 text-blue-600 dark:text-blue-400">
              Nishant Ke Favourite
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Captain: <span className="font-semibold text-gray-700 dark:text-gray-300">Shubham</span>
            </p>
          </div>
        </button>

        <div className="flex items-center justify-center">
          <span className="text-2xl font-extrabold text-gray-400 dark:text-gray-600">
            V/S
          </span>
        </div>

        <button
          onClick={() => onSelect('Kapil Ke Khaas')}
          className="group flex-1 relative overflow-hidden rounded-2xl border-2 border-orange-500/30 bg-white dark:bg-gray-900 p-8 transition-all hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="text-5xl mb-4">🟠</div>
            <h2 className="text-xl font-bold mb-1 text-orange-600 dark:text-orange-400">
              Kapil Ke Khaas
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Captain: <span className="font-semibold text-gray-700 dark:text-gray-300">Raghvendra</span>
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}

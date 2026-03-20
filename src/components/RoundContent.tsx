import type { Round } from '../data';

interface RoundContentProps {
  round: Round;
}

export function RoundContent({ round }: RoundContentProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-10">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{round.title}</h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">{round.description}</p>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="text-6xl mb-4">
            {round.id === 1 && '🧩'}
            {round.id === 2 && '🔮'}
            {round.id === 3 && '⚛️'}
            {round.id === 4 && '⚙️'}
            {round.id === 5 && '🏆'}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Challenge Area
          </h3>
          <p className="text-gray-400 dark:text-gray-500 max-w-md">
            Questions and challenges for this round will be revealed during the workshop. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}

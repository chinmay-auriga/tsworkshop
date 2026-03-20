import type { Round, TeamName } from '../data';
import { TEAM_ROUND_QUESTIONS } from '../data';

interface RoundContentProps {
  round: Round;
  team: TeamName;
}

export function RoundContent({ round, team }: RoundContentProps) {
  const questions = TEAM_ROUND_QUESTIONS[team][round.id] ?? [];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-10">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{round.title}</h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">{round.description}</p>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Questions</h3>
        <ol className="space-y-3">
          {questions.map((item) => (
            <li
              key={item.id}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 px-4 py-3 text-gray-700 dark:text-gray-200"
            >
              <p>
                <span className="font-semibold mr-2">Q{item.id}.</span>
                {item.question}
              </p>
              {item.codeSnippet ? (
                <pre className="mt-3 overflow-x-auto rounded-lg bg-gray-900 px-3 py-2 text-xs text-gray-100">
                  <code>{item.codeSnippet}</code>
                </pre>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

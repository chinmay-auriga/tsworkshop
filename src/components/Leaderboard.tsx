import { useEffect, useState } from 'react';

interface TeamScore {
  team: string;
  rounds: { round: number; score: number }[];
  total: number;
}

const SCORES: TeamScore[] = [
  {
    team: 'Nishant Ke Favourite',
    rounds: [{ round: 1, score: 10 }],
    total: 10,
  },
  {
    team: 'Kapil Ke Khaas',
    rounds: [{ round: 1, score: 0 }],
    total: 0,
  },
];

function Crown() {
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10 drop-shadow-lg" aria-hidden="true">
      <path
        d="M8 48h48L52 24l-12 12-8-16-8 16-12-12z"
        fill="#facc15"
        stroke="#eab308"
        strokeWidth="2"
      />
      <rect x="8" y="48" width="48" height="6" rx="2" fill="#eab308" />
      <circle cx="14" cy="24" r="3" fill="#facc15" />
      <circle cx="32" cy="16" r="3" fill="#facc15" />
      <circle cx="50" cy="24" r="3" fill="#facc15" />
    </svg>
  );
}

function Confetti() {
  const pieces = Array.from({ length: 24 }, (_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 2;
    const duration = 2 + Math.random() * 2;
    const colors = ['#3b82f6', '#8b5cf6', '#facc15', '#f97316', '#10b981', '#ef4444'];
    const color = colors[i % colors.length];
    const size = 4 + Math.random() * 6;
    return { left, delay, duration, color, size, id: i };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-sm animate-confetti"
          style={{
            left: `${p.left}%`,
            top: '-8px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function ScoreBar({ score, maxScore, color }: { score: number; maxScore: number; color: string }) {
  const [width, setWidth] = useState(0);
  const pct = maxScore > 0 ? (score / maxScore) * 100 : 0;

  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), 200);
    return () => clearTimeout(t);
  }, [pct]);

  return (
    <div className="h-6 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
        style={{ width: `${Math.max(width, score > 0 ? 8 : 0)}%` }}
      />
    </div>
  );
}

export function Leaderboard() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setShow(true));
  }, []);

  const sorted = [...SCORES].sort((a, b) => b.total - a.total);
  const leader = sorted[0];
  const maxScore = Math.max(...sorted.map((s) => s.total), 1);

  const teamColor = (name: string) =>
    name === 'Nishant Ke Favourite'
      ? { bg: 'bg-blue-500', light: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-400' }
      : { bg: 'bg-orange-500', light: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-400' };

  return (
    <div className={`relative transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      {/* Confetti behind the leader card */}
      <Confetti />

      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
          Leaderboard
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Live standings across all rounds</p>
      </div>

      {/* Leader highlight */}
      <div className={`relative mx-auto max-w-md mb-10 transition-all duration-1000 delay-300 ${show ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 animate-bounce-slow z-10">
          <Crown />
        </div>
        <div className={`rounded-2xl border-2 ${teamColor(leader.team).border} bg-gradient-to-br from-yellow-50 via-white to-yellow-50 dark:from-yellow-900/10 dark:via-gray-800 dark:to-yellow-900/10 p-6 pt-8 text-center shadow-xl shadow-yellow-500/10`}>
          <p className="text-xs uppercase tracking-widest text-yellow-600 dark:text-yellow-400 font-bold mb-1">Currently Leading</p>
          <p className={`text-xl font-extrabold ${teamColor(leader.team).text}`}>{leader.team}</p>
          <p className="text-4xl font-black mt-2 bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
            {leader.total}
            <span className="text-base font-semibold ml-1 text-gray-400">pts</span>
          </p>
          {/* sparkle stars */}
          <div className="absolute top-2 right-4 animate-pulse text-yellow-400 text-lg">★</div>
          <div className="absolute top-6 right-8 animate-pulse text-yellow-300 text-sm" style={{ animationDelay: '0.5s' }}>★</div>
          <div className="absolute top-3 left-5 animate-pulse text-yellow-400 text-base" style={{ animationDelay: '1s' }}>★</div>
        </div>
      </div>

      {/* Scoreboard cards */}
      <div className="grid gap-5 sm:grid-cols-2 max-w-2xl mx-auto">
        {sorted.map((entry, i) => {
          const colors = teamColor(entry.team);
          const isLeader = i === 0;
          const isBehind = !isLeader && entry.total < leader.total;

          return (
            <div
              key={entry.team}
              className={`rounded-2xl border p-5 transition-all duration-700 ${
                show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${
                isLeader
                  ? `${colors.light} border-2 ${colors.border} shadow-lg`
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
              }`}
              style={{ transitionDelay: `${400 + i * 200}ms` }}
            >
              {/* Team name row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {isLeader && <span className="text-lg" title="Leading">🏆</span>}
                  {isBehind && <span className="text-lg opacity-60" title="Behind">📉</span>}
                  <h3 className={`font-bold text-base ${colors.text}`}>{entry.team}</h3>
                </div>
                <span className={`text-2xl font-black ${isLeader ? colors.text : 'text-gray-600 dark:text-gray-300'}`}>
                  {entry.total}
                </span>
              </div>

              {/* Score bar */}
              <ScoreBar score={entry.total} maxScore={maxScore} color={colors.bg} />

              {/* Per-round breakdown */}
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.rounds.map((r) => (
                  <span
                    key={r.round}
                    className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg ${colors.light} ${colors.text} font-semibold`}
                  >
                    R{r.round}: {r.score}
                  </span>
                ))}
              </div>

              {/* Status message */}
              <p className={`mt-3 text-xs font-medium ${isLeader ? 'text-green-600 dark:text-green-400' : 'text-gray-400 dark:text-gray-500'}`}>
                {isLeader ? '🔥 On fire! Keep it up!' : '💪 Time to catch up!'}
              </p>
            </div>
          );
        })}
      </div>

      {/* Round summary table */}
      <div className={`mt-10 max-w-2xl mx-auto transition-all duration-700 delay-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 text-center">Round Breakdown</h3>
        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="text-left px-4 py-2.5 font-semibold text-gray-600 dark:text-gray-300">Round</th>
                <th className="text-center px-4 py-2.5 font-semibold text-blue-600 dark:text-blue-400">Nishant Ke Favourite</th>
                <th className="text-center px-4 py-2.5 font-semibold text-orange-600 dark:text-orange-400">Kapil Ke Khaas</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100 dark:border-gray-700/50">
                <td className="px-4 py-2.5 font-medium text-gray-700 dark:text-gray-300">Round 1</td>
                <td className="px-4 py-2.5 text-center font-bold text-blue-600 dark:text-blue-400">10 🏆</td>
                <td className="px-4 py-2.5 text-center font-bold text-orange-600 dark:text-orange-400">0</td>
              </tr>
              <tr className="border-t border-gray-100 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-800/30">
                <td className="px-4 py-2.5 font-bold text-gray-800 dark:text-gray-200">Total</td>
                <td className="px-4 py-2.5 text-center font-extrabold text-blue-700 dark:text-blue-300">10</td>
                <td className="px-4 py-2.5 text-center font-extrabold text-orange-700 dark:text-orange-300">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import type { UserRole } from '../data';

interface TeamSelectionProps {
  onAuthenticate: (role: UserRole) => void;
}

const TEAM_CREDENTIALS: Record<string, { role: UserRole; password: string }> = {
  'nishant ke favourite': {
    role: 'Nishant Ke Favourite',
    password: import.meta.env.VITE_PASSWORD_NISHANT,
  },
  'kapil ke khaas': {
    role: 'Kapil Ke Khaas',
    password: import.meta.env.VITE_PASSWORD_KAPIL,
  },
  admin: {
    role: 'Admin',
    password: import.meta.env.VITE_PASSWORD_ADMIN,
  },
};

const TEAM_ALIASES: Record<string, keyof typeof TEAM_CREDENTIALS> = {
  nishant: 'nishant ke favourites',
  nkf: 'nishant ke favourite',
  'nishant ke favourite': 'nishant ke favourite',
  kapil: 'kapil ke khaas',
  kkk: 'kapil ke khaas',
  'kapil ke khaas': 'kapil ke khaas',
  admin: 'admin',
};

export function TeamSelection({ onAuthenticate }: TeamSelectionProps) {
  const [teamId, setTeamId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedTeamId = teamId.trim().toLowerCase();
    const credentialKey = TEAM_ALIASES[normalizedTeamId];
    const credential = credentialKey ? TEAM_CREDENTIALS[credentialKey] : undefined;

    if (!credential || credential.password !== password.trim()) {
      setError('Invalid team ID or password.');
      return;
    }

    setError('');
    onAuthenticate(credential.role);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          TypeScript Day Workshop
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Team login required
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 p-6 shadow-lg"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300" htmlFor="team-id">
              Team ID
            </label>
            <input
              id="team-id"
              type="text"
              value={teamId}
              onChange={(event) => setTeamId(event.target.value)}
              placeholder="Enter team ID"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300" htmlFor="team-password">
              Password
            </label>
            <input
              id="team-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error ? (
            <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>

      <div className="mt-4 w-full max-w-md text-center">
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">or</p>
        <button
          onClick={() => onAuthenticate('Guest')}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 px-4 py-2.5 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-yellow-500" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7z" fill="currentColor" />
          </svg>
          Continue as Guest — View Leaderboard
        </button>
      </div>
    </div>
  );
}

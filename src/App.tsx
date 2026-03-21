import { useState } from 'react';
import { useTheme } from './useTheme';
import { ROUNDS, type UserRole, type TeamName } from './data';
import { TeamSelection } from './components/TeamSelection';
import { Header } from './components/Header';
import { RoundTabs, type ActiveTab } from './components/RoundTabs';
import { LiveStatus } from './components/LiveStatus';
import { ThemeToggle } from './components/ThemeToggle';
import { Itinerary } from './components/Itinerary';
import { RoundContent } from './components/RoundContent';
import { OtherTeamQuestions } from './components/OtherTeamQuestions';
import { Leaderboard } from './components/Leaderboard';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [team, setTeam] = useState<UserRole | null>(() => {
    return localStorage.getItem('ts-workshop-team') as UserRole | null;
  });
  const isAdmin = team === 'Admin';
  const isGuest = team === 'Guest';
  const unlockedRounds = isAdmin ? ROUNDS : ROUNDS.filter((round) => round.unlocked);
  const [activeTab, setActiveTab] = useState<ActiveTab>(isGuest ? 'leaderboard' : 'itinerary');

  const handleAuthenticateTeam = (authenticatedTeam: UserRole) => {
    setTeam(authenticatedTeam);
    localStorage.setItem('ts-workshop-team', authenticatedTeam);
  };

  const handleLogout = () => {
    setTeam(null);
    localStorage.removeItem('ts-workshop-team');
  };

  if (!team) {
    return <TeamSelection onAuthenticate={handleAuthenticateTeam} />;
  }

  const otherTeam: TeamName | null =
    team === 'Nishant Ke Favourite' ? 'Kapil Ke Khaas'
    : team === 'Kapil Ke Khaas' ? 'Nishant Ke Favourite'
    : null;

  const currentRound = typeof activeTab === 'number'
    ? unlockedRounds.find((round) => round.id === activeTab) ?? unlockedRounds[0]
    : null;

  if (isGuest) {
    return (
      <div className="min-h-screen">
        <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">TS Workshop</h1>
              <div className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">Guest</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={handleLogout} className="text-sm px-3 py-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">Logout</button>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">
          <LiveStatus />
          <div className="flex flex-wrap gap-2 mb-6">
            {(['itinerary', 'leaderboard'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 cursor-pointer'
                }`}
              >
                {tab === 'itinerary' ? 'Itinerary' : '★ Leaderboard'}
              </button>
            ))}
            {unlockedRounds.map((round) => (
              <button
                key={round.id}
                onClick={() => setActiveTab(round.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === round.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 cursor-pointer'
                }`}
              >
                {round.title}
              </button>
            ))}
          </div>
          <div className="mt-6">
            {activeTab === 'itinerary' ? (
              <Itinerary />
            ) : activeTab === 'leaderboard' ? (
              <Leaderboard />
            ) : currentRound ? (
              <RoundContent round={currentRound} team="Admin" isAdmin />
            ) : null}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header
        team={team}
        theme={theme}
        onToggleTheme={toggleTheme}
        onLogout={handleLogout}
        onLeaderboard={() => setActiveTab('leaderboard')}
      />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <LiveStatus />
        <RoundTabs
          rounds={unlockedRounds}
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          team={team}
        />
        <div className="mt-6">
          {activeTab === 'leaderboard' ? (
            <Leaderboard />
          ) : activeTab === 'itinerary' ? (
            <Itinerary />
          ) : activeTab === 'other-team' && otherTeam ? (
            <OtherTeamQuestions otherTeam={otherTeam} rounds={unlockedRounds} />
          ) : currentRound ? (
            <RoundContent round={currentRound} team={team} isAdmin={isAdmin} />
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 py-16">No rounds are unlocked right now.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

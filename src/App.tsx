import { useState } from 'react';
import { useTheme } from './useTheme';
import { ROUNDS, type UserRole, type TeamName } from './data';
import { TeamSelection } from './components/TeamSelection';
import { Header } from './components/Header';
import { RoundTabs, type ActiveTab } from './components/RoundTabs';
import { LiveStatus } from './components/LiveStatus';
import { Itinerary } from './components/Itinerary';
import { RoundContent } from './components/RoundContent';
import { OtherTeamQuestions } from './components/OtherTeamQuestions';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [team, setTeam] = useState<UserRole | null>(() => {
    return localStorage.getItem('ts-workshop-team') as UserRole | null;
  });
  const isAdmin = team === 'Admin';
  const unlockedRounds = isAdmin ? ROUNDS : ROUNDS.filter((round) => round.unlocked);
  const [activeTab, setActiveTab] = useState<ActiveTab>('itinerary');

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

  return (
    <div className="min-h-screen">
      <Header
        team={team}
        theme={theme}
        onToggleTheme={toggleTheme}
        onLogout={handleLogout}
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
          {activeTab === 'itinerary' ? (
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

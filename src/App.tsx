import { useState } from 'react';
import { useTheme } from './useTheme';
import { ROUNDS, type TeamName } from './data';
import { TeamSelection } from './components/TeamSelection';
import { Header } from './components/Header';
import { RoundTabs } from './components/RoundTabs';
import { RoundContent } from './components/RoundContent';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [team, setTeam] = useState<TeamName | null>(() => {
    return localStorage.getItem('ts-workshop-team') as TeamName | null;
  });
  const unlockedRounds = ROUNDS.filter((round) => round.unlocked);
  const [activeRound, setActiveRound] = useState(1);

  const handleAuthenticateTeam = (authenticatedTeam: TeamName) => {
    setTeam(authenticatedTeam);
    localStorage.setItem('ts-workshop-team', authenticatedTeam);
  };

  if (!team) {
    return <TeamSelection onAuthenticate={handleAuthenticateTeam} />;
  }

  const currentRound = unlockedRounds.find((round) => round.id === activeRound) ?? unlockedRounds[0];

  if (!currentRound) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 text-center">
        <p className="text-gray-600 dark:text-gray-300">No rounds are unlocked right now.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header
        team={team}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <RoundTabs
          rounds={unlockedRounds}
          activeRound={activeRound}
          onSelectRound={setActiveRound}
        />
        <div className="mt-6">
          <RoundContent round={currentRound} team={team} />
        </div>
      </main>
    </div>
  );
}

export default App;

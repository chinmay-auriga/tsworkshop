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
  const [activeRound, setActiveRound] = useState(1);

  const handleSelectTeam = (selected: TeamName) => {
    setTeam(selected);
    localStorage.setItem('ts-workshop-team', selected);
  };

  const handleChangeTeam = () => {
    setTeam(null);
    localStorage.removeItem('ts-workshop-team');
  };

  if (!team) {
    return <TeamSelection onSelect={handleSelectTeam} />;
  }

  const currentRound = ROUNDS.find((r) => r.id === activeRound)!;

  return (
    <div className="min-h-screen">
      <Header
        team={team}
        theme={theme}
        onToggleTheme={toggleTheme}
        onChangeTeam={handleChangeTeam}
      />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <RoundTabs
          rounds={ROUNDS}
          activeRound={activeRound}
          onSelectRound={setActiveRound}
        />
        <div className="mt-6">
          <RoundContent round={currentRound} />
        </div>
      </main>
    </div>
  );
}

export default App;

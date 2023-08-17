import React, { useState } from 'react';
import './App.css';
import Sidebar from './sidebar';
import MatchDisplay from './matchdisplay';

const matchesBySport = {
  Football: [
    { teamA: 'Team A1', teamB: 'Team B1', location: 'Stadium 1', time: '10:00 AM' },
    // Add more matches...
  ],
  Basketball: [
    { teamA: 'Team A2', teamB: 'Team B2', location: 'Arena 2', time: '2:30 PM' },
    // Add more matches...
  ],
  Tennis: [
    { teamA: 'Team A3', teamB: 'Team B3', location: 'Court 3', time: '5:00 PM' },
    // Add more matches...
  ],
};

function App() {
  const [selectedSport, setSelectedSport] = useState('Football');

  return (
    <div className="app">
      <Sidebar selectedSport={selectedSport} setSelectedSport={setSelectedSport} />
      <MatchDisplay matches={matchesBySport[selectedSport]} />
    </div>
  );
}

export default App;


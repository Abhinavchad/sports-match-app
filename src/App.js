
// import './App.css';
// import Sidebar from './sidebar';
// import MatchDisplay from './matchdisplay';

// const matchesBySport = {
//   Football: [
//     { teamA: 'Team A1', teamB: 'Team B1', location: 'Stadium 1', time: '10:00 AM' },
//     // Add more matches...
//   ],
//   Basketball: [
//     { teamA: 'Team A2', teamB: 'Team B2', location: 'Arena 2', time: '2:30 PM' },
//     // Add more matches...
//   ],
//   Tennis: [
//     { teamA: 'Team A3', teamB: 'Team B3', location: 'Court 3', time: '5:00 PM' },
//     // Add more matches...
//   ],
// };

// function App() {
//   const [selectedSport, setSelectedSport] = useState('Football');

//   return (
//     <div className="app">
//       <Sidebar selectedSport={selectedSport} setSelectedSport={setSelectedSport} />
//       <MatchDisplay matches={matchesBySport[selectedSport]} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import Sidebar from './sidebar';
import SportDetails from './sportdetails';


const sports = [
  { name: 'Football', photo: 'football.jpg' },
  { name: 'Basketball',},
  { name: 'Tennis', },
  { name: 'Badminton', },
  { name: 'Athletics',  },
  { name: 'Boxing', },
  { name: 'Chess', },
  { name: 'Cricket', },
  { name: 'Cycling',},
  { name: 'Handball',},
  { name: 'Hockey',},
  { name: 'Kabaddi',},
  { name: 'Kho-Kho',},
  { name: 'Squash',},
  { name: 'Table Tennis', },
  { name: 'Taekwondo',},
  { name: 'Volleyball', },
  { name: 'Weightlifiting',},
];

const matchesBySport = {
  // ... (your match data)
};

function App() {
  const [selectedSport, setSelectedSport] = useState('Football');

  return (
    <div className="app">
      <Sidebar selectedSport={selectedSport} setSelectedSport={setSelectedSport} />
      <div className="main-content">
        {sports.map(sport => (
          <SportDetails
            key={sport.name}
            sportName={sport.name}
            sportPhoto={sport.photo}
            matches={matchesBySport[sport.name]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


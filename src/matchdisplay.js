import React from 'react';

const MatchDisplay = ({ matches }) => {
  return (
    <div className="match-display">
      {matches.map((match, index) => (
        <div key={index} className="match">
          <div className="teams">
            {match.teamA} vs. {match.teamB}
          </div>
          <div className="location">{match.location}</div>
          <div className="time">{match.time}</div>
        </div>
      ))}
    </div>
  );
};

export default MatchDisplay;

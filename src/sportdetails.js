import React from 'react';

const SportDetails = ({ sportName, sportPhoto, matches }) => {
  const formattedSportName = sportName.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="sport-details">
      <h2>{sportName}</h2>
      {sportPhoto && (
        <img
          src={`/sport-photos/${formattedSportName}.jpg`}
          alt={`${sportName} Icon`}
        />
      )}
      <div className="match-list">
        {matches.map((match, index) => (
          <div key={index} className="match-item">
            <div>
              <strong>Match {index + 1}</strong>
            </div>
            <div>Team A: {match.teamA}</div>
            <div>Team B: {match.teamB}</div>
            <div>Location: {match.location}</div>
            <div>Time: {match.time}</div>
            <button className="view-details-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportDetails;




import React from 'react';

const SportDetails = ({ sportName, sportPhoto, matches }) => {
  return (
    <div className="sport-details">
      <h2>{sportName}</h2>
      {sportPhoto && <img src={`/sport-photos/${sportPhoto}`} alt={`${sportName} Photo`} />}
      {/* Display match details here */}
    </div>
  );
};

export default SportDetails;


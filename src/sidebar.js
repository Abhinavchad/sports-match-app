import React from 'react';

const sports = ['Football', 'Basketball', 'Tennis','Badminton','Athletics','Boxing','Chess','Cricket','Cycling','Handball','Hockey','Kabaddi','Kho-Kho','Powerlifting','Squash','Table Tennis','Taekwondo','Volleyball','Weightlifiting'];

const Sidebar = ({ selectedSport, setSelectedSport }) => {
  return (
    <div className="sidebar">
      {sports.map(sport => (
        <div
          key={sport}
          className={`sidebar-item ${selectedSport === sport ? 'selected' : ''}`}
          onClick={() => setSelectedSport(sport)}
        >
          {sport}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

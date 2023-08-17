import React from 'react';

const sports = [
  { name: 'Football', sticker: 'football.png' },
  { name: 'Basketball', sticker: 'basketball.png' },
  { name: 'Tennis', sticker: 'tennis.png' },
  { name: 'Badminton', sticker: 'player.png' },
  { name: 'Athletics', sticker: 'runner.png' },
  { name: 'Boxing', sticker: 'boxing-gloves.png' },
  { name: 'Chess', sticker: 'chess.png' },
  { name: 'Cricket', sticker: 'cricket.png' },
  { name: 'Cycling', sticker: 'cycling.png' },
  { name: 'Handball', sticker: 'handball.png' },
  { name: 'Hockey', sticker: 'field-hockey.png' },
  { name: 'Kabaddi', sticker: 'kabaddi.png' },
  { name: 'Kho-Kho', sticker: 'game.png' },
  { name: 'Squash', sticker: 'squash.png' },
  { name: 'Table Tennis', sticker: 'table-tennis.png' },
  { name: 'Taekwondo', sticker: 'taekwondo.png' },
  { name: 'Volleyball', sticker: 'block.png' },
  { name: 'Weightlifiting', sticker: 'weightlifter.png' },
];

const Sidebar = ({ selectedSport, setSelectedSport }) => {
  return (
    <div className="sidebar">
      {sports.map(sport => (
        <div
          key={sport.name}
          className={`sidebar-item ${selectedSport === sport.name ? 'selected' : ''}`}
          onClick={() => setSelectedSport(sport.name)}
        >
          <img src={`/sport-stickers/${sport.sticker}`} alt={`${sport.name} Sticker`} />
          {sport.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

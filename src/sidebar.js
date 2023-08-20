import React, { useState } from 'react';




const Sidebar = ({ selectedSport, setSelectedSport, matchesBySport }) => {
  const sports = [
    { name: 'Football', sticker: 'football.png' },
    { name: 'Basketball', sticker: 'basketball.png' },
    { name: 'Tennis', sticker: 'tennis.png' },
    // { name: 'Badminton', sticker: 'player.png' },
    // { name: 'Athletics', sticker: 'runner.png' },
    // { name: 'Boxing', sticker: 'boxing-gloves.png' },
    // { name: 'Chess', sticker: 'chess.png' },
    // { name: 'Cricket', sticker: 'cricket.png' },
    // { name: 'Cycling', sticker: 'cycling.png' },
    // { name: 'Handball', sticker: 'handball.png' },
    // { name: 'Hockey', sticker: 'field-hockey.png' },
    // { name: 'Kabaddi', sticker: 'kabaddi.png' },
    // { name: 'Kho-Kho', sticker: 'game.png' },
    // { name: 'Squash', sticker: 'squash.png' },
    // { name: 'Table Tennis', sticker: 'table-tennis.png' },
    // { name: 'Taekwondo', sticker: 'taekwondo.png' },
    // { name: 'Volleyball', sticker: 'block.png' },
    // { name: 'Weightlifiting', sticker: 'weightlifter.png' },
  ];
  console.log(selectedSport);
  // const [img ,setImg] = useState('Football');
  return (
    <>
    <div className="sidebar">
      {sports.map(sport => {
        const sportName = sport.name.toString();

        return (
          <div
            key={sport.name}
            className={`sidebar-item ${selectedSport === sport.name ? 'selected' : ''}`}
            onClick={() => setSelectedSport(sport.name)}
          >
            <img src={`/sport-stickers/${sport.sticker}`} alt={`${sport.name} Sticker`} />
            {sportName}

          </div>
        );
      })}
    </div>
    <div className='rightBar' >
     
       <div style={{height:'45vh',width:'300vh',backgroundColor:'blue'}}>
       <img  src={matchesBySport[selectedSport].img[0]} alt='mushkil me hai hasina'/>
       </div>
       <div>
        <p>{matchesBySport[selectedSport].matches.map((ele)=>{
          return <h5>{ele.teamA} V/S {ele.teamB}</h5>
        })}</p>
       </div>
    
    </div>
    </>
  );
};


export default Sidebar;


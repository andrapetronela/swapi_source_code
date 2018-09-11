import React from "react";

const Planet = ({ name, rotation_period, diameter, climate, terrain }) => {
  return (
    <div className="planet tc dib br-100 shadow-4 pa5 mv4 mh6 grow">
      <h1 className='tc name'> {name}</h1>
      <p className='code'>Rotation period: {rotation_period} </p>
      <p className='code'>Diameter: {diameter} </p>
      <p className='code'>Climate: {climate} </p>
      <p className='code'>Terrain: {terrain} </p>

    </div>
  );
};

export default Planet;
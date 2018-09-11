import React from "react";
import Planet from "./Planet";

const PlanetList = ({ results }) => {
  return results.map((data, i) => {
    return (
    	<div className="tc">
    	<Planet 
    	key={i} 
    	name={data.name} 
    	rotation_period={data.rotation_period}
    	diameter={data.diameter}
    	climate={data.climate}
    	terrain={data.terrain} 
    	/>
    	</div>);
  });
};

export default PlanetList;
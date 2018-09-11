import React from 'react';



const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2 tc'>
			<input 
			className='pa1 br-pill tc'
			type='search' 
			placeholder='Search your Star Wars planet' 
			onChange={searchChange}/>
		</div>
	);
}

export default SearchBox;
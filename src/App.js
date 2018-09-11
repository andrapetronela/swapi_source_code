import React from 'react';
import PlanetList from './PlanetList';
import SearchBox from './SearchBox';
import './App.css';

 class App extends React.Component {
	constructor() {
		super()
		this.state = {
			results: [],
			searchfield: ''
		}
	}
	componentDidMount() {
		fetch('https://swapi.co/api/planets/')
			.then(response => response.json())
			.then(obj => this.setState({results: obj.results}))//({name: obj.name, height: obj.height}))
		}

	onSearchChange = (event) => {
		// changing the robots according to the search bar value
		this.setState({ searchfield: event.target.value })
	}
	render() {
		const filteredNames = this.state.results.filter(results => {
			return results.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		<div>

			<h1 className='tc title'>Star Wars Planets</h1>
			<SearchBox className='search' searchChange={this.onSearchChange}/>
			<PlanetList results={filteredNames} />
		</div>
	);
	}
}

export default App;
import React from 'react';

class Search extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			query: ""
		}
		this.search = this.search.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onChange (e) {
		this.setState({
			query: e.target.value
		});
	}

	search() {
		this.props.onSearch(this.state.query);
	}

	render() {
		return (
			<div>
			<br />
			<div >
			<input value={this.state.querys} onChange={this.onChange} onKeyPress={this.search} placeholder="Enter Ingredient" /> <br />      
			<button onClick={this.search}> Find Recipes </button>
			</div>
			</div>
			)
	}
}

export default Search;
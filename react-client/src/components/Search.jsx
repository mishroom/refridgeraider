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

			<div >
			<h4>use em before you lose em</h4>
			Enter an ingredient  <input value={this.state.querys} onChange={this.onChange} onKeyPress={this.search} />       
			<button onClick={this.search}> Find Recipes </button>
			</div>
			</div>
			)
	}
}

export default Search;
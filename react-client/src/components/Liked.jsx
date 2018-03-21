import React from 'react';
import $ from 'jquery';

class Liked extends React.Component {

	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
	}

	delete() {
		this.props.onDelete(this.props.recipe);
	}

	render() {

    	var link =  this.props.recipe.image.slice(0,23) + this.props.recipe.image.slice(36)
		// console.log(this.props);
		// if(this.props.recipe){
			return (
				<div className='likedRecipe'>
						<div className ='col'>
							Name: <a href={ link.slice(0,-4) } target="_blank">{ this.props.recipe.title }</a><br />
							Likes: { this.props.recipe.likes }
						</div>
						<div className ='col'>
							<img src={ this.props.recipe.image } />
						</div>
						<button onClick={this.delete}> Delete Recipe </button>
				</div>

				)
		// }
		// else {
		// 	return (
		// 		<div/>
		// 		)
		// }
	}
}

export default Liked;


/*

<div className='recipe'>
			<div className ='col'>
			Recipe Name: { this.props.recipe.title }
			Likes: { this.props.recipe.likes }
			</div>
			<div className ='col'>
			<img src={ this.props.recipe.image } />
			</div>
			</div>

*/
import React from 'react';
import { Card, Icon, Image, Button, Popup } from 'semantic-ui-react';

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
			

		<div className='recipe'>
          <Card color='green' raised>
            <Image src={ this.props.recipe.image } />
            <Card.Content>
              <Card.Header><a href={ link.slice(0,-4) } target="_blank">{ this.props.recipe.title }</a></Card.Header>
            </Card.Content>
            <Card.Content extra>
            Likes: { this.props.recipe.likes } <br /> <br />
            </Card.Content>            
          </Card>
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

*/
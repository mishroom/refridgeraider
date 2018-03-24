import React from 'react';
import AdditionalIngredients from './AdditionalIngredients.jsx';
import UnusedIngredients from './UnusedIngredients.jsx';
import { Card, Icon, Image } from 'semantic-ui-react';

class RecipeItem extends React.Component {

  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
  }


  save() {
    // this.setState({
    //   recipe: e.target
    // });
    // console.log("THIS:  ",this);
    this.props.onSave(this.props.recipe);
  }

  render() {
    var link =  this.props.recipe.image.slice(0,23) + this.props.recipe.image.slice(36)
      return (
        <div className='recipe'>
          <Card color='green' raised>
            <Image src={ this.props.recipe.image } />
            <Card.Content>
              <Card.Header><a href={ link.slice(0,-4) } target="_blank">{ this.props.recipe.title }</a></Card.Header>
            </Card.Content>
            <Card.Content extra>
            Likes: { this.props.recipe.likes } <br /> <br />
            Unused Ingredients: {this.props.recipe.unusedIngredients.length} <br />
            {this.props.recipe.unusedIngredients.map(ingredient => <UnusedIngredients key={ingredient.id} name={ingredient.name} /> )} <br />
            Additional Ingredients: {this.props.recipe.missedIngredientCount} <br />
            {this.props.recipe.missedIngredients.map(ingredient => <AdditionalIngredients key={ingredient.id} name={ingredient.name} /> )}
            </Card.Content>

            <button onClick={this.save} > Save Recipe </button>
          </Card>
        </div>
      )
    }
  }

  export default RecipeItem;
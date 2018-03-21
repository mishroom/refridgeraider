import React from 'react';
import AdditionalIngredients from './AdditionalIngredients.jsx';
import UnusedIngredients from './UnusedIngredients.jsx';

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
          <div className ='col'>
            Name: <a href={ link.slice(0,-4) } target="_blank">{ this.props.recipe.title }</a><br /> <br />
            Likes: { this.props.recipe.likes } <br /> <br />
            Unused Ingredients: {this.props.recipe.unusedIngredients.length} <br />
            {this.props.recipe.unusedIngredients.map(ingredient => <UnusedIngredients key={ingredient.id} name={ingredient.name} /> )} <br />
            Additional Ingredients: {this.props.recipe.missedIngredientCount} <br />
            {this.props.recipe.missedIngredients.map(ingredient => <AdditionalIngredients key={ingredient.id} name={ingredient.name} /> )}
          </div>
          <div className ='col'>
            <img src={ this.props.recipe.image } />

          </div>
          <button onClick={this.save} > Save Recipe </button>
        </div>
      )
    }
  }

  export default RecipeItem;
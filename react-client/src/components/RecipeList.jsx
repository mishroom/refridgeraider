import React from 'react';
import RecipeItem from './RecipeItem.jsx';
import Liked from './Liked.jsx';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }

  filter(e) {
    this.props.onClick(e);
  }

  donwload() {
    this.props.onDownload();
  }

render() {
  return (
	<div>
	<div className="results">
	<h3>Recipes</h3>
  Filter By: <br />
	<form>
		<div className="radio">
          <label>

            <input type="radio" value="MostPopular" 
                   checked={this.props.selectedOption === 'MostPopular'} 
                   onClick={this.filter} />
            Most Popular  
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Unused" 
                   checked={this.props.selectedOption === 'Unused'} 
                   onClick={this.filter} />
            Unused Ingredients  
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Additional" 
                   checked={this.props.selectedOption === 'Additional'} 
                   onClick={this.filter} />
            Additional Ingredients  
          </label>
        </div>
	</form>
	<div>
	{ this.props.recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} onSave={this.props.onSave}/>)}
	</div>
	</div>


	<div className="liked">
	<h3>Saved Recipes</h3>
  <button  > Download as CSV </button>
  <br />
	{this.props.likedRecipes.map(recipe => <Liked key={recipe.id} recipe={recipe} onDelete={this.props.onDelete} />)}

	</div>  

	</div>
	)
}
}
export default RecipeList;
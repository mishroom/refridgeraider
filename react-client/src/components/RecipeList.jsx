import React from 'react';
import RecipeItem from './RecipeItem.jsx';
import Liked from './Liked.jsx';
import { Card } from 'semantic-ui-react';

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
  if(this.props.recipes.length) {
    return (
  <div>
  <div className="results">
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
  </form> <br />
  <div>
   <br />
  <Card.Group centered>
  { this.props.recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} onSave={this.props.onSave} user={this.props.user}/>)} 
  </Card.Group>
  </div>
  </div>

  </div>
  )
  } else {
    return (<div></div>)
  }
  
}
}
export default RecipeList;
import React from 'react';
import RecipeItem from './RecipeItem.jsx';
import Liked from './Liked.jsx';
import { Card } from 'semantic-ui-react';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.radioButtons = this.radioButtons.bind(this);
  }

  filter(e) {
    this.props.onClick(e);
  }

  donwload() {
    this.props.onDownload();
  }

  radioButtons () {
    return (
      <div>
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
  </div>
    )
  }

  render() {
    let radioButtons = this.radioButtons;
    if(this.props.view==="saved") {
      return(
        
        <div className="results"> <br />
          <Card.Group centered>
            {this.props.user[0].likedRecipes.map(recipe => <Liked key={recipe.id} recipe={recipe} user={this.props.user}/>)}
          </Card.Group>
        </div>
      )

    } else if(this.props.recipes.length) {
      return (
        <div className="results"> <br />
        {radioButtons()}
          <Card.Group centered>
            { this.props.recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} onSave={this.props.onSave} user={this.props.user}/>)} 
          </Card.Group>
        </div>

        )
    } else{
      return (<div>Search above to see results</div>)
    }
    
  }
}
export default RecipeList;
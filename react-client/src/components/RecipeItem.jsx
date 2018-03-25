import React from 'react';
import AdditionalIngredients from './AdditionalIngredients.jsx';
import UnusedIngredients from './UnusedIngredients.jsx';
import { Card, Icon, Image, Button, Popup } from 'semantic-ui-react';

class RecipeItem extends React.Component {

  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state={ isOpen: false};
  }


  save() {
    // this.setState({
    //   recipe: e.target
    // });
    // console.log("THIS:  ",this);
    this.props.onSave(this.props.recipe);
  }

  handleOpen() {
    if(this.props.user.length === 0) {
      this.setState({ isOpen: true})
    } else {
      this.props.onSave(this.props.recipe);
      this.setState({ isOpen: false})
    }
  }

  handleClose() {
    this.setState({ isOpen: false});
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
                <Popup
                  trigger={<Button  > Save Recipe </Button>}
                  content='Login To Save'
                  on='click'
                  hideOnScroll
                  open={this.state.isOpen}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                  position="top center"
                />
            
          </Card>
        </div>
      )
    }
  }

  export default RecipeItem;
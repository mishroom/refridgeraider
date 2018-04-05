import React from 'react';
import AdditionalIngredients from './AdditionalIngredients.jsx';
import UnusedIngredients from './UnusedIngredients.jsx';
import { Card, Icon, Image, Button, Popup, Label } from 'semantic-ui-react';

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
    let recipe = {
      id: this.props.recipe.id, 
      title: this.props.recipe.title,
      image: this.props.recipe.image,
      likes: this.props.recipe.likes
    }
    this.props.onSave(recipe);
  }

  handleOpen() {
    if(this.props.user.length === 0) {
      this.setState({ isOpen: true})
    } else {
      this.save();
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
          <Card raised >

            <a href={ link.slice(0,-4) } target="_blank">

            <div className="imageRe" style={{backgroundImage : 'url(' + this.props.recipe.image + ')',}} href={ link.slice(0,-4) } target="_blank" > 
            <Label>
              <Icon name='heart' color="red" /> { this.props.recipe.likes }
            </Label>
            </div> </a>
            <Card.Content className='recipeName'>

              <Card.Header size='medium'><a href={ link.slice(0,-4) } target="_blank">{ this.props.recipe.title }</a></Card.Header>
            </Card.Content>

            <Card.Content className="cardScroll" extra href={ link.slice(0,-4) } target="_blank">
            
            
            Unused Ingredients: {this.props.recipe.unusedIngredients.length} <br />
            {this.props.recipe.unusedIngredients.map(ingredient => <UnusedIngredients key={ingredient.id} name={ingredient.name} /> )} <br />
            Additional Ingredients: {this.props.recipe.missedIngredientCount} <br />
            {this.props.recipe.missedIngredients.map(ingredient => <AdditionalIngredients key={ingredient.id} name={ingredient.name} /> )}
            </Card.Content>
                <Popup
                  trigger={<Button color="green" > Save Recipe </Button>}
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

  /*
          <Image className='recipeImg' src={this.props.recipe.image} label={{ as: 'a', color: 'black', content: 'Hotel', icon: 'hotel', ribbon: true }} />
          */

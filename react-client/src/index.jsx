import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import List from './components/List.jsx';
import Search from './components/Search.jsx';
import RecipeList from './components/RecipeList.jsx';
import RecipeItems from './components/RecipeItem.jsx';
import Banner from './components/Banner.jsx';



// import StyleSheet from './../dist/style.css';

var sampleData = [
  {
    "id":556470,
    "title":"Apple fritters",
    "image":"https://spoonacular.com/recipeImages/Apple-fritters-556470.jpg",
    "imageType":"jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":0,
    "likes":243
  },
  {
    "id":47950,
    "title":"Cinnamon Apple Crisp",
    "image":"https://spoonacular.com/recipeImages/cinnamon_apple_crisp-47950.jpg",
    "imageType":"jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":0,
    "likes":35
  },
  {
    "id":534573,
    "title":"Brown Butter Apple Crumble",
    "image":"https://spoonacular.com/recipeImages/Brown-Butter-Apple-Crumble-534573.jpg",
    "imageType":"jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":0,
    "likes":7
  },
  {
    "id":47732,
    "title":"Apple Tart",
    "image":"https://spoonacular.com/recipeImages/apple_tart-47732.jpg",
    "imageType":"jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":0,
    "likes":0
  },
  {
    "id":47891,
    "title":"Apple Tart",
    "image":"https://spoonacular.com/recipeImages/apple_tart-47891.jpg",
    "imageType":"jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":0,
    "likes":0
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ingredients: [],
      recipes: [],
      likedRecipes: [],
      selectedOption: '',
      doubleClick: true,
      user: [],
    }
  }

  getLikedRecipes() {
    // $.ajax({
    //   url: '/storage', 
    //   success: (data) => {
    //     this.setState({
    //       likedRecipes: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  componentDidMount() {
    // this.getLikedRecipes();
  }

  filter (e) {
    this.setState({doubleClick: !this.state.doubleClick, selectedOption: e.target.value});
    // console.log(e.target.value, this.state.doubleClick);
    if(e.target.value === 'MostPopular'){
      this.state.doubleClick ? 
      this.setState({recipes: this.state.recipes.sort(function (a, b) {
        return b.likes - a.likes 
        })
      }) :
      this.setState({recipes: this.state.recipes.sort(function (a, b) {
        return a.likes - b.likes 
        })
      });
    }
    if(e.target.value === 'Unused'){
      this.state.doubleClick ? 
      this.setState({recipes: this.state.recipes.sort(function (a, b) {
        return  a.unusedIngredients.length - b.unusedIngredients.length 
        })
      }) :
      this.setState({recipes: this.state.recipes.sort(function (a, b) {
        return  b.unusedIngredients.length - a.unusedIngredients.length 
        })
      });
    }
    if(e.target.value === 'Additional'){
      this.state.doubleClick ? 
      this.setState({recipes: this.state.recipes.sort(function (a, b) {
        return a.missedIngredientCount - b.missedIngredientCount
        })
      }) :
      this.setState({recipes: this.state.recipes.sort(function (a, b) {
        return b.missedIngredientCount - a.missedIngredientCount
        })
      });
    }
  }

  search(ingredient) {
      $.ajax({
      url: `/search`,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        type: 'search',
        query: ingredient
      }),
      success: (data) => {
        this.setState({recipes: data});
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  save(recipe) {
    let user = this.state.user[0];
      $.ajax({
        url: `/saveRecipe`,
        type: 'POST',
        contentType: 'application/json',
         data: JSON.stringify({
          user: user,
          recipe: recipe
        }),
        success: (data) => {
          // console.log(data);
        },
        error: (err) => {
          console.error(err);
        }
      })
    
  }

  delete (recipe) {
    // $.ajax({
    //   url: `/storage`,
    //   type: 'POST',
    //   contentType: 'application/json',
    //   data: JSON.stringify({
    //     type: 'delete',
    //     recipe: recipe
    //   }),
    //   success: (data) => {
    //     // console.log("RECIPE SENT", data);
    //     this.getLikedRecipes();
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   }
    // })
  }

  login (username, password) {
    $.ajax({
      url: `/login`,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        username: username,
        password: password
      }),
      success: (data) => {
        if(!data.length) {
          alert('username not found. try signing up first');
        } else if(data[0].password !== password) {
          alert('wrong password');
        } else {
          this.setState({user: data});
        }
        
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  signup(username, password) {
    $.ajax({
      url: `/signup`,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        username: username,
        password: password
      }),
      success: (data) => {
        if(!data) {
          alert('username exists');
        } else {
          alert('login to continue');
        }
        
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  render () {
    return (
      <div id='parent'>
        <div className="banner">
          <Banner onSearch={this.search.bind(this)} onLogin={this.login.bind(this)} onSignup={this.signup.bind(this)} user={this.state.user}/>
        </div>
        <div id="body">
          <RecipeList likedRecipes={this.state.likedRecipes} recipes={this.state.recipes} selectedOption={this.state.selectedOption} onSave={this.save.bind(this)} onDelete={this.delete.bind(this)} onClick={this.filter.bind(this)} user={this.state.user} />
        </div>  
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


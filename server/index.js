var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index');
// const RapidAPI = new require('rapidapi-connect');
// const rapid = new RapidAPI('refridgerraider_5a4e8c2fe4b038fa76c0cb61', 'a31eb21a-d1de-4cac-9150-9dc378c92bb9');
var unirest = require('unirest');


var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/search', function (req, res) {
      var query = req.body.query;
      query = query.split(',').join('%2C');
            // //connect to API 
            unirest.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=true&ingredients=${query}&limitLicense=false&number=10&ranking=1`)
            .header("X-Mashape-Key", "y8p0We0kS8mshZXRWGLWEQWduPRZp115RAsjsn4XvamU1HNo8g")
            .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
            .end(function (result) {
              console.log(result.body);
                res.json(result.body);
              });
            // res.json(sampleData);

  // res.json(sampleData);

});

app.post('/login', (req, res) => {
  let {username, password} = req.body;
  db.login({username: username}, (err, data) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      res.json(data);
    }
  })


})

app.post('/signup', (req, res) => {
  let {username, password} = req.body;
  db.login({username: username}, (err, data) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      if(!data.length) {
        db.signup({username: username, password: password});
        res.json(1)
      } else {
        res.json(0)
      }
    }
  })

})

app.post('/saveRecipe', (req, res) => {
  let { user, recipe } = req.body;
  db.saveRecipe(user, recipe, (err, data) => {
    if(err) {
      console.log(err);
      res.end();
    } else {
      res.json(data);
    }
  });
})


app.listen(process.env.PORT || 3000, function() {
  console.log('server live');
});


sampleData = [
{
  "id":47950,
  "title":"Cinnamon Apple Crisp",
  "image":"https://spoonacular.com/recipeImages/cinnamon_apple_crisp-47950.jpg",
  "imageType":"jpg",
  "usedIngredientCount":0,
  "missedIngredientCount":0,
  "missedIngredients":[
  {
    "id":93674,
    "amount":0.5,
    "unit":"cup",
    "unitLong":"cups",
    "unitShort":"cup",
    "aisle":"Milk, Eggs, Other Dairy",
    "name":"cinnamon sugar butter",
    "originalString":"1/2 cup Land O Lakes® Cinnamon Sugar Butter Spread",
    "metaInformation":["lakes®"],
    "image":"https://spoonacular.com/cdn/ingredients_100x100/cinnamon-sugar-butter.png"
  },
  {"id":8120,"amount":0.75,"unit":"cup","unitLong":"cups","unitShort":"cup","aisle":"Cereal","name":"old-fashioned oats","originalString":"3/4 cup uncooked old-fashioned oats","metaInformation":["uncooked"],"i/inmage":"https://spoonacular.com/cdngredients_100x100/rolled-oats.jpg"}],
  "usedIngredients":[
  {
    "id":9003,
    "amount":6,"unit":"cups","unitLong":"cups","unitShort":"cup","aisle":"Produce","name":"apples",
    "originalString":"6 medium (6 cups) apples, peeled, cored, sliced","metaInformation":["cored","medium","peeled","sliced"],
    "image":"https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
  }],
  "unusedIngredients":[{"id":20081,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Baking","name":"flour","originalString":"flour","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/flour.png"},{"id":19335,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Baking","name":"sugar","originalString":"sugar","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/sugar-cubes.jpg"}],
  "likes":35},



  {"id":534573,"title":"Brown Butter Apple Crumble","image":"https://spoonacular.com/recipeImages/Brown-Butter-Apple-Crumble-534573.jpg","imageType":"jpg","usedIngredientCount":1,"missedIngredientCount":2,"missedIngredients":[{"id":2010,"amount":0.5,"unit":"tsp","unitLong":"teaspoons","unitShort":"tsp","aisle":"Spices and Seasonings","name":"cinnamon","originalString":"1/2 tsp cinnamon","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"},{"id":8120,"amount":0.5,"unit":"cup","unitLong":"cups","unitShort":"cup","aisle":"Cereal","name":"oats","originalString":"1/2 cup uncooked oats (not instant)","metaInformation":["uncooked","(not instant)"],"image":"https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg"}],"usedIngredients":[{"id":9003,"amount":4,"unit":"","unitLong":"","unitShort":"","aisle":"Produce","name":"apples","originalString":"4 apples, peeled, cored and sliced","metaInformation":["cored","peeled","sliced"],"image":"https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"}],"unusedIngredients":[{"id":20081,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Baking","name":"flour","originalString":"flour","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/flour.png"},{"id":19335,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Baking","name":"sugar","originalString":"sugar","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/sugar-cubes.jpg"}],"likes":7},{"id":47891,"title":"Apple Tart","image":"https://spoonacular.com/recipeImages/apple_tart-47891.jpg","imageType":"jpg","usedIngredientCount":1,"missedIngredientCount":2,"missedIngredients":[{"id":1145,"amount":4,"unit":"Tbsps","unitLong":"Tbsps","unitShort":"Tbsp","aisle":"Milk, Eggs, Other Dairy","name":"unsalted butter","originalString":"4 Tbsps chilled unsalted butter, cut into 1-inch pieces","metaInformation":["unsalted","chilled","cut into 1-inch pieces"],"image":"https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"},{"id":1054,"amount":3,"unit":"servings","unitLong":"servings","unitShort":"servings","aisle":"Milk, Eggs, Other Dairy","name":"whipped cream","originalString":"Whipped cream with cognac to serve","metaInformation":["with cognac to serve"],"image":"https://spoonacular.com/cdn/ingredients_100x100/whipped-cream.jpg"}],"usedIngredients":[{"id":9003,"amount":4,"unit":"","unitLong":"","unitShort":"","aisle":"Produce","name":"apples","originalString":"4 ripe Gravenstein apples, washed, cored and finely sliced","metaInformation":["washed","cored","ripe","finely sliced"],"image":"https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"}],"unusedIngredients":[{"id":20081,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Baking","name":"flour","originalString":"flour","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/flour.png"},{"id":19335,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Baking","name":"sugar","originalString":"sugar","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/sugar-cubes.jpg"}],"likes":0},{"id":556470,"title":"Apple fritters","image":"https://spoonacular.com/recipeImages/Apple-fritters-556470.jpg","imageType":"jpg","usedIngredientCount":0,"missedIngredientCount":3,"missedIngredients":[{"id":14006,"amount":2,"unit":"tablespoons","unitLong":"tablespoons","unitShort":"Tbsp","aisle":"Alcoholic Beverages","name":"beer","originalString":"2 tablespoons of lager beer","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/beer.jpg"},{"id":1123,"amount":1,"unit":"","unitLong":"","unitShort":"","aisle":"Milk, Eggs, Other Dairy","name":"egg","originalString":"1 egg","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/egg.jpg"},{"id":1029003,"amount":2,"unit":"","unitLong":"","unitShort":"","aisle":"Produce","name":"red delicious apples","originalString":"2 Golden Delicious apples","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/red-delicious-apples.png"}],"usedIngredients":[],"unusedIngredients":[{"id":9003,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Produce","name":"apples","originalString":"apples","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"},{"id":20081,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Baking","name":"flour","originalString":"flour","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/flour.png"},{"id":19335,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Baking","name":"sugar","originalString":"sugar","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/sugar-cubes.jpg"}],"likes":243},{"id":47732,"title":"Apple Tart","image":"https://spoonacular.com/recipeImages/apple_tart-47732.jpg","imageType":"jpg","usedIngredientCount":0,"missedIngredientCount":3,"missedIngredients":[{"id":2048,"amount":0.75,"unit":"tsp","unitLong":"teaspoons","unitShort":"tsp","aisle":"Oil, Vinegar, Salad Dressing","name":"apple cider vinegar","originalString":"3/4 tsp apple cider vinegar","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/apple-cider-vinegar.jpg"},{"id":1029003,"amount":2.5,"unit":"lbs","unitLong":"pounds","unitShort":"lb","aisle":"Produce","name":"granny smith apples","originalString":"6 - 7 medium Granny Smith apples (about 2 1/2 lbs)","metaInformation":["medium"],"image":"https://spoonacular.com/cdn/ingredients_100x100/red-delicious-apples.png"},{"id":1145,"amount":4.5,"unit":"oz","unitLong":"ounces","unitShort":"oz","aisle":"Milk, Eggs, Other Dairy","name":"unsalted butter","originalString":"9 tbsp (4 1/2 oz) cold unsalted butter, cut into cubes","metaInformation":["unsalted","cold","cut into cubes"],"image":"https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"}],"usedIngredients":[],"unusedIngredients":[{"id":9003,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Produce","name":"apples","originalString":"apples","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"},{"id":20081,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Baking","name":"flour","originalString":"flour","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/flour.png"},{"id":19335,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Baking","name":"sugar","originalString":"sugar","metaInformation":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/sugar-cubes.jpg"}],"likes":0}]

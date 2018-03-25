var mongoose = require('mongoose');
mongoose.connect('mongodb://mish:Llamas12@ds249398.mlab.com:49398/refridgeraider', { useMongoClient: true });

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var recipeSchema = mongoose.Schema({
  id: Number, 
  title: String,
  image: String,
  likes: Number
});

var Recipe = mongoose.model('Recipe', recipeSchema);

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  likedRecipes: [Object]
});

var User = mongoose.model('User', userSchema);


var saveRecipe = function(recipe) {
  var newRecipe = new Recipe(recipe);
  newRecipe.save();
}

var deleteRecipe = function (recipe) {
  Recipe.find(recipe).remove().exec();
}

var selectAll = function(callback) {
  Recipe.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.saveRecipe = saveRecipe;
module.exports.deleteRecipe = deleteRecipe;
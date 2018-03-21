var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/storage');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var likedSchema = mongoose.Schema({
  id: Number, 
  title: String,
  image: String,
  imageType: String,
  usedIngredientCount: Number,
  missedIngredientCount: Number,
  likes: Number
});

var Recipe = mongoose.model('Recipe', likedSchema);

// var newInstance = new Recipe ({
//   quantity: 3,
//   description: "blubb"
// });

// newInstance.save();

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
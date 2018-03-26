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
  likedRecipes: [{type: mongoose.Schema.Types.Mixed}]
});

var Users = mongoose.model('Users', userSchema);

var login = function(user, cb) {
  Users.find(user).exec(cb);
}

var signup = function(user) {
  const newProfile = new Users(user);
  newProfile.save();
}

var saveRecipe = function(user, recipe) {
  Users.find({username: user.username}, (err, data) => {
    if(data) {
      Users.update({_id: user._id}, { $push: {likedRecipes: recipe}}).exec();
    } else if (err) {
      console.log(err)
    }
  });
  // user.likedRecipes.push(recipe);
  // console.log(user.likedRecipes);
  
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
module.exports.login = login;
module.exports.signup = signup;
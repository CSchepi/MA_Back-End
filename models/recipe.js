const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imgurl: String,
  number: {
    type: Number, 
    required: true
  },
  carbonpoints: Number,
  carbonmedal: Number,
  waterpoints: Number,
  watermedal: Number,
  backtext: String,
  cardidentifier: String,
  
  //Individuals for recipe
  ingredientlist: String,
  ingredientarray: Array,
  instructions: String

}, {timestamps: true});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
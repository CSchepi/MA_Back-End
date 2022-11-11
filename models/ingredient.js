const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number, 
    required: true
  },
  carbonpoints: Number,
  carbonmedal: Number,
  waterpoints: Number,
  watermedal: Number,
  infobar: String,
  backtext: String,
  
  //Individuals for ingredient
  seasonstart: Number,
  seasonend: Number,
  region: Number,
  type: Number

}, {timestamps: true});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
module.exports = Ingredient;
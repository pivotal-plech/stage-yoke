var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var characterSchema = new mongoose.Schema({
  archetype: {type: String, required: "Archetype is required"},
  name: {type: String, required: "Name is required"},
  quote: {type: String, required: "Quote is required"},
  title: {type: String, required: "Title is required"},
  banner: {type: String, required: "Need a banner URL"},
  avatar: {type: String, required: "Need an avatar URl"},
  slug: {type: String, required: "Slug needs to be present.", unique: "Slug needs to be unique."},
});

characterSchema.plugin(uniqueValidator);

var Character = mongoose.model('Character', characterSchema);

module.exports = Character;

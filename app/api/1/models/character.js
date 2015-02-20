var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var characterSchema = new mongoose.Schema({
  archetype: {type: String, required: true},
  name: {type: String, required: true},
  quote: {type: String, required: true},
  title: {type: String, required: true},
  banner: {type: String, required: true},
  avatar: {type: String, required: true},
  slug: {type: String, required: true, unique: true},
});

characterSchema.plugin(uniqueValidator);

var Character = mongoose.model('Character', characterSchema);

module.exports = Character;

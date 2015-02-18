var mongoose = require('mongoose');

var characterSchema = new mongoose.Schema({
  archetype: {type: String}
});

var Character = mongoose.model('Character', characterSchema);

module.exports = Character;

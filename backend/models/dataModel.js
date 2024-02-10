const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const contentDataSchema = new Schema({
  id: String,
  title: String,
  intro: String,
  title1: String,
  list2: [String],
  example1: String,
  title2: String,
  desc2: String,
  example2: String,
  title3: String,
  desc3: String,
  example3: String,
  title4: String,
  desc4: String,
  example4: String,
  title5: String,
  desc5: String,
  example5: String,
  title6: String,
  desc6: String,
  example6: String,
  list: [String],
  desc1: String,
  example1: String,
  desc5: String,
  desc6: String
});

// Define the main schema
const mainSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  data: contentDataSchema
});

const Data = mongoose.model('Data', mainSchema);

module.exports = Data;

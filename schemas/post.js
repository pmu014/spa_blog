const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true, /*무조건 값이 있어야하는가 없어야하는가? */
    unique: true
  },
  password: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String
  },
  content: {
    type: String
  }},
  {
    timestamps: true   
  });
module.exports = mongoose.model("Posts", postSchema);
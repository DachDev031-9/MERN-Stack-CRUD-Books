const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookname: String,
  author: String,
  tel: String,
});

module.exports = mongoose.model("books", bookSchema);

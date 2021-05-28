const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  volumeInfo: { type: Object, required: true },
  authors: { type: Array, required: true },
  description: { type: String, default: "" },
  image: { type: String, default: "" },
  link: { type: String, default: "" },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

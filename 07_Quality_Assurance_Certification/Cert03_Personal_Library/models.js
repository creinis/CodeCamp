//models.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
    title: { type: String, require: true },
    comments: [String],
});

const Book = mongoose.mongoose.model("Book", BookSchema);

exports.Book = Book;

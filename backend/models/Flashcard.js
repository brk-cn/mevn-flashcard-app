const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
    word: { type: String, required: true },
    wordType: { type: String, required: true },
    context: { type: String },
    image: { type: String },
    translation: { type: String, required: true }
});

const Flashcard = mongoose.model('Flashcard', flashcardSchema);

module.exports = Flashcard;
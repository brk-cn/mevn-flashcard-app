require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const flashcardRoute = require('./routes/FlashcardRoute');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/flashcards', flashcardRoute);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
const express = require('express');
const Flashcard = require('../models/Flashcard');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const flashcards = await Flashcard.find();
        res.status(200).json(flashcards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const flashcard = await Flashcard.findById(req.params.id);
        if (!flashcard) {
            return res.status(404).json({ error: 'Flashcard not found' });
        }
        res.status(200).json(flashcard);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const flashcard = new Flashcard(req.body);
        await flashcard.save();
        res.status(201).json(flashcard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const flashcard = await Flashcard.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!flashcard) {
            return res.status(404).json({ error: 'Flashcard not found' });
        }
        res.status(200).json(flashcard);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const flashcard = await Flashcard.findByIdAndDelete(req.params.id);
        if (!flashcard) {
            return res.status(404).json({ error: 'Flashcard not found' });
        }
        res.status(200).json({ message: 'Flashcard deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
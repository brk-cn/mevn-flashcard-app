<template>
  <div class="edit-flashcard">
    <h1>Edit Flashcard</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="word">Word:</label>
        <input type="text" id="word" v-model="flashcard.word" required />
      </div>
      <div class="form-group">
        <label for="wordType">Word Type:</label>
        <input type="text" id="wordType" v-model="flashcard.wordType" required />
      </div>
      <div class="form-group">
        <label for="context">Context:</label>
        <input type="text" id="context" v-model="flashcard.context" />
      </div>
      <div class="form-group">
        <label for="image">Image URL:</label>
        <input type="text" id="image" v-model="flashcard.image" />
      </div>
      <div class="form-group">
        <label for="translation">Translation:</label>
        <textarea id="translation" v-model="flashcard.translation"></textarea>
      </div>
      <button type="submit">Update Flashcard</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditFlashcard',
  data() {
    return {
      flashcard: {
        word: '',
        wordType: '',
        context: '',
        image: '',
        definition: ''
      }
    };
  },
  async created() {
    const id = this.$route.params.id;
    console.log('Flashcard ID:', id);
    try {
      const response = await axios.get(`http://localhost:3000/flashcards/${id}`);
      console.log('API Response:', response.data);
      this.flashcard = response.data;
    } catch (error) {
      console.error('Error fetching flashcard:', error);
    }
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        const response = await axios.put(`http://localhost:3000/flashcards/${id}`, this.flashcard);
        console.log('Flashcard updated:', response.data);
        this.$router.push('/flashcards');
      } catch (error) {
        console.error('Error updating flashcard:', error);
      }
    }
  }
};
</script>

<style scoped>
.edit-flashcard {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>

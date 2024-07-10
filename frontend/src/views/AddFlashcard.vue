<template>
  <div class="add-flashcard">
    <Header :title="'Add Flashcard'" />
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
        <label for="definition">Translation:</label>
        <textarea id="definition" v-model="flashcard.translation"></textarea>
      </div>
      <button type="submit">Add Flashcard</button>
    </form>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import axios from 'axios';

export default {
  name: 'AddFlashcard',
  components: {
    Header
  },
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
  methods: {
    async submitForm() {
      if (!this.flashcard.context) {
        this.flashcard.context = '';
      }

      try {
        const response = await axios.post('http://localhost:3000/flashcards', this.flashcard);
        console.log('Flashcard added:', response.data);
        this.$router.push('/');
      } catch (error) {
        console.error('Error adding flashcard:', error);
      }
    }
  }
};
</script>

<style scoped>
.add-flashcard {
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

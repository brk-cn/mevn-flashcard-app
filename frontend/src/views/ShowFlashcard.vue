<template>
  <div class="flashcard-viewer">
    <Header :title="''" />
    <div class="flashcards">
      <button @click="prevFlashcard" :disabled="currentFlashcardIndex === 0">‹</button>
      <Flashcard v-if="flashcards.length" :flashcard="flashcards[currentFlashcardIndex]" />
      <button @click="nextFlashcard" :disabled="currentFlashcardIndex === flashcards.length - 1">›</button>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import axios from 'axios';
import Flashcard from '../components/Flashcard.vue';

export default {
  name: 'ShowFlashcard',
  components: {
    Flashcard,
    Header
  },
  data() {
    return {
      flashcards: [],
      currentFlashcardIndex: 0
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/flashcards');
      this.flashcards = this.shuffleArray(response.data);
    } catch (error) {
      console.error('Error fetching flashcards:', error);
    }
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    nextFlashcard() {
      if (this.currentFlashcardIndex < this.flashcards.length - 1) {
        this.currentFlashcardIndex++;
      }
    },
    prevFlashcard() {
      if (this.currentFlashcardIndex > 0) {
        this.currentFlashcardIndex--;
      }
    }
  }
};
</script>

<style scoped>
.flashcard-viewer {
  height: 100vh;
  margin: auto;
  padding: 20px;
}

.flashcards {
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  padding: 10px;
  margin: 0 10px;
  font-size: 24px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>

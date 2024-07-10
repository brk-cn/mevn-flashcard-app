<template>
  <div class="flashcard-list">
    <button @click="goHome">Home</button>
    <h1>Flashcard List</h1>
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Word</th>
          <th>Type</th>
          <th>Context</th>
          <th>Translation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="flashcard in flashcards" :key="flashcard._id">
          <td><img :src="flashcard.image" alt="Image" class="flashcard-image" /></td>
          <td>{{ flashcard.word }}</td>
          <td>{{ flashcard.wordType }}</td>
          <td>{{ flashcard.context }}</td>
          <td>{{ flashcard.translation }}</td>
          <td>
            <button @click="editFlashcard(flashcard._id)">Edit</button>
            <button @click="deleteFlashcard(flashcard._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  name: 'FlashcardList',
  data() {
    return {
      flashcards: []
    };
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:3000/flashcards');
      console.log(response)
      this.flashcards = response.data;
    } catch (error) {
      console.error('Error fetching flashcards:', error);
    }
  },
  methods: {
    async deleteFlashcard(id) {
      try {
        await axios.delete(`http://localhost:3000/flashcards/${id}`);
        this.flashcards = this.flashcards.filter(flashcard => flashcard._id !== id);
      } catch (error) {
        console.error('Error deleting flashcard:', error);
      }
    },
    editFlashcard(id) {
      this.$router.push(`/edit/${id}`);
    },
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.flashcard-list {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f4f4f4;
}

th:nth-child(1) {
  width: 15rem;
}
th:nth-child(2) {
  width: 15rem;
}
th:nth-child(3) {
  width: 10rem;
}
th:nth-child(4) {
  width: 10rem;
}
th:nth-child(5) {
  width: 25rem;
}


button {
  width: 5rem;
  height: 2rem;
  margin: 0 1rem;
}

.flashcard-image {
  width: 8rem;
  height: auto;
}
</style>

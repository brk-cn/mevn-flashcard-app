<template>
  <div class="home-container">
    <div class="button-container">
      <button @click="goToAddFlashcard">Add Flashcard</button>
      <button @click="goToShowFlashcard">Show Flashcard</button>
      <button @click="goToFlashcardList">List Flashcards</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToAddFlashcard() {
      this.$router.push('/add');
    },
    goToShowFlashcard() {
      this.$router.push('/show');
    },
    goToFlashcardList() {
      this.$router.push('/flashcards');
    }
  }
}
</script>

<style scoped>
body {
  height: 100%;
  margin: 0 auto;
}

.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75vh;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
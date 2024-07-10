import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddFlashcard from '../views/AddFlashcard.vue';
import ShowFlashcard from '../views/ShowFlashcard.vue';
import FlashcardList from '../views/FlashcardList.vue';
import EditFlashcard from '../views/EditFlashcard.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddFlashcard },
  { path: '/show', component: ShowFlashcard },
  { path: '/flashcards', component: FlashcardList },
  {path: '/edit/:id', component: EditFlashcard}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

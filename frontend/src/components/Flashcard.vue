<template>
  <div class="flashcard" :class="{ 'is-flipped': isFlipped }" @click="flipCard">
    <div class="flashcard-inner">
      <div class="flashcard-front">
        <img :src="flashcard.image" alt="Flashcard image" class="flashcard-image" />
        <div class="flashcard-content">
          <h2 class="flashcard-word">{{ flashcard.word }}</h2>
          <p class="flashcard-type">{{ flashcard.wordType }}</p>
          <p v-if="flashcard.context" class="flashcard-context">context: {{ flashcard.context }}</p>
          <div class="flashcard-audio">
            <button @click="playText(flashcard.word, 'UK')">🔊 UK</button>
            <button @click="playText(flashcard.word, 'US')">🔊 US</button>
          </div>
        </div>
      </div>
      <div class="flashcard-back">
        <img :src="flashcard.image" alt="Flashcard image" class="flashcard-image" />
        <div class="flashcard-content">
          <h2 class="flashcard-translation">{{ flashcard.translation }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Flashcard',
  mounted() {
  },
  props: {
    flashcard: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFlipped: false
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
    playText(text, accent) {
      event.stopPropagation();
      if (typeof window.speechSynthesis !== 'undefined') {
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = window.speechSynthesis.getVoices();

        if (accent === 'UK') {
          utterance.voice = voices.find(voice => voice.name.includes('UK English'));
        } else if (accent === 'US') {
          utterance.voice = voices.find(voice => voice.name.includes('US English'));
        }

        utterance.lang = accent === 'UK' ? 'en-GB' : 'en-US';
        window.speechSynthesis.speak(utterance);
      } else {
        console.error('SpeechSynthesis is not supported');
      }
    }
  }
}
</script>

<style scoped>
.flashcard {
  perspective: 1000px;
  cursor: pointer;
}

.flashcard-inner {
  position: relative;
  width: 300px;
  height: 450px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flashcard.is-flipped .flashcard-inner {
  transform: rotateY(180deg);
}

.flashcard-front,
.flashcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.flashcard-front {
  background: #f0f0f0;
}

.flashcard-back {
  background: #f0f0f0;
  transform: rotateY(180deg);
}

.flashcard-image {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
}

.flashcard-content {
  position: relative;
  padding-top: 8rem;
  text-align: center;
  width: 100%;
}

.flashcard-word {
  font-size: 24px;
  font-weight: bold;
  margin: 1rem;
}

.flashcard-type {
  font-size: 18px;
}

.flashcard-context {
  font-size: 16px;
  margin-top: 0.5rem;
}

.flashcard-audio {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

button {
  width: 5rem;
  height: 3rem;
  margin: 1rem 0;
}

.flashcard-translation {
  font-size: 24px;
  margin: 10px 0;
}
</style>

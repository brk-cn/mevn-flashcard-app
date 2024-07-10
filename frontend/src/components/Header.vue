<template>
  <header class="header">
    <div class="header-left">
      <span>{{ title }}</span>
    </div>
    <div class="header-right">
      <router-link to="/">
        <font-awesome-icon icon="home" class="home-icon" />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.header {
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  font-size: 1.5rem;
}
.header-right {
  cursor: pointer;
}
.home-icon {
  color: #444;
  width: 2.5rem;
  height: 2.5rem;
}

.home-icon:hover {
    scale: 1.2;
}
</style>

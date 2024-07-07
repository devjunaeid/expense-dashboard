<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="absolute top-0 w-screen h-12 flex justify-center items-center gap-5 bg-white">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="absolute top-0 left-0 w-screen h-8 flex justify-center items-center gap-5 bg-white border-b border-gray-400/40">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

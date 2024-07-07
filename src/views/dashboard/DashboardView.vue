<script setup>
import Links from "../../components/Dashboard/nav/Links.vue";
</script>

<template>
  <div class="w-screen h-screen flex items-center bg-black p-5">
    <nav class="w-[350px] h-full">
      <Links />
    </nav>
    <div class="flex-1 h-[90%] mt-6 rounded-lg bg-white">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const links = ref(
  [
    { id: 1, title: "Expense", url: "/dashboard/expense" },
    { id: 1, title: "Expense", url: "/dashboard/expense" }
  ]
) 
</script>

<template>
  <div class="w-full flex flex-col justify-start align-middle" v-for="(link, index) in links" :key="link.id">
    
   <RouterLink class="text-2xl text-white font-semibold font-poppins" :to="link.url">{{ link.title }}</RouterLink>
  </div>
</template>

<style scoped>

.list-cont {
  width: 100%;
  text-align: left;
  color: white;
  font-family: 'Poppins';
  font-size: 55px;
  font-weight: bold;
}
</style>
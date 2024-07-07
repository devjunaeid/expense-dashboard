<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <main class="w-full h-screen flex justify-center items-center">
   <div class="flex flex-col gap-4 text-black text-center font-poppins text-2xl">
    <p>Welcome! to Expense Dashbord Homepage</p>
    <p class="font-bold text-xs">NB: Designed for desktop mode only (1920x1080)</p>
    <RouterLink class="bg-green-400 text-green-950 font-bold p-4" to="/dashboard/expense">Open Dashbord</RouterLink>
   </div> 
  </main>
</template>

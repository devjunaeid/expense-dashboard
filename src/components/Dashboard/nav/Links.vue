<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// All nevigation link definition.
const links = ref(
  [
    { id: 1, title: "Dashboard", url: "/dashboard" },
    { id: 2, title: "Expense", url: "/dashboard/expense" },
    { id: 3, title: "Wallets", url: "/dashboard/wallets" },
    { id: 4, title: "Summary", url: "/dashboard/summary" },
    { id: 5, title: "Accounts", url: "/dashboard/accounts" },
    { id: 6, title: "Settings", url: "/dashboard/settings" }
  ]
) 
</script>

<template>

  <!-- Iterate over links array -->
  <div class="w-full h-fit flex flex-col justify-start align-middle" v-for="(link, index) in links" :key="link.id">

    <!-- Checking if the current url is the active url -->
    <div v-if="$route.path == link.url" class="py-4">
      <RouterLink class="text-[25px] text-white font-semibold font-poppins" :to="link.url">{{ link.title }}
      </RouterLink>
    </div>

    <div v-else class="py-4">
      <RouterLink class="text-[25px] text-gray-500 font-semibold font-poppins" :to="link.url">{{ link.title }}
      </RouterLink>
    </div>
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
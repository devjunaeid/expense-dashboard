<script setup>
import Profile from "@/components/Dashboard/nav/Profile.vue";
import Links from "../../components/Dashboard/nav/Links.vue";
</script>

<template>
  <div class="w-screen h-screen flex items-center bg-black p-6">
   
    <!-- Dashboard Nav -->
    <nav class="w-[300px] h-full flex flex-col justify-center items-center">
      <div class="w-2/3 m-auto flex flex-col justify-start items-center">
        <Profile />
        <Links />
      </div>
    </nav>
    
    <!-- SubRoute/Component View -->
    <div class="flex-1 h-[90%] m-auto rounded-2xl bg-white">
      <RouterView />
    </div>
  </div>
</template>

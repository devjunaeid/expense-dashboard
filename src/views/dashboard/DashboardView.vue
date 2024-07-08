<script setup>
import Profile from "@/components/Dashboard/nav/Profile.vue";
import Links from "../../components/Dashboard/nav/Links.vue";
</script>

<template>
  <div class="m-auto flex items-center justify-center bg-black p-6 mx-10 rounded-2xl">
   
    <!-- Dashboard Nav -->
    <nav class="w-[300px] h-full flex flex-col justify-center items-center">
      <div class="w-2/3 m-auto flex flex-col justify-start items-center">
        <Profile />
        <Links />
      </div>
    </nav>
    
    <!-- SubRoute/Component View -->
    <div class="w-[1500px] h-[850px] rounded-2xl bg-white border border-blue-400">
      <RouterView />
    </div>
  </div>
</template>

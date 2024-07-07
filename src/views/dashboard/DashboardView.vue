<script setup>
import Profile from "@/components/Dashboard/nav/Profile.vue";
import Links from "../../components/Dashboard/nav/Links.vue";
</script>

<template>
  <div class="w-screen h-screen flex items-center bg-black p-5">
    <nav class="w-[350px] h-full flex flex-col justify-center items-center">
     <div class="w-2/3 m-auto flex flex-col justify-start items-center">
      <Profile/> 
      <Links />
     </div> 
    </nav>
    <div class="flex-1 h-[90%] mt-6 rounded-lg bg-white">
      <RouterView />
    </div>
  </div>
</template>

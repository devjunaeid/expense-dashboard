<script setup>
import image1 from "@/assets/imgs/expense/illustration1.png"
import image2 from "@/assets/imgs/expense/illustration2.png"

</script>

<template>
    <div class="relative w-[80%]">
        
        <!-- Illustrations  -->
       <div class="absolute w-[70%] m-auto -top-8 left-[50%] translate-x-[-50%] flex justify-between items-end">
        <img class="w-[84px] h-[72px]" :src="image1" alt="Files and Records Icon.">
        <img class="w-[52px] h-[90px]" :src="image2" alt="Plant Icon.">
       </div> 
      
       <!-- Message -->
       <div class="flex flex-col justify-start items-start gap-4 p-8 pt-20 rounded-2xl bg-lightblue font-poppins">
        <h2 class="text-[18] font-semibold">Save more money</h2>
        <p class="text[12px] font-normal text-bluegreen">eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        <a class="w-full mt-4 py-4 rounded-md border-none text-[13px] font-semibold bg-black text-white text-center uppercase" href="/tips">View tips</a>
       </div> 
    </div>
</template>
<script setup>
import { ref } from "vue";
import profileImg from "../../../assets/imgs/profile.png"

// Moke Data: User profile.
const profile = ref({
    name: "Samantha",
    email: "samantha@email.com",
    img: profileImg
})

// Moke Data: Unread Notification number.
const totalNotification = ref(5);
</script>


<template>
    <div class="relative w-full mb-12">
        <!-- Pofile section  -->
        <img class="w-24 h-24 object-cover rounded-2xl" :src="profile.img" alt="Profile Image.">

        <!--Show notification only when totalNotification>0  -->
        <div v-if="totalNotification > 0">
            <p
                class="absolute top-0 right-1/2 w-8 h-8 text-sm grid place-content-center rounded-full bg-red-600 text-white">
                {{ totalNotification }}
            </p>
        </div>

        <!-- Info Section -->
        <div class="flex flex-col justify-start align-middle gap-2 mt-2 text-white font-poppins">
            <p class="text-[30px] font-semibold">{{ profile.name }}</p>
            <p class="text-[17px] font-normal text-gray-400">{{ profile.email }}</p>
        </div>
    </div>
</template>
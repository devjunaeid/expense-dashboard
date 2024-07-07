<script setup>
import { ref } from 'vue';
import addIcon from "@/assets/imgs/expense/addIcon.png"
import person1 from "@/assets/imgs/expense/access/person1.png"
import person2 from "@/assets/imgs/expense/access/person2.png"
import person3 from "@/assets/imgs/expense/access/person3.png"

// Todays Date. 
const today = new Date().toDateString();

// Moke Access List
const accessList = ref([
    {
        name: "Blue",
        email: "blue@email.com",
        img: person1
    },
    {
        name: "Red",
        email: "red@email.com",
        img: person2
    },
    {
        name: "Green",
        email: "green@email.com",
        img: person3
    },
])

// Moke monthly expense data.
const monthlyExpenses = ref({
    range: "01-25 July 2024",
    totalExpense: 3547,
    expenseEachDay: [
        {
            date: "Sun July 07 2024",
            amount: 110,
        },
        {
            date: "Sun July 07 2024",
            amount: 230,
        },
        {
            date: "Sun July 07 2024",
            amount: 100,
        },
        {
            date: "Sun July 07 2024",
            amount: 310,
        },
        {
            date: "Sun July 07 2024",
            amount: 190,
        },
        {
            date: "Sun July 07 2024",
            amount: 80,
        },
        {
            date: "Sun July 07 2024",
            amount: 50,
        },
        {
            date: "Sun July 07 2024",
            amount: 110,
        },
        {
            date: "Sun July 07 2024",
            amount: 100,
        },
        {
            date: "Sun July 07 2024",
            amount: 99,
        },
        {
            date: "Sun July 07 2024",
            amount: 61,
        },
        {
            date: "Sun July 07 2024",
            amount: 220,
        },
        {
            date: "Sun July 07 2024",
            amount: 300,
        },
        {
            date: "Sun July 07 2024",
            amount: 60,
        },
        {
            date: "Sun July 07 2024",
            amount: 70,
        },
        {
            date: "Sun July 07 2024",
            amount: 137,
        },
        {
            date: "Sun July 07 2024",
            amount: 150,
        },
        {
            date: "Sun July 07 2024",
            amount: 110,
        },
        {
            date: "Sun July 07 2024",
            amount: 19,
        },
        {
            date: "Sun July 07 2024",
            amount: 50,
        },
        {
            date: "Sun July 07 2024",
            amount: 210,
        },
        {
            date: "Sun July 07 2024",
            amount: 110,
        },
        {
            date: "Sun July 07 2024",
            amount: 180,
        },
        {
            date: today,
            amount: 381,
        },
        {
            date: "Sun July 07 2024",
            amount: 110,
        },
    ]
})

// Char scale.
const scale = ref(500);

</script>

<template>
    <div class="w-full font-poppins">
        <!-- Header Info -->
        <div class="flex justify-between items-center">
            <!-- Title and month range  -->
            <div class="flex flex-col gap-4 justify-start">
                <h1 class="text-[40px] font-semibold">Expenses</h1>
                <p class="-mt-4 text-darkblue/50">{{ monthlyExpenses.range }}</p>
            </div>

            <!-- Access showcase -->
            <div class="flex">
                <div class="flex" v-for="(item, index) in accessList" :key="index">
                    <img :style="`max-width: 30px; height: 30px; margin-left: -${index == 0 ? 0 : 10}px; z-index: ${40 - (index * 10)};`"
                        :src="item.img" alt="Member Image.">
                </div>

                <!-- Add new people -->
                <button><img class="ml-2" :src="addIcon" alt="Plus Icon"></button>
            </div>
        </div>

        <!-- Chart Based on daily spending. -->
        <div class="flex">
            <div class="w-full  grid grid-cols-25 h-[250px]" v-for="(item, index) in monthlyExpenses.expenseEachDay"
                :key="index">
                <div class="flex flex-col justify-end items-end w-[25px] h-[200px] mx-[2px]">

                    <!-- Variable height baes on spend amount. -->
                    <div
                        :style="`width:100%; border-radius:2px; background-color:#157AFF; opacity:${item.date == today ? 1 : 0.2}; height: ${Math.round((item.amount / (scale)) * 100)}%`">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
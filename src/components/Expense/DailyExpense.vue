<script setup>
import { ref } from "vue";
import menuIcon from "@/assets/imgs/expense/menu.png";
import groceryIcon from "@/assets/imgs/expense/expenseCat/grocery.png";
import transportIcon from "@/assets/imgs/expense/expenseCat/transport.png";
import housingIcon from "@/assets/imgs/expense/expenseCat/housing.png";
import foodIcon from "@/assets/imgs/expense/expenseCat/food.png";
import entertainmentIcon from "@/assets/imgs/expense/expenseCat/entertainment.png";

// Todays Date. 
const today = new Date().toDateString();

// Daily Expense Mock Data.
const daliyExpenses = ref([
    {
        date: today,
        expenses: [
            {
                cat: "Grocery",
                amount: 326.8,
                time: "04:29 pm",
                vendor: "Fresh Bazer",
                img: groceryIcon,
            },
            {
                cat: "Transportation",
                amount: 15.0,
                time: "02:29 pm",
                vendor: "Ena Bus service.",
                img: transportIcon,
            },
            {
                cat: "Housing",
                amount: 185.75,
                time: "11:45 am",
                vendor: "XYZ Housing",
                img: housingIcon,
            },
        ],
    },
    {
        date: "Sat, Jul 06 2024",
        expenses: [
            {
                cat: "Food and Drinks",
                amount: 156.0,
                time: "08:29 pm",
                vendor: "Hazir Biriyani.",
                img: foodIcon,
            },
            {
                cat: "Entertainment",
                amount: 35.2,
                time: "09:29 pm",
                vendor: "Cineplex",
                img: entertainmentIcon,
            },
        ],
    },
]);
</script>

<template>
    <!-- For Each Date Response  -->
    <div class="w-full font-poppins" v-for="(item, index) in daliyExpenses" :key="index">
        <div class="flex flex-col my-8">
            <!-- Header  -->
            <h1 class="flex justify-between items-center my-4 text-[18px] font-semibold">
                <span>{{ item.date == today ? "Today" : item.date }}</span><button><img :src="menuIcon"
                        alt="" /></button>
            </h1>
           
            <!-- Divider -->
            <div class="w-full h-[2px] bg-gray-400/25"></div>
           
            <!-- For each expense category -->
            <div class="flex flex-col mt-6" v-for="(expense, index) in item.expenses" :key="index">
                <div class="flex">
                    <!-- Category Icon  -->
                    <img class="w-12 h-12 mr-4" :src="expense.img" :alt="expense.cat" />
                    <!-- Description -->
                    <div class="w-full flex justify-between">
                        <div class="flex flex-col justify-start items-start">
                            <h3 class="text-[16px] font-medium flex justify-between">
                                {{ expense.cat }}
                            </h3>
                            <p class="text-[14px] font-normal text-darkblue/50">
                                {{ expense.time }} • {{ expense.vendor }}
                            </p>
                        </div>
                        <p class="text-[16px] font-medium flex justify-between">
                            -{{ expense.amount.toFixed(3) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

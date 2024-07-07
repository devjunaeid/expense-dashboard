<script setup>
import {ref} from "vue";

// Moke data. Category wise spending.
const monthlyTotalSpending = ref({
    id: 1,
    month: "April",
    year: "2020",
    totalSpending: 3650,
    spendings:[
        {
            cat: "Food and Drinks",
            amount: 872.4,
        },
        {
            cat: "Food and Drinks",
            amount: 872.400,
        },
       {
            cat: "Shopping",
            amount: 1378.200,
        },
        {
            cat: "Housing",
            amount: 928.500,
        },
        {
            cat: "Transportation",
            amount: 420.700, 
        },
        {
            cat: "Vehicle",
            amount: 520.000,
        } 
        
    ] 
})
</script>

<template>
    <div class="relative w-[80%] m-auto font-poppins font-medium">
        <h2 class="text-[20px] text-darkblue mb-6">Where your money go?</h2>
       
        <!-- Iterate over all category -->
        <div class="flex flex-col gap-4" v-for="(value, index) in monthlyTotalSpending.spendings" :key="index">
            <div class="my-[16px]">
                <h2 class="flex justify-between text-[13px] text-semiblue capitalize"><span>{{ value.cat }}</span> <span>{{ value.amount.toFixed(3) }}</span></h2>
                <div class="relative w-full h-2 mt-1 rounded-md bg-lightblue">

                    <!-- Custom width based on spand amount -->
                   <div :style="`positioin:absolute; top:0; left:0; height:8px; border-radius:6px; background-color: #31BA96; width: ${Math.round((value.amount/ monthlyTotalSpending.totalSpending)* 100)}%`"></div> 
                </div>
            </div>
        </div>
    </div>
</template>
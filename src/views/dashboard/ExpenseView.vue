<script setup>
import Tips from "@/components/Expense/Tips.vue"
import MonthlyOverallSpanding from "@/components/Expense/MontlyOverallSpanding.vue"
import DailyExpense from "@/components/Expense/DailyExpense.vue"
import ExpenseOverview from "@/components/Expense/ExpenseOverview.vue" 
</script>

<template>
  <div class="w-full h-full flex rounded-2xl">

    <!-- Left Section -->
    <div class="w-2/3 h-full grid grid-flow-row grid-cols-1 grid-rows-12 px-36 py-12">
      <div class="flex row-span-3">
        <ExpenseOverview />
      </div>
      <div class="row-span-9">
        <DailyExpense />
      </div>
    </div>

    <!-- Right Section -->
    <div class="w-1/3 h-full grid grid-flow-row grid-cols-1 grid-rows-2 p-12 rounded-2xl bg-dim1White">
      <div>
        <MonthlyOverallSpanding />
      </div>
      <div class="h-full flex flex-col justify-end items-center">
        <Tips />
      </div>
    </div>
  </div>
</template>

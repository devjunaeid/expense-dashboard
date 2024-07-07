import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RootView from "@/views/dashboard/RootView.vue"
import SummaryView from "@/views/dashboard/SummaryView.vue";
import AccountView from "@/views/dashboard/AccountView.vue";
import WalletView from "@/views/dashboard/WalletView.vue";
import SettingView from "@/views/dashboard/SettingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/dashboard/DashboardView.vue"),
      children: [
        {
          path: "",
          component: RootView,
        },
        {
          path: "expense",
          component: () => import("../views/dashboard/ExpenseView.vue"),
        },
        {
          path: "settings",
          component: SettingView,
        },
        {
          path: "summary",
          component: SummaryView,
        },
        {
          path: "wallets",
          component: WalletView,
        },
        {
          path: "accounts",
          component: AccountView,
        },
      ],
    },
  ],
});

export default router;

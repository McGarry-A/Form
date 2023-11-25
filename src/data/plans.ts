import { ref } from "vue";
import { PlanInterface } from "../types/plan.interface";

export const plans = ref<PlanInterface[]>([
  {
    label: "Arcade",
    isActive: true,
    monthlyPrice: 10,
    yearlyPrice: 90,
    freeMonths: 2,
    icon: "Profile",
    iconBg: "#FFAF7E",
    id: "Arcade"
  },
  {
    label: "Advanced",
    isActive: false,
    monthlyPrice: 16,
    yearlyPrice: 140,
    freeMonths: 2,
    icon: "Remote",
    iconBg: "#F9818E",
    id: "Advanced"
  },
  {
    label: "Pro",
    isActive: false,
    monthlyPrice: 25,
    yearlyPrice: 190,
    freeMonths: 2,
    icon: "Controller",
    iconBg: "#483EFF",
    id: "Pro"
  },
]);

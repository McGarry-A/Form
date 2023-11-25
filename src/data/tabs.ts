import { TabInterface } from "../types/tabs.interface";
import { ref } from "vue"

export const tabs = ref<TabInterface[]>([
    {
      title: "Your Info",
      stepNumber: 1,
      isActive: true,
      id: 1,
    },
    {
      title: "Select Plan",
      stepNumber: 2,
      isActive: false,
      id: 2,
    },
    {
      title: "Add-Ons",
      stepNumber: 3,
      isActive: false,
      id: 3,
    },
    {
      title: "Summary",
      stepNumber: 4,
      isActive: false,
      id: 4,
    },
  ]);
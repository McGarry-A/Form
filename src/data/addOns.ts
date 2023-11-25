import { AddOnsInterface } from "../types/addOns.interface";
import { ref } from 'vue'

export const addOns = ref<AddOnsInterface[]>([
  {
    title: "Online Service",
    description: "Access to multiplayer games",
    price: 1,
    isActive: false,
    id: "online-service"
  },
  {
    title: "Larger Storage",
    description: "Extra 1TB of cloud save",
    price: 2,
    isActive: false,
    id: "storage"
  },
  {
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    price: 2,
    isActive: false,
    id: "theme"
  },
]);

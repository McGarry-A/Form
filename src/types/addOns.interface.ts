export interface AddOnsInterface {
  title: string;
  description: string;
  price: number;
  isActive: boolean;
  id: "online-service" | "theme" | "storage";
}

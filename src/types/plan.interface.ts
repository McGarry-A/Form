export interface PlanInterface {
    label: string,
    monthlyPrice: number,
    yearlyPrice: number,
    isActive: boolean,
    freeMonths: number,
    icon: "Controller" | "Remote" | "Profile"
    iconBg: string,
    id: "Arcade" | "Advanced" | "Pro"
}
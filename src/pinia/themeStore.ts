import { defineStore } from "pinia";

export const useThemeStore = defineStore("main", {
    state: () => ({darkTheme: true}),
    actions: {
        setTheme(dark: boolean): void {
            this.darkTheme = dark;
        }
    }
})
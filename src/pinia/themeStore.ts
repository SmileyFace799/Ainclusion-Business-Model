import { defineStore } from "pinia";

export const useThemeStore = defineStore("main", {
    state: () => ({darkTheme: false}),
    actions: {
        setTheme(dark: boolean): void {
            this.darkTheme = dark;
        }
    }
})
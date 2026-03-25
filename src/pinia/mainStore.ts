import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
    state() {
        return {
            darkTheme: false,
            animations: true
        }
    },
    actions: {
        setTheme(dark: boolean): void {
            this.darkTheme = dark;
        },
        setAnimations(animations: boolean): void {
            this.animations = animations;
        }
    }
})
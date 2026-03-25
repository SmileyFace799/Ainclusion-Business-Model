import Cookies from "js-cookie";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
    state: () => ({darkTheme: false}),
    actions: {
        setTheme(dark: boolean, setCookie: boolean = true): void {
            this.darkTheme = dark;
            if (setCookie) {
                Cookies.set("darkTheme", dark ? "true" : "false", {expires: 7})
            }
        }
    }
})
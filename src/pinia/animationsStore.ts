import Cookies from "js-cookie";
import { defineStore } from "pinia";

export const useAnimationsStore = defineStore("animations", {
    state: () => ({animations: true}),
    actions: {
        setAnimations(animations: boolean, setCookie: boolean = true): void {
            this.animations = animations;
            if (setCookie) {
                Cookies.set("animations", animations ? "true" : "false", {expires: 7});
            }
        },
        toggleAnimations(): void {
            this.setAnimations(!this.animations);
        }
    }
})
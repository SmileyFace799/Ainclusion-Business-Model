import { defineStore } from "pinia";

export const useAnimationsStore = defineStore("main", {
    state: () => ({animations: true}),
    actions: {
        setAnimations(animations: boolean): void {
            this.animations = animations;
        }
    }
})
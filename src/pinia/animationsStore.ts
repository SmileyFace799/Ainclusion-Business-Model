import { defineStore } from "pinia";

export const useAnimationsStore = defineStore("animations", {
    state: () => ({animations: true}),
    actions: {
        setAnimations(animations: boolean): void {
            this.animations = animations;
        },
        toggleAnimations(): void {
            this.setAnimations(!this.animations);
        }
    }
})
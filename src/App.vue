<template>
	<Button class="theme-button" @click="toggleTheme()" rounded size="large" variant="outlined" severity="contrast">
		<template #icon>
			<span class="material-icons">{{themeIsDark ? 'dark_mode' : 'light_mode' }}</span>
		</template>
	</Button>
	<main>
		<router-view/>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: "App",
	data() {
		return {
			darkClass: "dark",
			themeIsDark: false
		}
	},
	methods: {
		updateDarkTracking(): void {
			this.themeIsDark = document.documentElement.classList.contains(this.darkClass)
		},
		setTheme(dark: boolean): void {
			if (dark && !this.themeIsDark) {
				document.documentElement.classList.add(this.darkClass);
			} else if (!dark && this.themeIsDark) {
				document.documentElement.classList.remove(this.darkClass);
			}
			this.updateDarkTracking();
		},
		toggleTheme(): void {
			this.setTheme(!this.themeIsDark);
		}
	},
	mounted() {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			this.setTheme(true);
		}
	}
});
</script>

<style scoped>
.theme-button {
	position: absolute;
	left: 0;
	top: 0;
	margin: 1em;
}
</style>
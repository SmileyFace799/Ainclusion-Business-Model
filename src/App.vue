<template>
	<Button class="theme-button" @click="showMenu" rounded size="large" variant="outlined" severity="secondary">
		<template #icon>
			<span class="material-icons">settings</span>
		</template>
	</Button>
	<Popover ref="menu">
		<div style="display: flex; flex-direction: column; gap: 0.5em;">
			<div class="menu-entry">
				Dark theme
				<ToggleSwitch :model-value="themeStore.darkTheme" @update:model-value="toggleTheme"/>
			</div>
			<div class="menu-entry">
				<span>Animations</span>
				<ToggleSwitch :model-value="animationsStore.animations" @update:model-value="animationsStore.setAnimations" />
			</div>
		</div>
	</Popover>
	<main>
		<router-view/>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAnimationsStore } from './pinia/animationsStore';
import { useThemeStore } from './pinia/themeStore';
import type { Popover } from 'primevue';

export default defineComponent({
	name: "App",
	data() {
		return {
			darkClass: "dark"
		}
	},
	computed: {
		themeStore: () => useThemeStore(),
		animationsStore: () => useAnimationsStore()
	},
	methods: {
		updateDarkTracking(): void {
			this.themeStore.setTheme(document.documentElement.classList.contains(this.darkClass));
		},
		setTheme(dark: boolean): void {
			if (dark && !this.themeStore.darkTheme) {
				document.documentElement.classList.add(this.darkClass);
			} else if (!dark && this.themeStore.darkTheme) {
				document.documentElement.classList.remove(this.darkClass);
			}
			this.updateDarkTracking();
		},
		toggleTheme(): void {
			this.setTheme(!this.themeStore.darkTheme);
		},
		showMenu(event: MouseEvent): void {
			(this.$refs.menu as InstanceType<typeof Popover>).toggle(event)
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

.menu-entry {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.5em;
}
</style>
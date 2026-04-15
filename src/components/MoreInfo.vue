<template>
	<div style="height: 100%; display: flex; flex-direction: column; justify-content: start; align-items: start; max-width: min(60em, calc(100vw - 9em));">
		<div class="nav-container">
			<Button @click="navigateBack" variant="outlined" severity="secondary" size="large" rounded>
				<template #icon>
					<span class="material-icons">arrow_back</span>
				</template>
			</Button>
			<img id="logo" src="/ainclusion.webp" alt="AINCLUSION logo" @click="navigateBack">
			<span style="margin: 0 0 5px 0; font-size: 1.8em; font-weight: 400;">Growth Model</span>
		</div>
		<Panel :class="style.color" style="text-align: start;" :pt="{header: {style: 'font-size: 3em;'}}" :header="content.title"><ContentComponent :bodies="content.bodies"></ContentComponent></Panel>
	</div>
	<Transition v-if="animationsStore.animations">
		<div class="fade-overlay" v-if="showOverlay"></div>
	</Transition>
</template>

<script lang="ts">

import ContentComponent from './ContentComponent.vue';
import { defineComponent } from 'vue';
import { allContent, defaultContent, type ContentType } from './infoContent';
import { allStyles, defaultStyle, type StyleType } from './infoStyle';
import { useAnimationsStore } from '../pinia/animationsStore';

export default defineComponent({
	name: "MoreInfo",
	components: {
		ContentComponent
	},
	props: {
		slug: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			showOverlay: true
		}
	},
	computed: {
		content(): ContentType {
			return allContent[this.slug] ?? defaultContent;
		},
		style(): StyleType {
			return allStyles[this.slug] ?? defaultStyle;
		},
		animationsStore: () => useAnimationsStore()
	},
	methods: {
		navigateBack() {
			this.showOverlay = true;
			const route = () => this.$router.push("/");
			if (this.animationsStore.animations) {
				setTimeout(() => route(), 200);
			} else {
				route()
			}
		}
	},
	mounted() {
		this.showOverlay = false;
	},
})
</script>

<style scoped>
.nav-container {
	align-items: center;
	display: flex;
	margin-bottom: 1em;
}

#logo {
	max-width: 12em;
	margin-left: 1em;
	padding-right: 0.7em;
}
#logo:hover {
	cursor: pointer;
}

.blue {
	border-color: blue;
}

.red {
	border-color: red;
}

.bluered {
	position: relative;
}
.bluered::before {
	content: "";
	position: absolute;
	inset: 0;
	border-radius: inherit;
	padding: 1px; /* Hardcoded code smell right here (get border width dynamically if possible) */
	background: linear-gradient(to right, blue 50%, red 50%);

	mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
	-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
	mask-composite: exclude;
	-webkit-mask-composite: destination-out;
	pointer-events: none;
}

.fade-overlay {
	position: fixed;
	inset: 0;
	background: var(--p-content-background);
	z-index: 100;
}

.v-enter-active {
	transition: opacity 0.2s cubic-bezier(0.5, 0, 0.5, 1);
}

.v-leave-active {
	transition: opacity 0.4s cubic-bezier(0.5, 0, 0.5, 1);
}

.v-enter-from, .v-leave-to {
	opacity: 0;
}
</style>

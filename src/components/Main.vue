<template>
	<img src="../assets/ainclusion.webp" style="max-width: 50vw;">
	<div style="display: flex; align-items: flex-end; margin: 0 1em;">
		<Message variant="outlined" style="outline-color: blue; color: blue; cursor: default;">Operations<span style="font-size: 1.4em;" class="material-icons">arrow_forward</span></Message>
		<h1 style="flex-grow: 1;">Growth Model</h1>
		<Message variant="outlined" style="outline-color: red; color: red; cursor: default;"><span style="font-size: 1.4em;" class="material-icons">arrow_back</span>Engagement</Message>
	</div>
	<div class="grid">
		<Panel v-for="data, slug in elementStyles"
			:class="['box', data.color]"
			:pt="headerStyle"
			@click="() => redirect(slug)" :style="data.css"
			:header="allContent[slug]?.title ?? defaultContent.title"
		>
			<ContentComponent :bodies="[allContent[slug]?.shortBody ?? defaultContent.shortBody]"></ContentComponent>
		</Panel>
	</div>
	<Transition v-if="animationsStore.animations">
		<div class="fade-overlay" v-if="showOverlay"></div>
	</Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { allContent, defaultContent } from './infoContent';
import ContentComponent from './ContentComponent.vue';
import { allStyles } from './infoStyle';
import { useAnimationsStore } from '../pinia/animationsStore';

export default defineComponent({
	name: "Main",
	components: {
		ContentComponent
	},
	data() {
		return {
			count: 0,
			headerStyle: {header: {style: {fontSize: '1.5em'}}},
			elementStyles: allStyles,
			allContent: allContent,
			defaultContent: defaultContent,
			showOverlay: true
		}
	},
	computed: {
		animationsStore: () => useAnimationsStore()
	},
	methods: {
		redirect(destination: string) {
			this.showOverlay = true;
			const route = () => this.$router.push("/" + destination);
			if (this.animationsStore.animations) {
				setTimeout(() => route(), 200);
			} else {
				route()
			}
		}
	},
	mounted() {
		this.showOverlay = false;
	}
})
</script>

<style scoped>

.grid {
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 1em;
	margin: 1em;
}

.box {
	text-align: left;
	padding: 1em;
	border-radius: 1em;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
}
.box:hover {
	cursor: pointer;
}

.blue {
	border-color: blue;
}
.blue:hover {
	filter: drop-shadow(0 0 1em blue);
}

.red {
	border-color: red;
}

.red:hover {
	filter: drop-shadow(0 0 1em red);
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
.bluered:hover {
	box-shadow:
    -4em -4em 1.5em -4em blue,
    -4em 4em 1.5em -4em blue,
    4em -4em 1.5em -4em red,
    4em 4em 1.5em -4em red;
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

:global(.p-message-text) {
	align-items: flex-end;
	display: flex;
	gap: 0.2em;
}

</style>

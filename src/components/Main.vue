<script lang="ts">
import { defineComponent } from 'vue';
import { allContent, defaultContent } from './infoContent';

export default defineComponent({
	name: "Main",
	data() {
		return {
			"count": 0,
			centeredHeader: {header: {style: 'text-align: center; justify-content: center'}},
			planElements: {
				keyPartners: ['1 / 3', '1 / 3'],
				keyActivities: ['1', '3 / 5'],
				keyResources: ['2', '3 / 5'],
				socialValueProposition: ['1 / 3', '5 / 7'],
				relations: ['1', '7 / 9'],
				channels: ['2', '7 / 9'],
				stakeholders: ['1 / 3', '9 / 11'],
				costStructure: ['3', '1 / 6'],
				revenueStreams: ['3', '6 / 11']
			},
			allContent: allContent,
			defaultContent: defaultContent
		}
	},
	methods: {
		redirect(destination: string) {
			this.$router.push("/" + destination);
		}
	},
	props: ['msg', 'count']
})
</script>

<template>
	<div class="grid">
		<Panel v-for="position, slug in planElements"
			class="box"
			:pt="centeredHeader"
			@click="() => redirect(slug)" :style="{gridRow: position[0], gridColumn: position[1]}"
			:header="allContent[slug]?.title ?? defaultContent.title"
		>
			{{ allContent[slug]?.shortBody ?? defaultContent.shortBody }}
		</Panel>
	</div>
</template>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 1em;
	padding: 1em;
}

.box {
	text-align: center;
	padding: 1em;
	border-radius: 1em;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
}

.box:hover {
  filter: drop-shadow(0 0 1em gray);
  cursor: pointer;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { allContent, defaultContent, type ContentType } from './infoContent';

export default defineComponent({
	name: "KeyPartners",
	props: {
		slug: {
			type: String,
			required: true
		}
	},
	computed: {
		content(): ContentType {
			return allContent[this.slug] ?? defaultContent
		}
	}
})
</script>

<template>
	<Panel :header="content.title">{{ content.body }}</Panel>
</template>

<style scoped>
</style>

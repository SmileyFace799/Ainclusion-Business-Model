<template>
    <template v-for="body, i in bodies">
        <img v-if="'path' in body" :src="'/' + body.path" :alt="body.alt" :style="{maxWidth: '100%', maxHeight: '100%', ...body.style}"></img>
        <component v-else :is="body.tag" :style="{marginTop: i === 0 ? 0 : undefined, marginBottom: i === bodies.length - 1 ? 0 : undefined, ...body.style}">
            <template v-if="typeof body.content === 'string'">
                {{ body.content }}
            </template>
            <ContentComponent v-else-if="body.content !== undefined" :bodies="body.content"></ContentComponent>
        </component>
    </template>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { BodyType, ImageType } from './infoContent';

export default defineComponent({
    name: "ContentComponent",
    props: {
        bodies: {
            type: Array as PropType<(BodyType | ImageType)[]>,
            required: true
        }
    }
})
</script>
<style scoped>
ol, ul {
	margin: 0;
	padding: 0 0 0 1em;
}

h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0;
}

.p-divider {
    font-size: 1.5em;
}
</style>
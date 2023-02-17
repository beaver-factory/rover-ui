<template>
    <div class="base_outer" :style="{ height, width , backgroundColor, padding }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

interface BaseUnitProps {
    heightUnits: number;
    widthUnits: number;
    paddingUnits: number;

    // TODO: restrict bg color to only be colors from r2 branding
    backgroundColor: string;
}

const props = withDefaults( defineProps<BaseUnitProps>(), {
    heightUnits: 1,
    widthUnits: 1,
    paddingUnits: 1,
    backgroundColor: "#004F72",
});

const height = `calc(${props.heightUnits} * var(--unit))`;
const width = `calc(${props.widthUnits} * var(--unit))`;
const padding = `calc(${props.paddingUnits} * var(--padding))`

</script>

<style>

.base_outer {
    border: solid white 1px;
}

</style>
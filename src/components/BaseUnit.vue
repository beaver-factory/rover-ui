<template>
    <div :style="{
            height,
            width ,
            backgroundColor,
            padding,
            border,
            borderTopWidth,
            borderBottomWidth,
            borderLeftWidth,
            borderRightWidth,
        }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

// TODO: agree on consistent component documentation method

interface BaseUnitProps {
    height?: number | string; // number = multiple of base unit, string = override
    width?: number | string; // number = multiple of base unit, string = override
    paddingUnits?: number;
    borderTop?: boolean;
    borderBottom?: boolean;
    borderLeft?: boolean;
    borderRight?: boolean;
    // TODO: restrict bg color to enum - only colors from r2 branding
    backgroundColor?: string;
}

const props = withDefaults(defineProps<BaseUnitProps>(), {
    height: 1,
    width: 1,
    paddingUnits: 1,
    backgroundColor: "#004F72",
    borderTop: false,
    borderBottom: false,
    borderLeft: false,
    borderRight: false,
});

const height = typeof props.height === "number"
    ? `calc(${props.height} * var(--unit))`
    : props.height

const width = typeof props.width === "number"
    ? `calc(${props.width} * var(--unit))`
    : props.width

const padding = `calc(${props.paddingUnits} * var(--padding))`;

const border = "solid white 1px";

const borderTopWidth = props.borderTop ? "1px" : "0px";
const borderBottomWidth = props.borderBottom ? "1px" : "0px";
const borderLeftWidth = props.borderLeft ? "1px" : "0px";
const borderRightWidth = props.borderRight ? "1px" : "0px";

const { backgroundColor } = props;

</script>
<template>
    <div :class="['py-3 px-6 lg:px-10 lg:py-4', customClass]">
        <div class="container m-auto">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContainerComponent",
    props: {
        customClass: {
            type: String,
            default: "",
        },
    },
};
</script>

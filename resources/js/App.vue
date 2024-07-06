<template>
    <div id="app" class="bg-gray-light w-full min-h-screen">
        <NavbarComponent />
        <router-view></router-view>
    </div>
</template>

<script>
import NavbarComponent from "./components/Navbar/NavbarComponent.vue";
export default {
    name: "App",
    components: {
        NavbarComponent,
    },
};
</script>

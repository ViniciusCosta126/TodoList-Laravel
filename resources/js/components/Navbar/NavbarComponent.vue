<template>
    <ContainerComponent customClass="bg-blue">
        <div class="flex justify-between">
            <h1 class="text-xl lg:text-2xl font-bold text-white">
                Todo - List
            </h1>
            <div class="cursor-pointer" @click="toogleOpen">
                <span
                    class="w-5 lg:w-7 block mb-1 h-0.5 lg:h-1 rounded bg-white"
                ></span>
                <span
                    class="w-5 lg:w-7 block mb-1 h-0.5 lg:h-1 rounded bg-white"
                ></span>
                <span
                    class="w-5 lg:w-7 block mb-1 h-0.5 lg:h-1 rounded bg-white"
                ></span>
            </div>
            <nav
                :class="[
                    'top-0 absolute p-4  w-full lg:w-4/12 bg-gray-dark h-full transition transition-all',
                    open ? 'right-0 ' : '-right-full',
                ]"
            >
                <div
                    class="absolute right-4 lg:right-20 cursor-pointer"
                    @click="toogleOpen"
                >
                    <i class="fas text-2xl text-red fa-times"></i>
                </div>
                <div class="flex items-center gap-3">
                    <i
                        class="fas ml-1 lg:text-2xl text-white block fa-user"
                    ></i>
                    <p class="text-2xl font-bold text-white lg:text-4xl">
                        Bem vindo
                        {{ "usuario" }}
                    </p>
                </div>
                <div class="flex flex-col mt-4">
                    <router-link
                        class="mb-1 text-white text-2xl uppercase font-semibold"
                        to="/"
                    >
                        Home
                    </router-link>
                    <router-link
                        class="mb-1 text-white uppercase text-2xl font-semibold"
                        to="/about"
                    >
                        about
                    </router-link>
                </div>
            </nav>
        </div>
    </ContainerComponent>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);

const toogleOpen = () => {
    open.value = !open.value;
};
</script>

<script>
import ContainerComponent from "../Container/ContainerComponent.vue";

export default {
    components: ContainerComponent,
};
</script>

<template>
    <div
        :class="[
            open
                ? 'absolute transition  duration-400 transition-all top-0 w-full h-full bg-dark-light  right-0 flex justify-center items-center'
                : 'absolute h-full w-full top-0 -right-full duration-500  transition transition-all ',
        ]"
    >
        <div
            class="bg-gray shadow transition transition-all relative w-10/12 md:w-7/12 lg:3/12 mx-auto h-fit rounded px-2 py-6 lg:py-16"
        >
            <div
                @click="openModal"
                class="absolute right-3 top-1 lg:right-8 cursor-pointer"
            >
                <i class="fas text-2xl text-red fa-times"></i>
            </div>
            <h2 class="text-2xl font-bold mb-2">{{ task.titulo }}</h2>
            <div class="mb-2">
                <p class="text-xl font-bold">Descrição:</p>
                <p>{{ task.descricao }}</p>
            </div>

            <p>
                <span class="font-bold">Data de entrega:</span>
                {{ task.data_entrega }}
            </p>
        </div>
    </div>
</template>

<script>
import { convertData } from "../../Helpers/dataConvert.js";

export default {
    name: "TaskModalComponent",
    props: {
        open: {
            type: Boolean,
            default: false,
        },
        task: {
            type: Object,
            required: true,
        },
        openModal: {
            type: Function,
            required: true,
        },
    },
};
</script>

<template>
    <div
        :class="[
            'flex justify-between md:justify-normal mx-auto max-w-2xl mb-3 md:w-6/12 lg:w-4/6 text-sm md:text-md lg:text-xl gap-2 md:gap-10 lg:gap-20 shadow py-2 px-1 md:px-2 lg:px-4 rounded items-center',
            task.data.toLocaleDateString() < new Date().toLocaleDateString() &&
            task.status === false
                ? 'bg-red-light'
                : '',
            task.data.toLocaleDateString() ===
                new Date().toLocaleDateString() && task.status === false
                ? 'bg-yellow-light'
                : '',
            task.status ? 'bg-green-light decoration-dashed' : '',
        ]"
    >
        <div class="w-1/4 flex gap-1 md:gap-2">
            <input type="checkbox" name="" :checked="task.status" id="" />
            <p @click="toggleOpen" class="font-semibold cursor-pointer">
                <s v-if="task.status">{{ task.titulo }}</s>
                <span v-else>{{ task.titulo }}</span>
            </p>
        </div>

        <p class="w-1/4">
            <s v-if="task.status">{{ task.data.toLocaleDateString() }}</s>
            <span v-else>{{ task.data.toLocaleDateString() }}</span>
        </p>
        <div class="Ações min-w-fit">
            <i class="fas mr-1 md:mr-3 text-red fa-trash"></i>
            <i class="fas text-yellow fa-edit"></i>
        </div>
        <TaskModalComponent
            :open="open"
            :task="task"
            :toggle-open="toggleOpen"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import TaskModalComponent from "../TaskModal/TaskModalComponent.vue";
const open = ref(false);

const toggleOpen = () => {
    open.value = !open.value;
};
</script>

<script>
export default {
    name: "TaskComponent",
    props: {
        task: {
            type: Object,
            required: true,
        },
    },
    components: {
        TaskModalComponent,
    },
};
</script>

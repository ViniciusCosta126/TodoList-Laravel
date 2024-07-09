<template>
    <div
        :class="[
            'flex justify-between mx-auto max-w-2xl mb-3 md:w-6/12 lg:w-11/12 text-sm md:text-md lg:text-xl gap-2 md:gap-10 lg:gap-10 shadow py-2 px-1 md:px-2 lg:px-4 rounded items-center',
            task.data_entrega < new Date().toLocaleDateString() &&
            task.status === 'em andamento'
                ? 'bg-red-light'
                : '',
            task.data_entrega === new Date().toLocaleDateString() &&
            task.status === 'em andamento'
                ? 'bg-yellow-light'
                : '',
            task.status === 'finalizado'
                ? 'bg-green-light decoration-dashed'
                : '',
        ]"
    >
        <div class="w-1/4">
            <p @click="toggleOpen" class="font-semibold cursor-pointer">
                <s v-if="task.status === 'finalizado'">{{ task.titulo }}</s>
                <span v-else>{{ task.titulo }}</span>
            </p>
        </div>

        <p class="w-1/4 hidden lg:block">
            <s v-if="task.status === 'finalizado'">{{ task.data_entrega }}</s>
            <span v-else>{{ task.data_entrega }}</span>
        </p>
        <select
            class="min-w-1/4"
            name="status"
            id="status"
            v-model="task.status"
            @change="handleUpdateTask"
        >
            <option value="backlog">BackLog</option>
            <option value="em andamento">Em andamento</option>
            <option value="finalizado">Finalizado</option>
        </select>
        <div class="Ações min-w-fit">
            <i
                class="fas mr-1 md:mr-3 text-red fa-trash cursor-pointer"
                @click="handleDeleteTask"
            ></i>
            <i class="fas text-yellow fa-edit" @click="formModalOpen"></i>
        </div>
        <TaskModalComponent :open="open" :task="task" :openModal="toggleOpen" />
        <FormModalTaskComponent
            :openForm="openForm"
            :task="task"
            :openModalForm="formModalOpen"
            @taskUpdated="$emit('taskUpdated', $event)"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import TaskModalComponent from "../TaskModal/TaskModalComponent.vue";
import { deleteTask, updateTaskStatus } from "../../Services/task";
import FormModalTaskComponent from "../FormModalTask/FormModalTaskComponent.vue";

const props = defineProps({
    task: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(["taskDeleted", "taskUpdated"]);
const open = ref(false);
const openForm = ref(false);

const toggleOpen = () => {
    open.value = !open.value;
};

const formModalOpen = () => {
    openForm.value = !openForm.value;
};

const handleDeleteTask = () => {
    deleteTask(props.task.id);
    emit("taskDeleted", props.task.id);
};

const handleUpdateTask = (event) => {
    updateTaskStatus(event.target.value, props.task.id);
};
</script>

<script>
export default {
    name: "TaskComponent",
    components: {
        TaskModalComponent,
        FormModalTaskComponent,
    },
};
</script>

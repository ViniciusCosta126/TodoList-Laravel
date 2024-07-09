<template>
    <div
        :class="[
            openForm
                ? 'absolute bg-dark-light top-0 right-0 h-full w-full flex justify-center items-center p-4 transition duration-400 transition-all'
                : 'absolute h-full w-full top-0 -right-full duration-200 transition transition-all',
        ]"
    >
        <div
            class="bg-gray-light shadow w-full md:w-3/4 lg:w-2/4 h-2/4 lg:h-3/5 rounded relative"
        >
            <div
                class="absolute right-4 lg:right-5 lg:top-2 cursor-pointer"
                @click="openModalForm"
            >
                <i class="fas text-2xl text-red fa-times"></i>
            </div>
            <form @submit.prevent="handleSubmit" class="p-6">
                <div class="flex flex-col mb-2">
                    <label class="text-lg font-bold" for="">Titulo Task</label>
                    <input
                        class="shadow px-2 py-1 rounded"
                        type="text"
                        v-model="form.titulo"
                    />
                </div>
                <div class="flex flex-col mb-2">
                    <label class="text-lg font-bold" for=""
                        >Data de entrega</label
                    >
                    <input
                        class="shadow px-2 py-1 rounded"
                        type="date"
                        v-model="form.data_entrega"
                    />
                </div>
                <div class="flex flex-col mb-2">
                    <label class="text-lg font-bold" for="">Descricao</label>
                    <textarea
                        class="shadow px-2 py-1 rounded"
                        v-model="form.descricao"
                        rows="5"
                    />
                </div>
                <div class="flex flex-col mb-2">
                    <label class="text-lg font-bold" for=""
                        >Status da task</label
                    >
                    <select
                        class="shadow px-2 py-1 rounded"
                        name="status"
                        id="status"
                        v-model="form.status"
                    >
                        <option value="backlog">BackLog</option>
                        <option value="em andamento">Em andamento</option>
                        <option value="finalizado">Finalizado</option>
                    </select>
                </div>
                <button
                    class="bg-green text-white font-bold w-full lg:mt-2 py-1 rounded"
                    type="submit"
                >
                    Salvar
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import axios from "axios";

const props = defineProps({
    openForm: {
        type: Boolean,
        required: true,
    },
    task: {
        type: Object,
        required: true,
    },
    openModalForm: {
        type: Function,
        required: true,
    },
});

const emit = defineEmits(["taskUpdated"]);

const form = ref({
    titulo: "",
    data_entrega: "",
    descricao: "",
    status: "",
});

watch(
    () => props.task,
    (newTask) => {
        form.value = { ...newTask };
    },
    { immediate: true }
);

const handleSubmit = async () => {
    try {
        const response = await axios.put(
            `/api/tasks/${form.value.id}`,
            form.value
        );
        console.log("Task updated successfully");
        emit("taskUpdated", response.data);
        props.openModalForm(); // Fechar o modal após o envio
    } catch (error) {
        console.error("Failed to update task:", error);
    }
};
</script>

<script>
export default {
    name: "FormModalTaskComponent",
};
</script>

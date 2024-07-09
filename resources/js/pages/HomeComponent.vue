<template>
    <div>
        <ContainerComponent>
            <TaskComponent
                v-for="task in tasks"
                :key="task.id"
                :task="task"
                @taskDeleted="removeTask"
                @taskUpdated="updateTaskInList"
            />
        </ContainerComponent>
    </div>
</template>

<script>
import axios from "axios";
import ContainerComponent from "../components/Container/ContainerComponent.vue";
import TaskComponent from "../components/Task/TaskComponent.vue";
import { convertData } from "../Helpers/dataConvert";
export default {
    name: "HomeComponent",
    data() {
        return {
            tasks: [],
        };
    },
    mounted() {
        axios.get("/api/tasks").then((response) => {
            response.data.forEach((element) => {
                element.data_entrega = convertData(element.data_entrega);
            });
            this.tasks = response.data;
        });
    },
    methods: {
        removeTask(deletedTaskId) {
            this.tasks = this.tasks.filter((task) => task.id !== deletedTaskId);
        },
        updateTaskInList(updatedTask) {
            const index = this.tasks.findIndex(
                (task) => task.id === updatedTask.id
            );
            if (index !== -1) {
                this.tasks.splice(index, 1, updatedTask);
            }
        },
    },
    components: {
        ContainerComponent,
        TaskComponent,
    },
};
</script>

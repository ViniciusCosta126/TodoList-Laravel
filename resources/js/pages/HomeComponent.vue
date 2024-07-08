<template>
    <div>
        <ContainerComponent>
            <TaskComponent v-for="task in tasks" :key="task.id" :task="task" />
        </ContainerComponent>
    </div>
</template>

<script>
import ContainerComponent from "../components/Container/ContainerComponent.vue";
import TaskComponent from "../components/Task/TaskComponent.vue";
export default {
    name: "HomeComponent",
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    titulo: "teste1",
                    descricao:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nobis maiores provident amet? Quis, blanditiis pariatur.",
                    data: new Date("07-07-2024"),
                    status: false,
                },
                {
                    id: 2,
                    titulo: "teste2",
                    descricao:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nobis maiores provident amet? Quis, blanditiis pariatur.",
                    data: new Date("07-06-2024"),
                    status: true,
                },
                {
                    id: 3,
                    titulo: "teste3",
                    descricao:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nobis maiores provident amet? Quis, blanditiis pariatur.",
                    data: new Date("07-17-2024"),
                    status: false,
                },
            ],
        };
    },
    components: {
        ContainerComponent,
        TaskComponent,
    },
};
</script>

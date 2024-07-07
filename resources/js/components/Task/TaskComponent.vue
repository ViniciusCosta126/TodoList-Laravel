<template>
    <div
        :class="[
            'flex justify-between md:justify-normal mx-auto max-w-2xl mb-3 md:w-6/12 lg:w-4/6 text-sm md:text-md lg:text-xl gap-2 md:gap-10 lg:gap-20 shadow py-2 px-1 md:px-2 lg:px-4 rounded items-center',
            task.data.toLocaleDateString() < new Date().toLocaleDateString()
                ? 'bg-red-light'
                : '',
            task.data.toLocaleDateString() === new Date().toLocaleDateString()
                ? 'bg-yellow-light'
                : '',
        ]"
    >
        <p class="w-1/4 font-semibold cursor-pointer">
            {{ task.titulo }}
        </p>
        <p class="w-1/4">
            {{ task.data.toLocaleDateString() }}
        </p>
        <div class="Ações min-w-fit">
            <i class="fas mr-1 md:mr-3 text-red fa-trash"></i>
            <i class="fas text-yellow fa-edit"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskComponent",
    props: {
        task: {
            type: Object,
            required: true,
        },
    },
};
</script>

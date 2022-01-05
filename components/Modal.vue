<template>
    <VerticalCenter v-if="show" class="modal ease-in-out transition duration-300 fixed top-0 left-0 z-40 w-screen h-screen">
        <Card class="w-full overflow-auto max-h-[100vh] relative dark:outline-white" :class="classes">
            <div v-if="title" class="w-full flex items-center p-3 border-b border-gray-300 dark:border-gray-800 dark:bg-gray-900 shadow-sm">
                <span class="font-bold flex-grow text-lg text-center">{{title}}</span>
                <span class="transition duration-200 cursor-pointer rounded-full bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-3xl flex-grow-0 w-9 h-9 ml-auto mr-2  flex justify-center items-center" @click.stop="close">&times;</span>
            </div>
            <span v-else class="fixed right-3 top-3 z-10 transition duration-200 cursor-pointer rounded-full bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-3xl flex-grow-0 w-9 h-9 ml-auto mr-2 flex justify-center items-center" @click.stop="close">&times;</span>
            <slot/>
        </Card>
    </VerticalCenter>
</template>

<script>
export default {
    props: {
        show: {},
        title: {},
        classes: {}
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>
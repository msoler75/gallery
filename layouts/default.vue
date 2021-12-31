<template>
    <div :style="imageBg" class="h-full w-full bg-fixed flex-grow" id="main">
        <a
            class="inline-block py-1 px-3 m-9 rounded-lg hover:bg-blue-100 shadow bg-white w-auto"
            href="https://tseyor.org/utg"
        >&lt;&nbsp; TSEYOR.ORG</a>
        <nuxt />
    </div>
</template>


<script>
export default {
    computed: {
        imageBg() {
            return {
                background: 'rgb(250,253,255)',
                background: 'linear-gradient(184deg, rgba(250,253,255,1) 0%, rgba(148,187,233,1) 100%)'
            }
        }
    }
}
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
}

body,
#__nuxt,
#__layout {
    min-height: 100vh;
}
#__layout {
    display: flex;
    flex-direction: column;
}
</style>
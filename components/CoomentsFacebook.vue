<template>
    <div
        class="fb-comments"
        :data-href="url"
        data-width="550"
        data-numposts="5"
    />
</template>


<script>
export default {
    props: {
        url: {} 
    }, 
    data() {
        return {
            scr: null
        }
    },
    mounted() {
        const s = document.createElement("script");
        s.async = true;
        s.src = "https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v12.0&appId=392974907402416&autoLogAppEvents=1"
        s.setAttribute("nonce", "rksp9ti6")
        s.setAttribute("crossorigin", "anonymous")
        this.scr = s
        this.$el.appendChild(s)
    },
    beforeUnmount() {
        this.scr.remove()
    }
}
</script>
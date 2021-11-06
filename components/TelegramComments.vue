<template>
    <div></div>
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
        s.src = "https://comments.app/js/widget.js?3"
        s.setAttribute("data-comments-app-website", "IK3R7W2n")
        s.setAttribute("data-limit", "5")
        s.setAttribute("data-page-id", this.url)
        s.setAttribute("data-dislikes", "1")
        s.setAttribute("data-outlined", "1")
        console.log(this.$refs)
        this.scr = s
        this.$el.appendChild(s)
    },
    beforeUnmount() {
        this.scr.parentNode.removeChild(this.scr)
    }
}
</script>
<template>
    <div class="hor-center h-full flex flex-col"
    :class="scrollbarV?'justify-start':'justify-center'"
    >
        <slot />
    </div>
</template>

<script>

export default {
    data() {
        return {
            observer: null,
            scrollbarH: false,
            scrollbarV: false,
        }
    },
    methods: {
        calculate() {
            let div = this.$el
            this.scrollbarH = div.scrollWidth > div.clientWidth;
            this.scrollbarV = div.scrollHeight > div.clientHeight;
            console.log('calculate', this.scrollbarV)
        },
    },
    created() {
        if (process.client) {
            window.addEventListener('resize', this.calculate, { passive: true });
        }
    },
    mounted() {
        // Create the observer (and what to do on changes...)
        this.observer = new MutationObserver(function (mutations) {
            this.$nextTick(() => {
                this.calculate()
            })
        }.bind(this));

        // Setup the observer
        this.observer.observe(
            this.$el,
            { attributes: true, childList: true, characterData: true, subtree: true }
        );
    },
    beforeDestroy: function () {
        // Clean up
        this.observer.disconnect();
    },
    destroyed() {
        if (process.client) {
            window.removeEventListener('resize', this.calculate);
        }
    },
}
</script>
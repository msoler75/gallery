<template>
    <section class="grid gap-4 justify-center">
        <slot />
    </section>
</template>

<style scoped>
.grid:not([class*="grid-cols-"]) {
    grid-template-columns: repeat(auto-fit, minmax(16rem, max-content));
}

.grid-cols-fit-w-10 {
    grid-template-columns: repeat(auto-fit, minmax(2.5rem, 1fr));
} /* 40px */
.grid-cols-fit-w-11 {
    grid-template-columns: repeat(auto-fit, minmax(2.75rem, 1fr));
} /* 44px */
.grid-cols-fit-w-12 {
    grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
} /* 48px */
.grid-cols-fit-w-14 {
    grid-template-columns: repeat(auto-fit, minmax(3.5rem, 1fr));
} /* 56px */
.grid-cols-fit-w-16 {
    grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
} /* 64px */
.grid-cols-fit-w-20 {
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
} /* 80px */
.grid-cols-fit-w-24 {
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
} /* 96px */
.grid-cols-fit-w-28 {
    grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
} /* 112px */
.grid-cols-fit-w-32 {
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
} /* 128px */
.grid-cols-fit-w-36 {
    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
} /* 144px */
.grid-cols-fit-w-40 {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
} /* 160px */
.grid-cols-fit-w-44 {
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
} /* 176px */
.grid-cols-fit-w-48 {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
} /* 192px */
.grid-cols-fit-w-52 {
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
} /* 208px */
.grid-cols-fit-w-56 {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
} /* 224px */
.grid-cols-fit-w-60 {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
} /* 240px */
.grid-cols-fit-w-64 {
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
} /* 256px */
.grid-cols-fit-w-72 {
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
} /* 288px */
.grid-cols-fit-w-80 {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
} /* 320px */
.grid-cols-fit-w-96 {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
} /* 384px */
.grid-cols-fit-w-96 {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
} /* 384px */
.grid-cols-fit-w-100 {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
}
.grid-cols-fit-w-112 {
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
}
.grid-cols-fit-w-128 {
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
}
.grid-cols-fit-w-144 {
    grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr));
}
.grid-cols-fit-w-150 {
    grid-template-columns: repeat(auto-fit, minmax(37.5rem, 1fr));
}

.grid-cols-fill-w-10 {
    grid-template-columns: repeat(auto-fill, minmax(2.5rem, 1fr));
} /* 40px */
.grid-cols-fill-w-11 {
    grid-template-columns: repeat(auto-fill, minmax(2.75rem, 1fr));
} /* 44px */
.grid-cols-fill-w-12 {
    grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
} /* 48px */
.grid-cols-fill-w-14 {
    grid-template-columns: repeat(auto-fill, minmax(3.5rem, 1fr));
} /* 56px */
.grid-cols-fill-w-16 {
    grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
} /* 64px */
.grid-cols-fill-w-20 {
    grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
} /* 80px */
.grid-cols-fill-w-24 {
    grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
} /* 96px */
.grid-cols-fill-w-28 {
    grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
} /* 112px */
.grid-cols-fill-w-32 {
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
} /* 128px */
.grid-cols-fill-w-36 {
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
} /* 144px */
.grid-cols-fill-w-40 {
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
} /* 160px */
.grid-cols-fill-w-44 {
    grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
} /* 176px */
.grid-cols-fill-w-48 {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
} /* 192px */
.grid-cols-fill-w-52 {
    grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
} /* 208px */
.grid-cols-fill-w-56 {
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
} /* 224px */
.grid-cols-fill-w-60 {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
} /* 240px */
.grid-cols-fill-w-64 {
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
} /* 256px */
.grid-cols-fill-w-72 {
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
} /* 288px */
.grid-cols-fill-w-80 {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
} /* 320px */
.grid-cols-fill-w-96 {
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
} /* 384px */
.grid-cols-fill-w-100 {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
}
.grid-cols-fill-w-112 {
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
}
.grid-cols-fill-w-128 {
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
}
.grid-cols-fill-w-144 {
    grid-template-columns: repeat(auto-fill, minmax(36rem, 1fr));
}
.grid-cols-fill-w-150 {
    grid-template-columns: repeat(auto-fill, minmax(37.5rem, 1fr));
}
</style>
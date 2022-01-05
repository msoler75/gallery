<template>
    <Grid :class="viendo > -1 ? 'h-0 overflow-hidden' : 'overflow-y-auto'">
        <Card v-for="(item, index) of itemsPrepared" :key="index" class="bg-gray text-center">
            <div
                v-if="'ruta' in item"
                @click="$emit('change', item.ruta)"
                class="h-full flex flex-col items-center justify-center cursor-pointer"
            >
                <LoaderImage
                    :src="item.url"
                    class="h-70 w-[400px] bg-white"
                    loading="lazy"
                    :width="Math.min(width, 400)"
                    :height="330"
                    :crop="true"
                />
                <h2 class="text-2xl font-bold p-5 mt-auto">{{ item.titulo }}</h2>
                <h4 v-if="item.autor" class="p-1">
                    <i>@{{ item.autor }}</i>
                </h4>
            </div>

            <template v-else>
                <div
                    class="h-full flex flex-col items-center justify-start cursor-pointer"
                    @click="mostrarImagen(index)"
                >
                    <div class="h-60 overflow-hidden cursor-pointer">
                        <LoaderImage
                            :src="item.url"
                            loading="lazy"
                            class="h-70 bg-white"
                            :width="Math.min(width, 400)"
                            :height="330"
                            :crop="true"
                        />
                    </div>
                    <div class="select-none my-2 text-lg cursor-pointer font-bold">{{ item.titulo }}</div>
                    <div
                        class="select-none my-2 italic mb-4"
                        v-if="showAuthor && item.autor"
                    >{{ item.autor }}</div>
                </div>

                <Modal :show="viendo === index" class="overflow-auto w-screen h-screen" @close="viendo=-1">
                    <figure
                        class="flex flex-col lg:flex-row w-full lg:h-full relative"
                    >
                        <div
                            @click.stop="mostrarImagen((index + 1) % N)"
                            class="cursor-pointer rounded-full w-12 h-12 flex justify-center items-center z-50 fixed bottom-9 lg:bottom-3 right-2 lg:right-[520px] sm:right-8 bg-black text-white text-lg font-bold opacity-20 lg:opacity-50 hover:opacity-100"
                        >&gt;</div>
                        <div
                            @click.stop="mostrarImagen((index - 1 + N) % N)"
                            class="cursor-pointer rounded-full w-12 h-12 flex justify-center items-center z-50 fixed bottom-9 lg:bottom-3 left-2 sm:left-8 bg-black text-white text-lg font-bold opacity-20 lg:opacity-50 hover:opacity-100"
                        >&lt;</div>
                        <VerticalCenter
                            class="flex-shrink-0 image-container w-full lg:flex-shrink lg:flex-grow bg-gray-900 height-88vh lg:height-100vh"
                        >
                            <LoaderImage
                                :src="item.url"
                                class="figure-image w-auto"
                                :width="width >= 1024 ? width - 310 : width"
                                :height="width >= 1024 ?height:Math.ceil(height*.82)"
                                :crop="false"
                            />
                        </VerticalCenter>
                        <figcaption
                            class="text-lg flex-grow-0 flex-shrink-0 max-w-full mx-auto lg:w-[500px] lg:overflow-y-auto space-y-12 bg-white p-2 sm:p-7 lg:p-12 h-full"
                        >
                            <div class="space-y-3 sm:space-y-7">
                                <div if="item.titulo" class="title">
                                    <h1 class="text-2xl font-bold font-serif">{{ item.titulo }}</h1>
                                </div>
                                <div class="description">
                                    <div>{{ item.descripcion }}</div>
                                </div>
                                <div v-if="item.autor" class="autor">
                                    <div class="text-right">@{{ item.autor }}</div>
                                </div>
                            </div>
                            <div class="w-full max-w-full">
                                <div
                                    class="fb-comments"
                                    :data-href="item.url"
                                    data-width="600"
                                    data-numposts="5"
                                />
                                <TelegramComments
                                    class="w-full"
                                    :url="item.url"
                                />
                            </div>
                        </figcaption>
                        <!-- precarga -->
                        <LoaderImage
                            v-if="imagenSiguiente"
                            :src="imagenSiguiente.url"
                            style="max-height: 84vh"
                            class="hidden"
                            :width="width >= 1024 ? width - 310 : width"
                            :crop="false"
                        />
                        <LoaderImage
                            v-if="imagenAnterior"
                            :src="imagenAnterior.url"
                            style="max-height: 84vh"
                            class="hidden"
                            :width="width >= 1024 ? width - 310 : width"
                            :crop="false"
                        />
                    </figure>
                </Modal>
            </template>
        </Card>
    </Grid>
</template>

<script>
export default {
    props: {
        items: [],
        social: { default: true },
        showAuthor: {}
    },
    data() {
        return {
            viendo: -1,
            imagenAnterior: null,
            imagenSiguiente: null,
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    },
    computed: {
        itemsJSON() {
            return JSON.stringify(this.items)
        },
        N() {
            return this.items.length
        },
        itemsPrepared() {
            const r = []
            for (const item of this.items) {
                let it = { ...item }
                it.url = this.$config.basePathImages + it.url
                r.push(it)
            }
            return r
        },
    },
    watch: {
        itemsJSON(newValue) {
            this.viendo = -1
        }
    },
    mounted() {
        window.addEventListener('resize', this.getDimensions);
    },
    unmounted() {
        window.removeEventListener('resize', this.getDimensions);
    },
    methods: {
        getDimensions() {
            this.width = document.documentElement.clientWidth;
            this.height = document.documentElement.clientHeight;
        },
        mostrarImagen(index) {
            this.viendo = index
            this.imagenSiguiente = (index + 1) % this.N
            this.imagenAnterior = (index - 1 + this.N) % this.N
        },
    }
}
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");

figcaption .description {
    font-family: "Dancing Script", cursive;
}
figcaption .description {
    font-family: "Dancing Script", cursive;
}
.height-88vh {
    min-height: 82vh;
    height: 82vh;
}
.height-12vh {
    min-height: 18vh;
    height: 18vh;
}
@screen lg {
    .lg\:height-100vh {
        height: 100%;
        min-height: 100vh;
    }
}

img.figure-image {
    object-fit: contain;
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
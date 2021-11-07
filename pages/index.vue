<template>
  <div class="p-5 sm:p-10 md:p-16 lg:p-20 h-full flex-grow">
    <h1 class="text-center text-3xl font-bold font-sans my-5">Galería de Arte TSEYOR</h1>
    <h2 class="text-center text-lg italic mb-12">Edición 2021</h2>

    <div id="fb-root"></div>
    <Grid>
      <Card v-for="(item, index) of items" :key="index" class="bg-gray text-center">
        <div class="h-60 overflow-hidden cursor-pointer" @click="mostrarImagen(index)">
          <nuxt-img :src="item.url" fit="cover" sizes="100vw xs:300px" />
        </div>
        <div
          @click="mostrarImagen(index)"
          class="select-none my-2 text-lg cursor-pointer font-bold"
        >{{ item.titulo }}</div>
        <div class="select-none my-2 italic mb-4">{{ item.autor }}</div>
      </Card>
    </Grid>

    <Modal
      v-for="(item, index) of items"
      :key="index"
      v-model="item.mostrando"
      classes="w-screen h-screen"
    >
      <figure class="overflow-auto flex flex-col lg:flex-row w-full h-full">
        <div class="relative flex-grow w-full flex justify-center items-center bg-gray-900">
          <nuxt-img :src="item.url" fit="contain" style="max-height: 84vh" />
          <div
            @click="mostrarImagen((index + 1) % items.length)"
            class="cursor-pointer rounded-full w-12 h-12 flex justify-center items-center z-50 absolute inset-y-1/2 right-2 sm:right-8 bg-black text-white text-lg font-bold opacity-50 hover:opacity-100"
          >&gt;</div>
          <div
            @click="mostrarImagen((index - 1 + items.length) % items.length)"
            class="cursor-pointer rounded-full w-12 h-12 flex justify-center items-center z-50 absolute inset-y-1/2 left-2 sm:left-8 bg-black text-white text-lg font-bold opacity-50 hover:opacity-100"
          >&lt;</div>
        </div>
        <figcaption
          class="text-lg flex-grow-0 w-full lg:w-[600px] space-y-12 bg-white p-2 sm:p-7 lg:p-12"
        >
          <div class="space-y-7">
            <div class="title">
              <h1 class="text-2xl font-bold font-serif">{{ item.titulo }}</h1>
            </div>
            <div class="description">
              <div>{{ item.descripcion }}</div>
            </div>
            <div class="autor">
              <div class="text-right">@{{ item.autor }}</div>
            </div>
          </div>
          <div class="w-full max-w-full">
            <TelegramComments v-if="social" class="w-full" :url="item.url" />
            <div class="fb-comments" :data-href="item.url" data-width="640" data-numposts="5" />
          </div>
        </figcaption>
      </figure>
    </Modal>
  </div>
</template>

<script>

const social = true;

export default {
  async fetch() {
    // this.$axios.get('')
  },
  head: {
    script: social ? [
      {
        src: "https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v12.0&appId=392974907402416&autoLogAppEvents=1",
        nonce: "6kjHrXuq",
        async: true,
        defer: true,
        crossorigin: "anonymous"
      }
    ] : []
  },
  data() {
    return {
      social: social,
      items: [
        {
          url: 'https://tseyor.org/utg/divulgacion/galeria/media/da50f37181235f089d0164a28edcfde4.jpg',
          autor: 'Benéfica Amor Pm',
          titulo: 'poster 1',
          descripcion: 'Es un retrado de amor',
          tags: ['amor', 'necesidad', 'ayuda humanitaria']
        },
        {
          url: 'https://tseyor.org/utg/divulgacion/galeria/media/3b769be98a36eacf4769e1bd2798011d.jpg',
          autor: 'Pigmalión',
          titulo: 'paisaje artístico',
          descripcion: 'Hermandad y una nave platillo para caracterizar un conjunto de ideas geniales y blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
          tags: ['amor', 'hermandad', 'nave']
        }
      ]
    }
  },
  mounted() {
    for (const item of this.items)
      this.$set(item, 'mostrando', false)
  },
  methods: {
    mostrarImagen(idx) {
      for (const item of this.items)
        item.mostrando = false
      this.$set(this.items[idx], 'mostrando', true)
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");

figcaption .description {
  font-family: "Dancing Script", cursive;
}
</style>
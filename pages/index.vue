<template>
  <div class="p-5 sm:p-10 md:p-16 lg:p-20">
    <h1 class="text-center text-3xl font-bold font-sans my-5">Galería de Arte TSEYOR</h1>
    <h2 class="text-center text-lg italic mb-12">Edición 2021</h2>

    <div id="fb-root"></div>
    <Grid>
      <Card v-for="(item, index) of items" :key="item.url" class="bg-gray rounded overflow-hidden">
        <div class="h-60 overflow-hidden">
          <nuxt-img :src="item.url" fit="cover" sizes="100vw xs:300px" />
        </div>
        <div 
        class="select-none transition duration-200 font-semibold py-2 px-4 border rounded-lg shadow border-blue-800 !text-blue-contrast text-center cursor-pointer"
        @click="mostrarImagen(index)">Mostrar</div>
        <Modal v-model="item.mostrando" :title="item.titulo">
          <div @click="mostrarImagen((index+1)%items.length)" class="cursor-pointer rounded-full w-12 h-12 flex justify-center items-center z-50 fixed inset-y-1/2 right-2 sm:right-8 bg-black text-white text-lg font-bold opacity-50 hover:opacity-100">&gt;</div>
          <div @click="mostrarImagen((index-1+items.length)%items.length)" class="cursor-pointer rounded-full w-12 h-12 flex justify-center items-center z-50 fixed inset-y-1/2 left-2 sm:left-8 bg-black text-white text-lg font-bold opacity-50 hover:opacity-100">&lt;</div>
          <figure class="overflow-scroll">
            <nuxt-img :src="item.url" fit="contain" class="mx-auto h-[50vh]" />
            <figcaption>
              <div>
                <div>{{ item.descripcion }}</div>
              </div>
              <div>
                <div>{{ item.autor }}</div>
              </div>
            </figcaption>
            <div class="w-full sm:max-w-[640px] sm:w-[640px]">
              <TelegramComments v-if="social" :url="item.url"/>
              <div class="fb-comments" :data-href="item.url" data-width="640" data-numposts="5"/>
            </div>
          </figure>
        </Modal>
      </Card>
    </Grid>
  </div>
</template>

<script>

const social = false;

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
    for(const item of this.items)
       this.$set(item, 'mostrando',  false)
  },
  methods: {
    mostrarImagen(idx) {
      for (const item of this.items)
        item.mostrando = false
      this.$set(this.items[idx], 'mostrando',  true)
    }
  }
}
</script>

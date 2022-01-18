<template>
  <div class="p-5 sm:p-10 md:p-16 lg:p-20 h-full flex-grow">
    <h1 class="text-center text-3xl font-bold font-sans my-5">{{ titulo }}</h1>
    <h2 v-if="subtitulo" class="text-center text-lg italic mb-12">{{ subtitulo }}</h2>
    <div
      v-if="ruta"
      class="text-leftmax-w-full mx-auto -translate-y-10 cursor-pointer hover:text-underline inline-block py-1 px-3 m-9 rounded-lg hover:bg-blue-100 shadow bg-white w-auto"
      @click="back()"
    >&lt; Volver</div>
    <client-only>
      <Galeria :items="actualItems" @change="onRuta" :showAuthor="!categoriaAutor" />
    </client-only>
    <div id="fb-root"></div>
  </div>
</template>

<script>
const TITULO = 'Galería de Arte TSEYOR'
const SUBTITULO = 'Edición 2021'
export default {
  data() {
    return {
      titulo: TITULO,
      subtitulo: SUBTITULO,
      categoriaAutor: false,
      items: {},
      ruta: '',
      rutaPadre: '.',
      isFolder: true
    }
  },
  async asyncData({ $axios }) {
    const items = await $axios.$get('2021.json', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return { items }
  },
  created() {
    if (process.client) {
      window.addEventListener('popstate', this.handlePopState)
    };
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('popstate', this.handlePopState)
    };
  },
  mounted() {
    var stateObj = { rutaPrevia: this.ruta }
    history.replaceState(stateObj, 'Galería')
  },
  methods: {
    back() {
      history.back()
    },
    handlePopState(g) {
      this.ruta = g.state.rutaPrevia
    },
    cambiarRuta(ruta) {
      this.ruta = ruta
      var stateObj = { rutaPrevia: this.ruta }
      history.pushState(stateObj, 'Galería')
    },
    onRuta(ruta) {
      this.cambiarRuta(ruta)
    },
    collectImages(items) {
      let r = []
      for (const key in items) {
        if (typeof key === 'string' && !key.match(/^\d+$/))
          r = r.concat(this.collectImages(items[key]))
        else
          r.push(items[key].url)
      }
      return r
    },
    findRandomImage(items) {
      const images = this.collectImages(items)
      const i = Math.floor(Math.random() * images.length)
      return images[i]
    },
    expandItems(items) {
      let r = {}
      //else 
      if (typeof items === 'object')
        for (const key in items) {
          if (typeof key === 'string' && !key.match(/^\d+$/)) {
            r[key] = this.expandItems(items[key])
          }
          else {
            const item = items[key]
            // r[key] = []
            if (item['folder']) {
              let i = 10000
              for (const idx in item['images']) {
                const img = item['images'][idx]
                const elem = JSON.parse(JSON.stringify(item))
                delete elem.folder
                delete elem.images
                elem.url = item['folder'] + '/' + img
                r[i++] = elem
              }
            }
            else {
              // this.prepareImages(item)
              r[key] = item
            }
          }
        }
      return r
    }
  },
  watch: {
    ruta(newValue) {
      const parts = this.ruta.split('/')
      parts.pop()
      this.rutaPadre = parts.join('/')

      this.$scrollTo(document.getElementById('main'), 0)

      // RECALCULO DE TITULO Y SUBTITULO
      if (!this.ruta) {
        this.titulo = TITULO
        this.subtitulo = SUBTITULO
      }
      else {
        let current = this.expandedItems
        const parts = this.ruta.split('/').filter(x => !!x)
        let key = parts.pop()
        for (const key of parts)
          current = current[key]
        const [tit, autor] = key.split('@')
        this.titulo = tit
        this.subtitulo = autor ? '@' + autor : ''
        this.categoriaAutor = autor
      }
    },
    subtitulo() {
      return this.ruta ? '' : 'Edición 2021'
    },
  },
  computed: {
    expandedItems() {
      return this.expandItems(this.items)
    },
    actualItems() {
      let r = []
      let current = this.expandedItems
      let ruta = this.ruta || ''
      // seguimos la estructura json como si fuera una ruta
      if (ruta) {
        const parts = ruta.split('/').filter(x => !!x)
        for (const key of parts)
          current = current[key]
      }
      for (const key in current) {
        if (typeof key === 'string' && !key.match(/^\d+$/)) {
          const [title, author] = key.split('@')
          this.isFolder = true
          let item =
          {
            "ruta": ruta + '/' + key,
            "titulo": title,
            "autor": author,
            "url": this.findRandomImage(current[key]),
          }
          // this.prepareImages(item)
          r.push(item)
        }
        else {
          const item = current[key]
          // this.prepareImages(item)
          r.push({ ...item, mostrando: false })
        }
      }
      return r
    }
  }
}
</script>

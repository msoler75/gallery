<template>
  <div class="bg-white text-gray-dark-700 flex flex-col overflow-hidden transition duration-500 shadow-lg"
  :class="center?'text-center':''"
  :clicked="clicked"
  >
    <slot>
      <!-- 
      <div v-if="cimage" class="card-img max-w-full h-40 overflow-hidden">
        <img v-if="cimage.match(/^data:image/)" :src="cimage" class="w-full" />
        <nuxt-img v-else :src="cimage" :sizes="imageSizes" class="w-full" :alt="ctitle"></nuxt-img>
      </div>
      -->
      <div v-if="cimage" :style="imageBg" class="card-img max-w-full h-40 flex-shrink-0"/>
      <div class="px-6 py-4 flex flex-col h-full">
        <NLink :to="chref"
         @click.native.prevent="clicked=true">
          <section class="font-bold text-xl" :class="noText?'':'mb-2'">{{ ctitle }}</section>
        </NLink>
        <v-clamp v-if="!noText && ctext" autoresize :max-lines="5"
        class="mt-auto text-gray-700 text-base">{{cteaser}}</v-clamp>
      </div>
      <div v-if="showTags" class="px-6 pt-4 pb-2 mt-auto">
        <span
          v-for="tag of ctags"
          :key="tag"
          class="inline-block bg-gray-200 dark:bg-gray-dark-700 text-gray-700 dark:text-gray-400 rounded-full px-3 py-1 text-sm mr-2 mb-2"
        >
          {{ tag }}
        </span>
      </div>
    </slot>
    <div v-if="cdate && !noDate" class="my-3 text-center text-diminished text-xs">{{$dayjs(cdate).fromNow()}}</div>
  </div>
</template>

<script>
export default {
 props: {
    image: {
      type: String,
      required: false,
      default: ""
    },
    imageSizes: {
      type: String,
      required: false,
      default: "sizes"
    },
    imageWidth: {
      type: Number,
      required: false,
      default: 640
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    noText: {
      type: Boolean,
      required: false,
      default: false
    },
    noDate: {
      type: Boolean,
      required: false,
      default: false
    },
    creation: { // define la fecha segun la creación del contenido, no de la ultima modificación
      type: Boolean,
      required: false,
      default: false
    },
    href: {
      type: String,
      required: false,
      default: ""
    },
    tags: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    },
    showTags: {
      type: Boolean,
      required: false,
      default: false
    },
    collection: {
      type: String,
      required: false,
      default: undefined
    },
    center: {
      type: Boolean,
      required: false,
      default: false
    },
    data: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    }
  },
  data(){
    return {
      clicked: false
    }
  },
  computed: {
    ctitle() {
      return (
        this.title ||
        this.data.title ||
        this.data.titulo ||
        this.data.titular ||
        this.data.name ||
        this.data.nombre ||
        this.data.nombreSimbolico ||
        this.data.username
      );
    },
    ccollection() {
      return this.collection || this.data.collection || this.data.colleccion;
    },
    chref() {
      const r =
        this.href || this.data.href || this.data.url || this.data.enlace;
      if (!r && this.data) {
        return "/" + (this.ccollection + "/" + (this.data.slug || this.data.id));
      }
      return r;
    },
    ctext() {
      return (
        this.text ||
        this.data.text ||
        this.data.texto ||
        this.data.description ||
        this.data.descripcion
      );
    },
    cteaser() {
      var t = this.teaser || this.data.description || this.data.descripcion;
      if (!t) t = this.$md.render(this.ctext);
      if (t.indexOf("</") > -1)
        t = t.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ")
      t = t.substr(0, 1024)
      return t
    },
    ctags() {
      return this.tags || this.data.tags || this.data.etiquetas;
    },
    cdate() {
      return this.date || this.data.date || (this.creation?this.data.created_at:this.data.updated_at) || (this.creation?this.data.updated_at:this.data.created_at) || this.data.fecha || null
    },
    cclase() {
      return this.data ? this.data.clase : "default";
    },
    cimage() {
      let src = this.image || this.data.image || this.data.imagen;
      if (src && typeof src === "object") src = src.url;
      return src
    },
    imageBg () {
      const imgUrl = this.$img(this.cimage, {width: this.imageWidth, format: 'webp', quality: 70})
      return {
        backgroundImage: `url('${imgUrl}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    }
  },
  watch: {
    clicked(newValue) {
      const card = this.$el
      const pos = card.getBoundingClientRect()
        const box = document.createElement("DIV")
        document.body.appendChild(box)
        box.classList.add('flash')
        box.classList.add('surface')
        box.style.left = pos.left + 'px'
        box.style.top = pos.top + 'px'
        box.style.width = pos.width + 'px'
        box.style.height = pos.height + 'px'
        setTimeout(()=>{
            box.parentNode.removeChild(box)
          }, 2500)
    }
  }
}
</script>


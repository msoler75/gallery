<template>
  <div>
    <div id="fb-root"></div>
    <figure v-for="(item, index) of items" :key="item.url">
      <img :src="item.url">
    
      <figcaption>
      <div>
        <div>{{item.descripcion}}</div>
      </div>
      <div>
        <div>{{item.autor}}</div>
      </div>
        
      </figcaption>
      

      <div :ref="'item-'+index"></div>
      <div class="fb-comment-comment"
        :data-href="item.url"
        data-width="500"></div>
    </figure>

  </div>
</template>

<script>
export default {
  async fetch() {
    // this.$axios.get('')
  },
  head: {
    script: [
      {
        src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6",
        async: true,
        defer: true,
        crossorigin: "anonymous"
      }
    ]
  },
  data() {
    return {
      items: [
        {
          url: 'https://tseyor.org/utg/divulgacion/galeria/media/da50f37181235f089d0164a28edcfde4.jpg',
          autor: 'Benéfica Amor Pm',
          descripcion: 'Es un retrado de amor',
          tags: ['amor', 'necesidad', 'ayuda humanitaria']
        },
        {
          url: 'https://tseyor.org/utg/divulgacion/galeria/media/3b769be98a36eacf4769e1bd2798011d.jpg',
          autor: 'Pigmalión',
          descripcion: 'Hermandad y una nave platillo para caracterizar un conjunto de ideas geniales y blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
          tags: ['amor', 'hermandad', 'nave']
        }
      ]
    }
  },
  mounted() {
    if(false)
    for(const index in this.items) {
      const s = document.createElement("script");
      s.async = true;
      s.src="https://comments.app/js/widget.js?3"
      s.setAttribute("data-comments-app-website", "IK3R7W2n")
      s.setAttribute("data-limit", "5")
      s.setAttribute("data-page-id", this.items[index].url)
      s.setAttribute("data-dislikes", "1")
      s.setAttribute("data-outlined", "1")
      console.log(this.$refs)
      const el = this.$refs['item-'+index][0]
      el.appendChild(s)
    }
  },
}
</script>

<template>
    <div :style="imageBg" class="h-full flex-grow">
        <nuxt/>
    </div>
</template>


<script>
export default {
    data(){
        return {
            imageBgUrl: "/bg.jpg",
        }
    },
    computed: {
     imageBg () {
      const imgUrl = this.$img(this.imageBgUrl, { width: '100%', fit: 'cover', format: 'webp', quality: 85 })
      return {
        backgroundImage: `url('${imgUrl}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    }
    }
}
</script>

<style>
html, body {
    margin: 0; 
    padding:0
}

body, #__nuxt, #__layout {min-height: 100vh}
#__layout {display: flex; flex-direction: column}    
</style>
<template>
  <img
    :src="srcFinal"
    class="transition-opacity duration-250"
    loading="lazy"
    @load="onLoaded"
    :class="isLoaded ? 'opacity-100' : 'opacity-0'"
  />
</template>


<script>
export default {
  props: {
    src: {type: String},
    width: {},
    height: {},
    crop: {}
  },
  data() {
    return {
      isLoaded: false,
      maxWidth: this.width,
      maxHeight: this.height,
      srcFinal: null,
      isPortrait: undefined
    }
  },
  watch: {
    width(newValue) {
      if (newValue > this.maxWidth) {
        this.maxWidth = newValue
        this.prepareImage()
      }
    },
    height(newValue) {
      if (this.isPortrait && newValue > this.maxHeight) {
        this.maxHeight = newValue
        this.prepareImage()
      }
    },
    crop(newValue) {
      this.prepareImage()
    },
    src(newValue) {
      this.isLoaded = false
      this.prepareImage()
    }
  },
  created() {
    this.prepareImage()
  },
  methods: {
    onLoaded() {
      this.isLoaded = true
      this.isPortrait = this.$el.width<this.$el.height
    }, 
    prepareImage() {
      if (!this.src || (!this.width && !this.height))
      {
        this.srcFinal = this.src
        return
      }
      const ext = this.src.substr(this.src.lastIndexOf('\.'))
      if (ext !== '.jpg' && ext !== '.jpeg')
        this.srcFinal = this.src.replace(ext, '.jpg') + `?thumb=${this.width}x${this.height}${this.crop ? 'c' : ''}&fe=${ext.substr(1)}`
      this.srcFinal = this.src + `?thumb=${this.width}x${this.height}${this.crop ? 'c' : ''}`
    }
  }
}
</script>

<style scoped>
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #cef;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
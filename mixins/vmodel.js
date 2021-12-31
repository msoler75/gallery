// custom.vmodel.mixin.js
export default {
  props: {
    value: {}
  },
  data () {
    return {
      localValue: this.value
    }
  },
  watch: {
    localValue (value) {
      console.log('LOCALVALUE', value)
      this.$emit('input', value)
    },
    value (value) {
      this.localValue = value
    }
  }
}

<template>
<van-transition :show="show" custom-class="van-overlay" :custom-style="'z-index: ' + zIndex + '; ' + ( mask ? 'background-color: rgba(0, 0, 0, .7);' : '' ) + '; ' + customStyle" :duration="duration" @tap="onClick" catch:touchmove="noop"></van-transition>
</template>

<script>
import { VantComponent } from '../common/component';
import vanTransition from "../transition/index";

export default {
  data() {
    return {};
  },

  components: {
    vanTransition
  },
  props: {
    show: Boolean,
    mask: Boolean,
    customStyle: String,
    duration: {
      type: [Number, Object],
      default: 300
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    },

    // for prevent touchmove
    noop() {}

  }
};
</script>
<style>
@import "./index.css";
</style>
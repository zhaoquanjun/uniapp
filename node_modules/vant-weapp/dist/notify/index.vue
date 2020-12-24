<template>
<van-transition name="slide-down" :show="show" custom-class="van-notify" :custom-style="'background-color:' + backgroundColor + '; color: ' + color + '; z-index: ' + zIndex + ';'">
  <view v-if="safeAreaInsetTop" class="van-notify__safe-top" :style="'padding-top: ' + statusBarHeight + 'px'"></view>
  {{ text }}
</van-transition>
</template>

<script>
import { VantComponent } from '../common/component';
import { RED } from '../common/color';
import { safeArea } from '../mixins/safe-area';
import vanTransition from "../transition/index";

export default {
  data() {
    return {};
  },

  components: {
    vanTransition
  },
  props: {
    text: String,
    color: {
      type: String,
      default: '#fff'
    },
    backgroundColor: {
      type: String,
      default: RED
    },
    duration: {
      type: Number,
      default: 3000
    },
    zIndex: {
      type: Number,
      default: 110
    }
  },
  mixins: [safeArea()],
  methods: {
    show() {
      const {
        duration
      } = this;
      clearTimeout(this.timer);
      this.set({
        show: true
      });

      if (duration > 0 && duration !== Infinity) {
        this.timer = setTimeout(() => {
          this.hide();
        }, duration);
      }
    },

    hide() {
      clearTimeout(this.timer);
      this.set({
        show: false
      });
    }

  }
};
</script>
<style>
@import "./index.css";
</style>
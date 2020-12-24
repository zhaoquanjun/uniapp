<template>
<view>
<van-overlay v-if="overlay" mask :show="show" :z-index="zIndex" :custom-style="overlayStyle" :duration="duration" @click="onClickOverlay"></van-overlay>
<view v-if="inited" :class="'custom-class ' + classes + ' ' + utils.bem('popup', [position, { safe: isIPhoneX && safeAreaInsetBottom }])" :style="'z-index: ' + zIndex + '; -webkit-transition-duration:' + currentDuration + 'ms; transition-duration:' + currentDuration + 'ms; ' + ( display ? '' : 'display: none;' ) + ' ' + customStyle" @transitionend="onTransitionEnd">
  <view v-if="safeAreaInsetTop" class="van-popup__safe-top" :style="'padding-top: ' + statusBarHeight + 'px;'"></view>
  <slot></slot>
</view>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import { transition } from '../mixins/transition';
import { safeArea } from '../mixins/safe-area';
import vanOverlay from "../overlay/index";

export default {
  data() {
    return {};
  },

  components: {
    vanOverlay
  },
  props: {
    transition: {
      type: String
    },
    customStyle: String,
    overlayStyle: String,
    zIndex: {
      type: Number,
      default: 100
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'center'
    }
  },
  watch: {
    transition: {
      handler: 'observeClass',
      immediate: true
    },
    position: {
      handler: 'observeClass',
      immediate: true
    }
  },
  classes: ['enter-class', 'enter-active-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class'],
  mixins: [transition(false), safeArea()],

  created() {
    this.observeClass();
  },

  methods: {
    onClickOverlay() {
      this.$emit('click-overlay');

      if (this.closeOnClickOverlay) {
        this.$emit('close');
      }
    },

    observeClass() {
      const {
        transition,
        position
      } = this;
      const updateData = {
        name: transition || position
      };

      if (transition === 'none') {
        updateData.duration = 0;
      }

      this.set(updateData);
    }

  }
};
</script>
<style>
@import "./index.css";
</style>
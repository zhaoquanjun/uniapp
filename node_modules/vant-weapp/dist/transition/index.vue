<template>
<view v-if="inited" :class="'van-transition custom-class ' + classes" :style="'-webkit-transition-duration:' + currentDuration + 'ms; transition-duration:' + currentDuration + 'ms; ' + ( display ? '' : 'display: none;' ) + ' ' + customStyle" @transitionend="onTransitionEnd">
  <slot></slot>
</view>
</template>

<script>
import { VantComponent } from '../common/component';
import { transition } from '../mixins/transition';

export default {
  data() {
    return {};
  },

  components: {},
  props: {},
  classes: ['enter-class', 'enter-active-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class'],
  mixins: [transition(true)],
  methods: {}
};
</script>
<style>
@import "./index.css";
</style>
<template>
<view class="van-swipe-cell" data-key="cell" @tap.stop="onClick" @touchstart="startDrag" :catchtouchmove="catchMove ? 'noop' : ''" capture-bind:touchmove="onDrag" catchtouchend="endDrag" catchtouchcancel="endDrag">
  <view :style="wrapperStyle">
    <view v-if="leftWidth" class="van-swipe-cell__left" data-key="left" @tap.stop="onClick">
      <slot name="left"></slot>
    </view>
    <slot></slot>
    <view v-if="rightWidth" class="van-swipe-cell__right" data-key="right" @tap.stop="onClick">
      <slot name="right"></slot>
    </view>
  </view>
</view>
</template>

<script>
import { VantComponent } from '../common/component';
import { touch } from '../mixins/touch';
const THRESHOLD = 0.3;

export default {
  data() {
    return {
      catchMove: false
    };
  },

  components: {},
  props: {
    disabled: Boolean,
    leftWidth: {
      type: Number,
      default: 0
    },
    rightWidth: {
      type: Number,
      default: 0
    },
    asyncClose: Boolean
  },
  mixins: [touch],

  created() {
    this.offset = 0;
  },

  methods: {
    open(position) {
      const {
        leftWidth,
        rightWidth
      } = this;
      const offset = position === 'left' ? leftWidth : -rightWidth;
      this.swipeMove(offset);
    },

    close() {
      this.swipeMove(0);
    },

    swipeMove(offset = 0) {
      this.offset = offset;
      const transform = `translate3d(${offset}px, 0, 0)`;
      const transition = this.draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)';
      this.set({
        wrapperStyle: `
        -webkit-transform: ${transform};
        -webkit-transition: ${transition};
        transform: ${transform};
        transition: ${transition};
      `
      });
    },

    swipeLeaveTransition() {
      const {
        leftWidth,
        rightWidth
      } = this;
      const {
        offset
      } = this;

      if (rightWidth > 0 && -offset > rightWidth * THRESHOLD) {
        this.open('right');
      } else if (leftWidth > 0 && offset > leftWidth * THRESHOLD) {
        this.open('left');
      } else {
        this.swipeMove(0);
      }

      this.set({
        catchMove: false
      });
    },

    startDrag(event) {
      if (this.disabled) {
        return;
      }

      this.draging = true;
      this.startOffset = this.offset;
      this.firstDirection = '';
      this.touchStart(event);
    },

    noop() {},

    onDrag(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);

      if (!this.firstDirection) {
        this.firstDirection = this.direction;
        this.set({
          catchMove: this.firstDirection === 'horizontal'
        });
      }

      if (this.firstDirection === 'vertical') {
        return;
      }

      const {
        leftWidth,
        rightWidth
      } = this;
      const offset = this.startOffset + this.deltaX;

      if (rightWidth > 0 && -offset > rightWidth || leftWidth > 0 && offset > leftWidth) {
        return;
      }

      this.swipeMove(offset);
    },

    endDrag() {
      if (this.disabled) {
        return;
      }

      this.draging = false;
      this.swipeLeaveTransition();
    },

    onClick(event) {
      const {
        key: position = 'outside'
      } = event.currentTarget.dataset;
      this.$emit('click', position);

      if (!this.offset) {
        return;
      }

      if (this.asyncClose) {
        this.$emit('close', {
          position,
          instance: this
        });
      } else {
        this.swipeMove(0);
      }
    }

  }
};
</script>
<style>
@import "./index.css";
</style>
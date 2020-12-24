<template>
<view class="van-rate custom-class" @touchmove="onTouchMove">
  <view v-for="(item, index) in count" :key="index" class="van-rate__item" :style="'font-size: ' + size + 'px;'">
    <van-icon :name="index + 1 <= innerValue ? icon : voidIcon" class="van-rate__icon" custom-class="icon-class" :data-score="index" :color="disabled ? disabledColor : index + 1 <= innerValue ? color : voidColor" @click="onSelect"></van-icon>

    <van-icon v-if="allowHalf" :name="index + 0.5 <= innerValue ? icon : voidIcon" :class="utils.bem('rate__icon', ['half'])" custom-class="icon-class" :data-score="index - 0.5" :color="disabled ? disabledColor : index + 0.5 <= innerValue ? color : voidColor" @click="onSelect"></van-icon>
  </view>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import vanIcon from "../icon/index";

export default {
  data() {
    return {
      innerValue: 0
    };
  },

  components: {
    vanIcon
  },
  props: {
    value: Number,
    readonly: Boolean,
    disabled: Boolean,
    allowHalf: Boolean,
    size: {
      type: Number,
      default: 20
    },
    icon: {
      type: String,
      default: 'star'
    },
    voidIcon: {
      type: String,
      default: 'star-o'
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    }
  },
  watch: {
    value(value) {
      if (value !== this.innerValue) {
        this.set({
          innerValue: value
        });
      }
    }

  },
  field: true,
  classes: ['icon-class'],
  methods: {
    onSelect(event) {
      const {
        data
      } = this;
      const {
        score
      } = event.currentTarget.dataset;

      if (!data.disabled && !data.readonly) {
        this.set({
          innerValue: score + 1
        });
        this.$emit('input', score + 1);
        this.$emit('change', score + 1);
      }
    },

    onTouchMove(event) {
      const {
        clientX,
        clientY
      } = event.touches[0];
      this.getRect('.van-rate__icon', true).then(list => {
        const target = list.sort(item => item.right - item.left).find(item => clientX >= item.left && clientX <= item.right && clientY >= item.top && clientY <= item.bottom);

        if (target != null) {
          this.onSelect(Object.assign({}, event, {
            currentTarget: target
          }));
        }
      });
    }

  }
};
</script>
<style>
@import "./index.css";
</style>
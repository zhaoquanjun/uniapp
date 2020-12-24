<template>
<view :class="utils.bem('badge', { active }) + ' van-hairline custom-class'" hover-class="van-badge--hover" hover-stay-time="70" @tap="onClick">
  <view class="van-badge__text">
    <van-info v-if="info !== null" :info="info" custom-style="right: 4px"></van-info>
    {{ title }}
  </view>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import vanInfo from "../info/index";

export default {
  data() {
    return {};
  },

  components: {
    vanInfo
  },
  props: {
    info: null,
    title: String
  },
  relation: {
    type: 'ancestor',
    name: 'badge-group',

    linked(target) {
      this.parent = target;
    }

  },
  methods: {
    onClick() {
      const {
        parent
      } = this;

      if (!parent) {
        return;
      }

      const index = parent.badges.indexOf(this);
      parent.setActive(index).then(() => {
        this.$emit('click', index);
        parent.$emit('change', index);
      });
    },

    setActive(active) {
      return this.set({
        active
      });
    }

  }
};
</script>
<style>
@import "./index.css";
</style>
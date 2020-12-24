<template>
<view :class="( utils.bem('tabbar-item', { active }) ) + ' custom-class'" :style="'color: ' + ( active ? activeColor : inactiveColor )" @tap="onClick">
  <view :class="utils.bem('tabbar-item__icon', { dot })">
    <van-icon v-if="icon" :name="icon" customStyle="display: block"></van-icon>
    <block v-else>
      <slot v-if="active" name="icon-active"></slot>
      <slot v-else name="icon"></slot>
    </block>
    <van-info v-if="info !== null" :info="info" custom-style="margin-top: 2px"></van-info>
  </view>
  <view class="van-tabbar-item__text">
    <slot></slot>
  </view>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import vanIcon from "../icon/index";
import vanInfo from "../info/index";

export default {
  data() {
    return {
      active: false
    };
  },

  components: {
    vanIcon,
    vanInfo
  },
  props: {
    info: null,
    icon: String,
    dot: Boolean,
    name: {
      type: [String, Number]
    }
  },
  relation: {
    name: 'tabbar',
    type: 'ancestor'
  },
  methods: {
    onClick() {
      if (this.parent) {
        this.parent.onChange(this);
      }

      this.$emit('click');
    },

    updateFromParent() {
      const {
        parent
      } = this;

      if (!parent) {
        return;
      }

      const index = parent.children.indexOf(this);
      const parentData = parent.data;
      const {
        data
      } = this;
      const active = (data.name || index) === parentData.active;
      const patch = {};

      if (active !== data.active) {
        patch.active = active;
      }

      if (parentData.activeColor !== data.activeColor) {
        patch.activeColor = parentData.activeColor;
      }

      if (parentData.inactiveColor !== data.inactiveColor) {
        patch.inactiveColor = parentData.inactiveColor;
      }

      return Object.keys(patch).length > 0 ? this.set(patch) : Promise.resolve();
    }

  }
};
</script>
<style>
@import "./index.css";
</style>
<template>
<view :class="'custom-class ' + ( border ? 'van-hairline--top-bottom' : '' ) + ' ' + utils.bem('tabbar', { fixed, safe: isIPhoneX && safeAreaInsetBottom })" :style="zIndex ? 'z-index: ' + zIndex : ''">
  <slot></slot>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import { safeArea } from '../mixins/safe-area';

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    active: {
      type: [Number, String]
    },
    activeColor: {
      type: String
    },
    inactiveColor: {
      type: String
    },
    fixed: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  watch: {
    active: {
      handler: 'updateChildren',
      immediate: true
    },
    activeColor: {
      handler: 'updateChildren',
      immediate: true
    },
    inactiveColor: {
      handler: 'updateChildren',
      immediate: true
    }
  },
  mixins: [safeArea()],
  relation: {
    name: 'tabbar-item',
    type: 'descendant',

    linked(target) {
      this.children.push(target);
      target.parent = this;
      target.updateFromParent();
    },

    unlinked(target) {
      this.children = this.children.filter(item => item !== target);
      this.updateChildren();
    }

  },

  beforeCreate() {
    this.children = [];
  },

  methods: {
    updateChildren() {
      const {
        children
      } = this;

      if (!Array.isArray(children) || !children.length) {
        return Promise.resolve();
      }

      return Promise.all(children.map(child => child.updateFromParent()));
    },

    onChange(child) {
      const index = this.children.indexOf(child);
      const active = child.data.name || index;

      if (active !== this.active) {
        this.$emit('change', active);
      }
    }

  }
};
</script>
<style>
@import "./index.css";
</style>
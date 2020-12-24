<template>
<view class="van-badge-group van-hairline--top-bottom custom-class">
  <slot></slot>
</view>
</template>

<script>
import { VantComponent } from '../common/component';

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  watch: {
    active: {
      handler: 'setActive',
      immediate: true
    }
  },
  relation: {
    name: 'badge',
    type: 'descendant',

    linked(target) {
      this.badges.push(target);
      this.setActive(this.active);
    },

    unlinked(target) {
      this.badges = this.badges.filter(item => item !== target);
      this.setActive(this.active);
    }

  },

  beforeCreate() {
    this.badges = [];
    this.currentActive = -1;
  },

  methods: {
    setActive(active) {
      const {
        badges,
        currentActive
      } = this;

      if (!badges.length) {
        return Promise.resolve();
      }

      this.currentActive = active;
      const stack = [];

      if (currentActive !== active && badges[currentActive]) {
        stack.push(badges[currentActive].setActive(false));
      }

      if (badges[active]) {
        stack.push(badges[active].setActive(true));
      }

      return Promise.all(stack);
    }

  }
};
</script>
<style>
@import "./index.css";
</style>
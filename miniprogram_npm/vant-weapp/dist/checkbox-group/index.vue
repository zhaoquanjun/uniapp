<template>
<slot></slot>
</template>

<script>
import { VantComponent } from '../common/component';

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    max: Number,
    value: {
      type: Array
    },
    disabled: {
      type: Boolean
    }
  },
  watch: {
    value: {
      handler: 'updateChildren',
      immediate: true,
      deep: true
    },
    disabled: {
      handler: 'updateChildren',
      immediate: true
    }
  },
  field: true,
  relation: {
    name: 'checkbox',
    type: 'descendant',

    linked(target) {
      this.children = this.children || [];
      this.children.push(target);
      this.updateChild(target);
    },

    unlinked(target) {
      this.children = this.children.filter(child => child !== target);
    }

  },
  methods: {
    updateChildren() {
      (this.children || []).forEach(child => this.updateChild(child));
    },

    updateChild(child) {
      const {
        value,
        disabled
      } = this;
      child.set({
        value: value.indexOf(child.data.name) !== -1,
        disabled: disabled || child.data.disabled
      });
    }

  }
};
</script>
<style>
@import "./index.css";
</style>
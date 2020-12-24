<template>
<van-cell center :title="title" :label="label" :border="border" :icon="icon" custom-class="van-switch-cell" :use-label-slot="useLabelSlot">
  <slot slot="icon" name="icon"></slot>
  <slot slot="title" name="title"></slot>
  <slot slot="label" name="label"></slot>
  <van-switch :size="size" :checked="checked" :loading="loading" :disabled="disabled" :active-color="activeColor" :inactive-color="inactiveColor" :active-value="activeValue" :inactive-value="inactiveValue" custom-class="van-switch-cell__switch" @change="onChange"></van-switch>
</van-cell>
</template>

<script>
import { VantComponent } from '../common/component';
import vanCell from "../cell/index";
import vanSwitch from "../switch/index";

export default {
  data() {
    return {};
  },

  components: {
    vanCell,
    vanSwitch
  },
  props: {
    value: null,
    icon: String,
    title: String,
    label: String,
    border: Boolean,
    checked: Boolean,
    loading: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    useLabelSlot: Boolean,
    size: {
      type: String,
      default: '24px'
    },
    activeValue: {
      type: null,
      default: true
    },
    inactiveValue: {
      type: null,
      default: false
    }
  },
  watch: {
    checked(value) {
      this.set({
        value
      });
    }

  },
  field: true,

  created() {
    this.set({
      value: this.checked
    });
  },

  methods: {
    onChange(event) {
      this.$emit('change', event.detail);
    }

  }
};
</script>
<style>
@import "./index.css";
</style>
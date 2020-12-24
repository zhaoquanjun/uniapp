<template>
<view v-if="animated || inited" :class="'custom-class ' + utils.bem('tab__pane', { active, inactive: !active })" :style="( animated || active ? '' : 'display: none;' ) + ' ' + ( width ? 'width:' + width + 'px;' : '' )">
  <slot></slot>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';

export default {
  data() {
    return {
      width: null,
      inited: false,
      active: false,
      animated: false
    };
  },

  components: {},
  props: {
    dot: Boolean,
    info: null,
    title: String,
    disabled: Boolean,
    titleStyle: String
  },
  watch: {
    title: 'update',
    disabled: 'update',
    dot: 'update',
    info: 'update',
    titleStyle: 'update'
  },
  relation: {
    name: 'tabs',
    type: 'ancestor'
  },
  methods: {
    update() {
      const parent = this.getRelationNodes('../tabs/index')[0];

      if (parent) {
        parent.updateTabs();
      }
    }

  }
};
</script>
<style>
@import "./index.css";
</style>
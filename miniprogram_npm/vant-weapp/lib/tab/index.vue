<template>
<view v-if="animated || inited" :class="'custom-class ' + utils.bem('tab__pane', { active, inactive: !active })" :style="( animated || active ? '' : 'display: none;' ) + ' ' + ( width ? 'width:' + width + 'px;' : '' )">
  <slot></slot>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

component_1.VantComponent({
  relation: {
    name: 'tabs',
    type: 'ancestor'
  },
  props: {
    dot: Boolean,
    info: null,
    title: String,
    disabled: Boolean,
    titleStyle: String
  },
  data: {
    width: null,
    inited: false,
    active: false,
    animated: false
  },
  watch: {
    title: 'update',
    disabled: 'update',
    dot: 'update',
    info: 'update',
    titleStyle: 'update'
  },
  methods: {
    update: function () {
      var parent = this.getRelationNodes('../tabs/index')[0];

      if (parent) {
        parent.updateTabs();
      }
    }
  }
});<style>
@import "./index.css";
</style>
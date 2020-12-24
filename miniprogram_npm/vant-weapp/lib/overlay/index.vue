<template>
<van-transition :show="show" custom-class="van-overlay" :custom-style="'z-index: ' + zIndex + '; ' + ( mask ? 'background-color: rgba(0, 0, 0, .7);' : '' ) + '; ' + customStyle" :duration="duration" @tap="onClick" catch:touchmove="noop"></van-transition>
</template>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

component_1.VantComponent({
  props: {
    show: Boolean,
    mask: Boolean,
    customStyle: String,
    duration: {
      type: [Number, Object],
      value: 300
    },
    zIndex: {
      type: Number,
      value: 1
    }
  },
  methods: {
    onClick: function () {
      this.$emit('click');
    },
    // for prevent touchmove
    noop: function () {}
  }
});<style>
@import "./index.css";
</style>
<template>
<view v-if="inited" :class="'van-transition custom-class ' + classes" :style="'-webkit-transition-duration:' + currentDuration + 'ms; transition-duration:' + currentDuration + 'ms; ' + ( display ? '' : 'display: none;' ) + ' ' + customStyle" @transitionend="onTransitionEnd">
  <slot></slot>
</view>
</template>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

var transition_1 = require("../mixins/transition.js");

component_1.VantComponent({
  classes: ['enter-class', 'enter-active-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class'],
  mixins: [transition_1.transition(true)]
});<style>
@import "./index.css";
</style>
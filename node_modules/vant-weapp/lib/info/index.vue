<template>
<view v-if="info !== null && info !== ''" class="custom-class van-info" :style="customStyle">{{ info }}</view>
</template>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

component_1.VantComponent({
  props: {
    info: null,
    customStyle: String
  }
});<style>
@import "./index.css";
</style>
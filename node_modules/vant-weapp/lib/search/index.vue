<template>
<view :class="utils.bem('search', { withaction: showAction || useActionSlot }) + ' custom-class'" :style="'background: ' + background">
  <view :class="utils.bem('search__content', [shape])">
    <view class="van-search__label" v-if="label">{{ label }}</view>
    <slot v-else name="label"></slot>

    <van-field type="search" left-icon="search" :focus="focus" :error="error" border="false" confirm-type="search" class="van-search__field field-class" :value="value" :disabled="disabled" :readonly="readonly" :clearable="clearable" :maxlength="maxlength" :input-align="inputAlign" input-class="input-class" :placeholder="placeholder" :placeholder-style="placeholderStyle" custom-style="padding: 5px 10px 5px 0; background-color: transparent;" @blur="onBlur" @focus="onFocus" @change="onChange" @confirm="onSearch" @clear="onClear"></van-field>
  </view>

  <view v-if="showAction || useActionSlot" class="van-search__action" hover-class="van-search__action--hover" hover-stay-time="70">
    <slot v-if="useActionSlot" name="action"></slot>
    <view v-else @tap="onCancel" class="cancel-class">取消</view>
  </view>
</view>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

component_1.VantComponent({
  field: true,
  classes: ['field-class', 'input-class', 'cancel-class'],
  props: {
    label: String,
    focus: Boolean,
    error: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    inputAlign: String,
    showAction: Boolean,
    useActionSlot: Boolean,
    placeholder: String,
    placeholderStyle: String,
    background: {
      type: String,
      value: '#ffffff'
    },
    maxlength: {
      type: Number,
      value: -1
    },
    shape: {
      type: String,
      value: 'square'
    },
    clearable: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onChange: function (event) {
      this.set({
        value: event.detail
      });
      this.$emit('change', event.detail);
    },
    onCancel: function () {
      var _this = this;
      /**
       * 修复修改输入框值时，输入框失焦和赋值同时触发，赋值失效
       * // https://github.com/youzan/vant-weapp/issues/1768
       */


      setTimeout(function () {
        _this.set({
          value: ''
        });

        _this.$emit('cancel');

        _this.$emit('change', '');
      }, 200);
    },
    onSearch: function () {
      this.$emit('search', this.data.value);
    },
    onFocus: function () {
      this.$emit('focus');
    },
    onBlur: function () {
      this.$emit('blur');
    },
    onClear: function () {
      this.$emit('clear');
    }
  }
});<style>
@import "./index.css";
</style>
<template>
<view class="van-tree-select" :style="'height: ' + mainHeight + 'px'">
  <scroll-view scroll-y class="van-tree-select__nav">
    <view v-for="(item, index) in items" :key="index" :class="'van-ellipsis main-item-class ' + ( utils.bem('tree-select__nitem', { active: mainActiveIndex === index, disabled: item.disabled }) ) + ' ' + ( mainActiveIndex === index ? 'main-active-class' : '' ) + ' ' + ( item.disabled ? 'main-disabled-class' : '' )" :data-index="index" @tap="onClickNav">
      {{ item.text }}
    </view>
  </scroll-view>
  <scroll-view scroll-y class="van-tree-select__content" :style="'height: ' + itemHeight + 'px'">
    <view v-for="(item, index) in subItems" :key="index" :class="'van-ellipsis van-hairline--bottom content-item-class ' + ( utils.bem('tree-select__item', { active: wxs.isActive(activeId, item.id), disabled: item.disabled }) ) + ' ' + ( wxs.isActive(activeId, item.id) ? 'content-active-class' : '' ) + ' ' + ( item.disabled ? 'content-disabled-class' : '' )" :data-item="item" @tap="onSelectItem">
      {{ item.text }}
      <van-icon v-if="wxs.isActive(activeId, item.id)" name="checked" size="16px" class="van-tree-select__selected"></van-icon>
    </view>
  </scroll-view>
</view>
</template>

<script module="wxs" lang="wxs" src="./index.wxs"></script>
<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var component_1 = require("../common/component.js");

var ITEM_HEIGHT = 44;
component_1.VantComponent({
  classes: ['main-item-class', 'content-item-class', 'main-active-class', 'content-active-class', 'main-disabled-class', 'content-disabled-class'],
  props: {
    items: Array,
    mainActiveIndex: {
      type: Number,
      value: 0
    },
    activeId: {
      type: [Number, String, Array]
    },
    maxHeight: {
      type: Number,
      value: 300
    }
  },
  data: {
    subItems: [],
    mainHeight: 0,
    itemHeight: 0
  },
  watch: {
    items: function () {
      var _this = this;

      this.updateSubItems().then(function () {
        _this.updateMainHeight();
      });
    },
    maxHeight: function () {
      this.updateItemHeight(this.data.subItems);
      this.updateMainHeight();
    },
    mainActiveIndex: 'updateSubItems'
  },
  methods: {
    // 当一个子项被选择时
    onSelectItem: function (event) {
      var item = event.currentTarget.dataset.item;

      if (!item.disabled) {
        this.$emit('click-item', item);
      }
    },
    // 当一个导航被点击时
    onClickNav: function (event) {
      var index = event.currentTarget.dataset.index;
      var item = this.data.items[index];

      if (!item.disabled) {
        this.$emit('click-nav', {
          index: index
        });
      }
    },
    // 更新子项列表
    updateSubItems: function () {
      var _a = this.data,
          items = _a.items,
          mainActiveIndex = _a.mainActiveIndex;
      var _b = (items[mainActiveIndex] || {}).children,
          children = _b === void 0 ? [] : _b;
      this.updateItemHeight(children);
      return this.set({
        subItems: children
      });
    },
    // 更新组件整体高度，根据最大高度和当前组件需要展示的高度来决定
    updateMainHeight: function () {
      var _a = this.data,
          _b = _a.items,
          items = _b === void 0 ? [] : _b,
          _c = _a.subItems,
          subItems = _c === void 0 ? [] : _c;
      var maxHeight = Math.max(items.length * ITEM_HEIGHT, subItems.length * ITEM_HEIGHT);
      this.set({
        mainHeight: Math.min(maxHeight, this.data.maxHeight)
      });
    },
    // 更新子项列表高度，根据可展示的最大高度和当前子项列表的高度决定
    updateItemHeight: function (subItems) {
      var itemHeight = Math.min(subItems.length * ITEM_HEIGHT, this.data.maxHeight);
      return this.set({
        itemHeight: itemHeight
      });
    }
  }
});<style>
@import "./index.css";
</style>
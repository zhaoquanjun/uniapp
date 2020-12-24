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

<script>
import { VantComponent } from '../common/component';
const ITEM_HEIGHT = 44;
import vanIcon from "../icon/index";

export default {
  data() {
    return {
      subItems: [],
      mainHeight: 0,
      itemHeight: 0
    };
  },

  components: {
    vanIcon
  },
  props: {
    items: Array,
    mainActiveIndex: {
      type: Number,
      default: 0
    },
    activeId: {
      type: [Number, String, Array]
    },
    maxHeight: {
      type: Number,
      default: 300
    }
  },
  watch: {
    items() {
      this.updateSubItems().then(() => {
        this.updateMainHeight();
      });
    },

    maxHeight() {
      this.updateItemHeight(this.subItems);
      this.updateMainHeight();
    },

    mainActiveIndex: 'updateSubItems'
  },
  classes: ['main-item-class', 'content-item-class', 'main-active-class', 'content-active-class', 'main-disabled-class', 'content-disabled-class'],
  methods: {
    // 当一个子项被选择时
    onSelectItem(event) {
      const {
        item
      } = event.currentTarget.dataset;

      if (!item.disabled) {
        this.$emit('click-item', item);
      }
    },

    // 当一个导航被点击时
    onClickNav(event) {
      const {
        index
      } = event.currentTarget.dataset;
      const item = this.items[index];

      if (!item.disabled) {
        this.$emit('click-nav', {
          index
        });
      }
    },

    // 更新子项列表
    updateSubItems() {
      const {
        items,
        mainActiveIndex
      } = this;
      const {
        children = []
      } = items[mainActiveIndex] || {};
      this.updateItemHeight(children);
      return this.set({
        subItems: children
      });
    },

    // 更新组件整体高度，根据最大高度和当前组件需要展示的高度来决定
    updateMainHeight() {
      const {
        items = [],
        subItems = []
      } = this;
      const maxHeight = Math.max(items.length * ITEM_HEIGHT, subItems.length * ITEM_HEIGHT);
      this.set({
        mainHeight: Math.min(maxHeight, this.maxHeight)
      });
    },

    // 更新子项列表高度，根据可展示的最大高度和当前子项列表的高度决定
    updateItemHeight(subItems) {
      const itemHeight = Math.min(subItems.length * ITEM_HEIGHT, this.maxHeight);
      return this.set({
        itemHeight
      });
    }

  }
};
</script>
<style>
@import "./index.css";
</style>
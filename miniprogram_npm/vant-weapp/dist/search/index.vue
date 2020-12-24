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

<script>
import { VantComponent } from '../common/component';
import vanField from "../field/index";

export default {
  data() {
    return {};
  },

  components: {
    vanField
  },
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
      default: '#ffffff'
    },
    maxlength: {
      type: Number,
      default: -1
    },
    shape: {
      type: String,
      default: 'square'
    },
    clearable: {
      type: Boolean,
      default: true
    }
  },
  field: true,
  classes: ['field-class', 'input-class', 'cancel-class'],
  methods: {
    onChange(event) {
      this.set({
        value: event.detail
      });
      this.$emit('change', event.detail);
    },

    onCancel() {
      /**
       * 修复修改输入框值时，输入框失焦和赋值同时触发，赋值失效
       * // https://github.com/youzan/vant-weapp/issues/1768
       */
      setTimeout(() => {
        this.set({
          value: ''
        });
        this.$emit('cancel');
        this.$emit('change', '');
      }, 200);
    },

    onSearch() {
      this.$emit('search', this.value);
    },

    onFocus() {
      this.$emit('focus');
    },

    onBlur() {
      this.$emit('blur');
    },

    onClear() {
      this.$emit('clear');
    }

  }
};
</script>
<style>
@import "./index.css";
</style>
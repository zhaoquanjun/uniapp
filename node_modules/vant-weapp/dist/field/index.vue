<template>
<van-cell :icon="leftIcon" :title="label" :center="center" :border="border" :is-link="isLink" :required="required" :custom-style="customStyle" :title-width="titleWidth" custom-class="van-field" :size="size">
  <slot name="left-icon" slot="icon"></slot>
  <slot name="label" slot="title"></slot>
  <view :class="utils.bem('field__body', [type, system])">
    <textarea v-if="type === 'textarea'" :class="'input-class ' + utils.bem('field__input', [inputAlign, type, { disabled, error }])" :fixed="fixed" :focus="focus" :value="value" :disabled="disabled || readonly" :maxlength="maxlength" :placeholder="placeholder" :placeholder-style="placeholderStyle" :placeholder-class="utils.bem('field__placeholder', { error })" :auto-height="autosize" :cursor-spacing="cursorSpacing" :adjust-position="adjustPosition" :show-confirm-bar="showConfirmBar" :selection-end="selectionEnd" :selection-start="selectionStart" @input="onInput" @blur="onBlur" @focus="onFocus" @confirm="onConfirm">
    </textarea>
    <input v-else :class="'input-class ' + utils.bem('field__input', [inputAlign, { disabled, error }])" :type="type" :focus="focus" :value="value" :disabled="disabled || readonly" :maxlength="maxlength" :placeholder="placeholder" :placeholder-style="placeholderStyle" :placeholder-class="utils.bem('field__placeholder', { error })" :confirm-type="confirmType" :confirm-hold="confirmHold" :cursor-spacing="cursorSpacing" :adjust-position="adjustPosition" :selection-end="selectionEnd" :selection-start="selectionStart" :password="password || type === 'password'" @input="onInput" @blur="onBlur" @focus="onFocus" @confirm="onConfirm"></input>
    <van-icon v-if="clearable && focused && value && !readonly" size="16px" name="clear" class="van-field__clear-root van-field__icon-root" @touchstart="onClear"></van-icon>
    <view class="van-field__icon-container" @tap="onClickIcon">
      <van-icon v-if="rightIcon || icon" size="16px" :name="rightIcon || icon" :class="'van-field__icon-root ' + iconClass" custom-class="right-icon-class"></van-icon>
      <slot name="right-icon"></slot>
      <slot name="icon"></slot>
    </view>
    <view class="van-field__button">
      <slot name="button"></slot>
    </view>
  </view>
  <view v-if="errorMessage" :class="'van-field__error-message ' + utils.bem('field__error', [errorMessageAlign, { disabled, error }])">
    {{ errorMessage }}
  </view>
</van-cell>
</template>

<script module="utils" lang="wxs" src="../wxs/utils.wxs"></script>

<script>
import { VantComponent } from '../common/component';
import { getSystemInfoSync } from '../common/utils';
import vanCell from "../cell/index";
import vanIcon from "../icon/index";

export default {
  data() {
    return {
      focused: false,
      system: getSystemInfoSync().system.split(' ').shift().toLowerCase()
    };
  },

  components: {
    vanCell,
    vanIcon
  },
  props: {
    size: String,
    icon: String,
    label: String,
    error: Boolean,
    fixed: Boolean,
    focus: Boolean,
    center: Boolean,
    isLink: Boolean,
    leftIcon: String,
    rightIcon: String,
    disabled: Boolean,
    autosize: Boolean,
    readonly: Boolean,
    required: Boolean,
    password: Boolean,
    iconClass: String,
    clearable: Boolean,
    inputAlign: String,
    customStyle: String,
    confirmType: String,
    confirmHold: Boolean,
    errorMessage: String,
    placeholder: String,
    placeholderStyle: String,
    errorMessageAlign: String,
    selectionEnd: {
      type: Number,
      default: -1
    },
    selectionStart: {
      type: Number,
      default: -1
    },
    showConfirmBar: {
      type: Boolean,
      default: true
    },
    adjustPosition: {
      type: Boolean,
      default: true
    },
    cursorSpacing: {
      type: Number,
      default: 50
    },
    maxlength: {
      type: Number,
      default: -1
    },
    type: {
      type: String,
      default: 'text'
    },
    border: {
      type: Boolean,
      default: true
    },
    titleWidth: {
      type: String,
      default: '90px'
    }
  },
  field: true,
  classes: ['input-class', 'right-icon-class'],
  methods: {
    onInput(event) {
      const {
        value = ''
      } = event.detail || {};
      this.set({
        value
      }, () => {
        this.emitChange(value);
      });
    },

    onFocus(event) {
      this.set({
        focused: true
      });
      this.$emit('focus', event.detail);
    },

    onBlur(event) {
      this.set({
        focused: false
      });
      this.$emit('blur', event.detail);
    },

    onClickIcon() {
      this.$emit('click-icon');
    },

    onClear() {
      this.set({
        value: ''
      }, () => {
        this.emitChange('');
        this.$emit('clear', '');
      });
    },

    onConfirm() {
      this.$emit('confirm', this.value);
    },

    emitChange(value) {
      this.$emit('input', value);
      this.$emit('change', value);
    }

  }
};
</script>
<style>
@import "./index.css";
</style>
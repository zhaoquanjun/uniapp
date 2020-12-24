<template>
<view v-if="info !== null && info !== ''" class="custom-class van-info" :style="customStyle">{{ info }}</view>
</template>

<script>
import { VantComponent } from '../common/component';

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    info: null,
    customStyle: String
  },
  methods: {}
};
</script>
<style>
@import "./index.css";
</style>
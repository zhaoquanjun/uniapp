let cache = null;
function getSafeArea() {
  return new Promise((resolve, reject) => {
    if (cache != null) {
      resolve(cache);
    } else {
      uni.getSystemInfo({
        success: ({
          model,
          statusBarHeight
        }) => {
          const deviceType = model.replace(/\s/g, '-');
          const iphoneNew = /iphone-x|iPhone11|iPhone12/i.test(deviceType);
          cache = {
            isIPhoneX: iphoneNew,
            statusBarHeight
          };
          resolve(cache);
        },
        fail: reject
      });
    }
  });
}

module.exports = {
  data() {
    return {};
  },

  props: {
    safeAreaInsetTop: {
      type: Boolean,
      default: safeAreaInsetTop
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: safeAreaInsetBottom
    }
  },
  safeAreaInsetBottom = true,
  safeAreaInsetTop = false,

  created() {
    getSafeArea().then(({
      isIPhoneX,
      statusBarHeight
    }) => {
      this.set({
        isIPhoneX,
        statusBarHeight
      });
    });
  },

  methods: {}
};
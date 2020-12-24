//不同环境的host
const env = {
  // dev env
  devHost: "https://dev.shanqian.cn/anshouyin",
  // test env
  testHost: "https://testshouyiner.alphalawyer.cn/anshouyin",
  // production env
  prodHost: "https://shanqian.cn/anshouyin"
};

const prefix = 'dev'; // current env

export const host = env[prefix + 'Host'];

function sendRequest(options) {
  const app = getApp();
  var userToken = app.globalData.getUserToken();
  let {
    contentType,
    url,
    params,
    methods,
    success,
    fail,
    complete,
    header
  } = options;
  let reqHeader = null;

  if (header) {
    reqHeader = header;
  } else {
    const company_id = uni.getStorageSync('currentUser').companyId;
    reqHeader = {
      "token": userToken,
      "Content-Type": contentType,
      "wx_app_type": 1
    };

    if (company_id) {
      reqHeader.company_id = company_id;
    }
  }

  uni.request({
    url: url,
    header: reqHeader,
    data: params,
    method: methods,
    success: function (e) {
      if (e.statusCode === 401) {
        var tokenValid = e.header.tokenValid; // var currentroute = getCurrentPages()[getCurrentPages().length-1].route

        if (tokenValid == "member_identity_update_admin") {
          showModelToHome('提示', '您已成为企业管理员');
        } else if (tokenValid == "member_identity_update_member") {
          showModelToHome('提示', '您的身份已变更为企业成员');
        } else if (tokenValid == "member_identity_update_default") {
          showModelToHome('提示', '您已被管理员从企业移除');
        } else if (tokenValid == "auth_update") {
          showModelToHome('提示', '您的用户认证已变更');
        } else {
          //token验证失败
          if (app.globalData.isLoginIn() && !app.globalData.hasShowOverdueModal) {
            app.globalData.hasShowOverdueModal = true;
            uni.showModal({
              title: '提示',
              content: '您的登陆状态已失效，请重新登陆',
              showCancel: false,
              confirmText: '好的',
              success: function () {
                app.globalData.hasShowOverdueModal = false;
                app.globalData.quitLogin();
              }
            });
          }
        }

        return;
      }

      if (e.statusCode === 403 && app.globalData.isLoginIn) {
        uni.hideLoading();
        var company_id = uni.getStorageSync('currentUser').companyId;

        if (company_id == undefined) {
          uni.showModal({
            title: '立即进行个人实名认证',
            content: '实名认证后可享受加便捷高效的电子合同服务',
            showCancel: true,
            cancelText: '暂不认证',
            confirmText: '立即认证',
            success: function (res) {
              if (res.cancel) {
                const pages = getCurrentPages();

                if (pages.length > 1) {
                  uni.navigateBack();
                }

                uni.hideLoading({});
              } else {
                uni.redirectTo({
                  url: "/pages/authentication/personal/personal-auth-type/index"
                });
              }
            }
          });
        } else {
          uni.showModal({
            title: '立即进行企业实名认证',
            content: '实名认证后可享受加便捷高效的电子合同服务',
            showCancel: true,
            cancelText: '暂不认证',
            confirmText: '立即认证',
            success: function (res) {
              if (res.cancel) {
                const pages = getCurrentPages();

                if (pages.length > 1) {
                  uni.navigateBack();
                }

                uni.hideLoading({});
              } else {
                uni.redirectTo({
                  url: "/pages/authentication/company/company-auth-type/index"
                });
              }
            }
          });
        }

        return;
      }

      uni.stopPullDownRefresh();
      var data = e.data;

      if (data.isSuccess == false) {
        console.log(e);

        if (fail) {
          fail(data.resultMsg);
        }
      } else {
        var resultData = data.data;

        if (success) {
          success(resultData);
        }
      }
    },
    fail: function (e) {
      uni.hideLoading({});
      uni.stopPullDownRefresh();
      console.log('请求异常:' + e);
      uni.showModal({
        title: '提示',
        content: e,
        showCancel: false,
        confirmText: '好的',
        success: function () {
          app.globalData.quitLogin();
        }
      });

      if (fail) {
        fail(e);
      }
    },
    complete: () => {
      typeof complete == 'function' && complete();
    }
  });
}

function showModelToHome(title, content) {
  uni.showModal({
    title: title,
    content: content,
    showCancel: false,
    confirmText: '好的',
    success: function () {
      const app = getApp();
      app.globalData.updateUserInfo(function () {
        uni.reLaunch({
          url: '/pages/pm/pmHome'
        });
      });
    }
  });
}

const getContentType = "application/x-www-form-urlencoded";
const postContentType = "application/json";
const formCotnentType = "multipart/form-data;boundary=XXX";

function sendGet({
  url,
  params,
  success,
  fail,
  complete,
  header
}) {
  sendRequest({
    contentType: getContentType,
    url,
    params,
    methods: "GET",
    success,
    fail,
    complete,
    header
  });
}

function sendPut({
  url,
  params,
  success,
  fail,
	complete,
  header
}) {
  sendRequest({
    contentType: getContentType,
    url,
    params,
    methods: 'PUT',
    success,
    fail,
    complete,
    header
  });
}

function sendPost({
  url,
  params,
  success,
  fail,
	complete,
  header
}) {
  sendRequest({
    contentType: getContentType,
    url,
    params,
    methods: 'POST',
    success,
    fail,
    complete,
    header
  });
}

function sendDelete({
  url,
  params,
  success,
  fail,
	complete,
  header
}) {
  sendRequest({
    contentType: getContentType,
    url,
    params,
    methods: 'DELETE',
    success,
    fail,
    complete,
    header
  });
}

function sendPostBody({
  url,
  params,
  success,
  fail,
	complete,
  header
}) {
  sendRequest({
    contentType: postContentType,
    url,
    params,
    methods: "POST",
    success,
    fail,
    complete,
    header
  });
}

function sendFormData({
  url,
  params,
  success,
  fail,
	complete,
  header
}) {
  sendRequest({
    formCotnentType,
    url,
    params,
    methods: "POST",
    success,
    fail,
    header
  });
} //uploadFile


function uploadFile({
  url,
  filePath,
  key,
  formData,
  success,
	complete,
  fail
}) {
  const app = getApp();
  const userToken = app.globalData.userToken;
  let company_id = uni.getStorageSync('currentUser').companyId;

  if (company_id == undefined) {
    company_id = '';
  }

  uni.showLoading({
    title: '上传中'
  });
  var header = {
    "token": userToken,
    "Content-Type": "multipart/form-data",
    "wx_app_type": 1
  };

  if (company_id) {
    header["company_id"] = company_id;
  }

  uni.uploadFile({
    url: url,
    header: header,
    filePath: filePath,
    name: key,
    formData: formData,
    success: function (e) {
      uni.stopPullDownRefresh();

      if (e.statusCode === 401) {
        var tokenValid = e.header.tokenValid; // var currentroute = getCurrentPages()[getCurrentPages().length-1].route

        if (tokenValid == "member_identity_update_admin") {
          showModelToHome('提示', '您已成为企业管理员');
        } else if (tokenValid == "member_identity_update_member") {
          showModelToHome('提示', '您的身份已变更为企业成员');
        } else if (tokenValid == "member_identity_update_default") {
          showModelToHome('提示', '您已被管理员从企业移除');
        } else if (tokenValid == "auth_update") {
          showModelToHome('提示', '您的用户认证已变更');
        } else {
          //token验证失败
          if (app.globalData.isLoginIn() && !app.globalData.hasShowOverdueModal) {
            app.globalData.hasShowOverdueModal = true;
            uni.showModal({
              title: '提示',
              content: '您的登陆状态已失效，请重新登陆',
              showCancel: false,
              confirmText: '好的',
              success: function () {
                app.globalData.hasShowOverdueModal = false;
                app.globalData.quitLogin();
              }
            });
          }
        }

        return;
      }

      if (e.statusCode === 403) {
        var company_id = uni.getStorageSync('currentUser').companyId;

        if (company_id == undefined) {
          uni.showModal({
            title: '立即进行个人实名认证',
            content: '实名认证后可享受加便捷高效的电子合同服务',
            showCancel: true,
            cancelText: '暂不认证',
            confirmText: '立即认证',
            success: function (res) {
              if (res.cancel) {
                const pages = getCurrentPages();

                if (pages.length > 1) {
                  uni.navigateBack();
                }

                uni.hideLoading({});
              } else {
                uni.redirectTo({
                  url: "/pages/authentication/personal/personal-auth-type/index"
                });
              }
            }
          });
        } else {
          uni.showModal({
            title: '立即进行企业实名认证',
            content: '实名认证后可享受加便捷高效的电子合同服务',
            showCancel: true,
            cancelText: '暂不认证',
            confirmText: '立即认证',
            success: function (res) {
              if (res.cancel) {
                const pages = getCurrentPages();

                if (pages.length > 1) {
                  uni.navigateBack();
                }

                uni.hideLoading({});
              } else {
                uni.redirectTo({
                  url: "/pages/authentication/company/company-auth-type/index"
                });
              }
            }
          });
        }

        return;
      }

      if (e.data) {
        var data = JSON.parse(e.data);

        if (data.isSuccess == false) {
          fail(data.resultMsg);
        } else {
          var resultData = data.data;
          success(resultData);
        }
      } else {
        success(resultData);
      }
    },
    fail: function (e) {
      uni.stopPullDownRefresh();
      fail("数据请求失败");
    }
  });
}

export const get = sendGet;
export const post = sendPost;
export const put = sendPut;
export const _delete = sendDelete;
export const postBody = sendPostBody;
export const formData = sendFormData;
export const upload = uploadFile; //band

module.exports.sendGet = sendGet;
module.exports.sendPost = sendPost;
module.exports.sendPut = sendPut;
module.exports.sendDelete = sendDelete;
module.exports.uploadFile = uploadFile;
module.exports.sendPostBody = sendPostBody;
module.exports.sendFormData = sendFormData;
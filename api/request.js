//不同环境的host
const env = {
  // dev env
  devHost: "https://dev.shanqian.cn/anshouyin",
  // test env
  testHost: "https://testshouyiner.alphalawyer.cn/anshouyin",
  // production env
  prodHost: "https://shanqian.cn/anshouyin"
};
const prefix = 'prod'; // current env

var host = env[prefix + 'Host'];
module.exports.host = host; // 发票部分 start

module.exports.get_invoice_data = host + '/v1/invoice/findInvoiceList'; // 获取发票申请数据

module.exports.get_pay_info = host + '/v2/contract/findPayInfoBySubjectId'; // 获取支付信息

module.exports.apply_invoice = host + '/v1/invoice/applyInvoice'; // 申请开票

module.exports.get_seller_companyName = host + '/v2/contract/findSponsor'; // 获取开票方

module.exports.get_invouce_info = host + '/v1/invoice/findInvoiceTitle'; // 获取发票信息

module.exports.get_pay_detail = host + '/v1/pay/info/payDetail'; // 获取发票信息
// 发票部分 end
//支付模版部分 start

module.exports.get_pay_template_list = host + '/v1/pay/template/list'; // 支付模版列表
//支付模版部分 end
// template start

module.exports.get_template_detail = host + '/v1/contract/template/detail'; // 获取模版详情

module.exports.get_templateList = host + '/v1/contract/template/templateList'; //获取合同列表
// template end
// 费用管理

module.exports.get_accout_info = host + '/v1/account/getCurrentUserOrCompanyInfo'; // 获取信息（余额 礼品卡）

module.exports.get_balance_list = host + '/v1/expense/consumptionDetailsList'; // 收入支出明细

module.exports.get_card_list = host + '/v1/expense/couponList'; // 卡片列表

module.exports.get_company_auth_status = host + '/v1/account/company/getOneAuthCompanyByName'; // 查询企业认证状态

module.exports.get_personal_auth_status = host + '/v1/account/user/getAuthUserInfoByNameAndPhone'; // 查询个人/经办人认证状态

module.exports.send_by_buy = host + '/v1/expense/batchTransfer'; // 礼品卡购买之后赠送

module.exports.send_card_directive = host + '/v1/expense/transfer'; // 礼品卡直接赠送

module.exports.buy_card_by_account = host + '/v1/pay/account/pay'; // 账户余额购买

module.exports.get_wx_pay_params = host + '/v1/pay/create/order'; // 获取微信支付参数

module.exports.share_card = host + '/v1/expense/shareGiftCard'; // 获取分享礼品卡orderid

module.exports.cancel_hare_card = host + '/v1/expense/cancelShareGiftCard/'; // 获取分享礼品卡orderid

module.exports.get_gift_card_from_wx = host + '/v1/expense/receiveShareGiftCard/'; // 领取礼品卡

module.exports.get_gift_card_status = host + '/v1/expense/transferGiftCardTimeout/'; // 获取礼品卡状态

module.exports.get_gift_card_yzm = host + '/v1/sms/common/'; // 领取礼品卡验证码

module.exports.pc_login = host + '/v1/account/login'; // pc版登录
//account

module.exports.get_user_info = host + "/v1/account/user/info";
module.exports.company_message = host + "/v1/account/company/getOneAuthCompanyByName";
module.exports.person_message = host + "/v1/account/user/getAuthUserByNameAndPhone";
module.exports.login_url = host + "/v1/account/login/wxapp";
module.exports.decode_phone = host + "/v1/account/decode/wxapp/phone";
module.exports.update_usericon = host + "/v1/account/update/icon";
module.exports.login_scan = host + "/v1/account/login/scan";
module.exports.upload_local = host + "/v1/account/update/local";
module.exports.apply_auth = host + "/v1/account/apply/auth";
module.exports.is_exist_apply = host + "/v1/account/apply/exist";
module.exports.double_identity_status = host + "/v1/account/double/identity/status";
module.exports.get_face_code = host + "/v1/account/face/code";
module.exports.face_auth = host + "/v1/account/auth/face";
module.exports.get_phone_wx_code = host + "/v1/account/get/phone";
module.exports.delete_apply_auth = host + "/v1/account/delete/apply/auth";
module.exports.create_seal = host + "/v1/pass/uploadImgByBase64String"; // 生成印章

module.exports.upload_person_seal = host + "/v1/file/savePersonalSeal"; // 保存个人印章

module.exports.upload_company_seal = host + "/v1/file/saveCompanySeal"; // 保存个人印章
//newcontract

module.exports.get_contract_list = host + "/v2/contract/list";
module.exports.get_contract_info = host + "/v2/contract/detail";
module.exports.get_contract_launch = host + "/v2/contract/launch";
module.exports.confirm_contract_launch_by_template = host + "/v1/contract/template/launch"; // contract list

module.exports.get_all_contract_list = host + "/v2/contract/count"; //contract

module.exports.launch_contract_draft_url = host + "/v1/contract/launch/draft";
module.exports.revocation_contract_url = host + "/v1/contract/revocation";
module.exports.get_contract_draft = host + "/v1/contract/draft/list";
module.exports.delete_draft = host + "/v1/contract/delete/draft";
module.exports.get_contract_verify_result = host + "/v1/contract/verify/path";
module.exports.get_contract_share_link = host + "/v1/contract/get/linker";
module.exports.get_affirm_contract_list = host + "/v1/contract/affirm/list";
module.exports.get_contract_detail = host + "/v2/contract/detail"; //file

module.exports.company_painted_list = host + "/v1/file/getEnterpriseSealList";
module.exports.person_painted_list = host + "/v1/file/getPersonalSealList";
module.exports.delete_painted_url = host + "/v1/file/handleSignImageStatus";
module.exports.dowmload_contract_url = host + "/v1/file/contract/download";
module.exports.create_company_cachet_url = host + "/v1/file/create/cachet";
module.exports.set_default_painted_url = host + "/v1/file/painted/default";
module.exports.delete_template_file_url = host + "/v1/file/template/delete";
module.exports.download_template_file_url = host + "/v1/file/template/download";
module.exports.get_template_file_list_url = host + "/v1/file/template/list";
module.exports.upload_painted_wx_url = host + "/v1/pass/uploadFile";
module.exports.get_default_stamp = host + "/v1/file/stamp/default";
module.exports.upload_general_file = host + "/v1/file/general/upload";
module.exports.dowmload_evidence_file_url = host + "/v1/file/evidence/file/download";
module.exports.save_personnal_seal = host + "/v1/file/savePersonalSeal";
module.exports.set_default_seal = host + "/v1/file/painted/default"; // 设置为默认印章
//sign

module.exports.add_sign_url = host + "/v1/sign/add"; //

module.exports.refuse_sign_url = host + "/v1/sign/refuse"; // 拒绝签署

module.exports.judge_new_sign = host + "/v1/sign/judge/sign"; // 查看是否有新的签署

module.exports.sign_contract = host + '/v1/sign/signFile/'; // 签署合同 {subjectId} => 合同id
//sms

module.exports.get_register_sms_code_url = host + "/v1/sms";
module.exports.get_sign_sms_code_url = host + "/v1/sms/sign"; //evidence

module.exports.get_evidence_affirm_count = host + "/v1/evidence/affirm/count";
module.exports.get_evidence_count = host + "/v1/evidence/count";
module.exports.get_evidence_china = host + "/v1/evidence/list";
module.exports.evidence_upload_text_url = host + "/v1/evidence/upload/txt"; //上传文本证据

module.exports.evidence_upload_media_url = host + "/v1/evidence/upload/media"; //上传媒体证据

module.exports.evidence_upload_media_file_url = host + "/v1/evidence/upload/media/file";
module.exports.get_evidence_info = host + "/v1/evidence/info";
module.exports.affirm_evidence = host + "/v1/evidence/affirm";
module.exports.tsa_add_is_finish = host + "/v1/evidence/tsa/finish";
module.exports.get_evidence_tsa_list = host + "/v1/evidence/tsa/list"; //message

module.exports.get_unread_message_count = host + "/v1/message/unread/count";
module.exports.get_unread_contract_list = host + "/v1/message/unread/contract/list"; //未读合同消息列表
//合同相关支付 - 独立收款

module.exports.get_pay_QrCode = host + "/v1/pay/info/createQrCodePost"; //合同相关支付 - 销售即开票 - 收款

module.exports.get_sell_pay_QrCode = host + "/v1/pay/template/use"; // evidence_manage

module.exports.certificate_record_list = host + "/v1/blockchain/certificateRecord/list"; // 出证记录列表(数据和签署)

module.exports.sign_certificate_add = host + "/v1/blockchain/signCertificate/add"; //合同文件出证

module.exports.get_certificate_address = host + "/v1/blockchain/cert/download"; // 出证下载

module.exports.add_certificate_file = host + "/v1/blockchain/dataStorage/add"; // 数据存证出证-文件类型

module.exports.evidence_detail = host + "/v1/blockchain/certificateRecord/detail"; // 获取数据存证详情
// get policy

module.exports.get_upload_policy = host + "/v1/common/oss/policy"; // 获取 oss policy
// 新的认证接口
//通过人脸识别进行身份认证

module.exports.authFace = host + "/v1/account/auth/face"; //通过手机号进行实名认证(只小程序用)

module.exports.authPhone = host + "/v1/account/auth/phone"; //个人实名认证

module.exports.applyAuth = host + "/v1/account/apply/auth"; //发送短信验证码

module.exports.smsSend = host + "/v1/sms/"; // 上传营业执照

module.exports.businessLicenseUpload = host + "/v1/account/apply/auth/businessLicense"; //企业认证：创建企业

module.exports.createCompany = host + "/v1/account/create/company"; // 企业法人直接认证

module.exports.companyAuth = host + "/v1/account/apply/auth/company"; // 经办人认证

module.exports.companyHandle = host + "/v1/account/apply/auth/company/handle"; //企业认证：企业申请列表

module.exports.companyList = host + "/v1/account/apply/auth/company/list"; // 获取签署方列表 -- get

module.exports.get_signal_sign_person_list = host + "/v1/contacts/findContacts";
/**
 * 数据链相关
 */
// 添加数据链到合同

module.exports.saveChainToContract = host + "/v1/contractEvidence/saveContractEvidence";
module.exports.getChainsList = host + "/v1/contractEvidence/findContractEvidence"; // 合同存证预览

module.exports.previewChainImg = host + "/v1/blockchain/contractCert/preview/"; // 未关联的证据链列表

module.exports.findNoRelatedContractEvidence = host + "/v1/contractEvidence/findNoRelatedContractEvidence"; // 添加证据链关联（合同关联证据）

module.exports.saveContractEvidenceRel = host + "/v1/contractEvidence/saveContractEvidenceRel"; // 未关联的合同列表

module.exports.findNoRelatedContractSubject = host + "/v1/contractEvidence/findNoRelatedContractSubject"; // 添加证据链关联(证据关联合同)

module.exports.saveEvidenceContractRel = host + "/v1/contractEvidence/saveEvidenceContractRel"; // 取消关联

module.exports.deleteContractEvidenceRel = host + "/v1/contractEvidence/deleteContractEvidenceRel"; // 获取证据关联的合同列表

module.exports.findContractSubject = host + "/v1/contractEvidence/findContractSubject";

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

function complete() {
  uni.hideLoading({});
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
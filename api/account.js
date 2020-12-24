import { host } from "./request";
export const get_phone_wx_code = host + "/v1/account/get/phone"; // 获取用户注册信息以及手机号openid uniid 等信息

export const decode_phone = host + "/v1/account/decode/wxapp/phone"; // 获取手机以及微信信息
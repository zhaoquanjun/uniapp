import { host } from "./request";
export const get_user_info = host + "/v1/account/user/info"; // 获取用户信息

export const companyList = host + "/v1/account/apply/auth/company/list"; // 企业列表

export const get_contract_uploadFile = host + "/v2/contract/uploadFile"; // 上传合同文件

export const update_count = host + "/v1/account/getCurrentUserOrCompanyInfo"; // 更新与自己相关合同数量信息
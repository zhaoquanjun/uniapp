import { host } from "./request";

export const certificate_record_list = host + "/v1/blockchain/certificateRecord/list"; // 出证记录列表(数据和签署)

export const get_upload_policy = host + "/v1/common/oss/policy"; // 获取 oss policy

export const add_certificate_file = host + "/v1/blockchain/dataStorage/add"; // 数据存证出证-文件类型

export const saveChainToContract = host + "/v1/contractEvidence/saveContractEvidence"; // 保存证据链关联合同

export const evidence_detail = host + "/v1/blockchain/certificateRecord/detail"; // 获取数据存证详情

export const get_certificate_address = host + "/v1/blockchain/cert/download"; // 出证下载地址

export const findContractSubject = host + "/v1/contractEvidence/findContractSubject"; // 获取合同关联列表
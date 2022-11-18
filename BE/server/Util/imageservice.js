"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const DBConfig = __importStar(require("../config/db"));
const s3 = new aws_sdk_1.default.S3({
    accessKeyId: DBConfig.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: DBConfig.AWS_S3_SECRET_ACCESS_KEY,
});
async function upload(imageName, base64Image, type) {
    const signedUrlExpireSeconds = 30 * 24 * 60 * 60 * 1;
    const params = {
        Bucket: `${DBConfig.BUCKET_NAME}/images`,
        Key: imageName,
        Body: Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
        Type: type
    };
    let data;
    try {
        data = await promiseUpload(params);
    }
    catch (err) {
        console.error(err);
        return "";
    }
    const url = s3.getSignedUrl('getObject', {
        Bucket: `${DBConfig.BUCKET_NAME}/images`,
        Key: imageName,
        Expires: signedUrlExpireSeconds
    });
    return url;
}
function promiseUpload(params) {
    return new Promise(function (resolve, reject) {
        console.log(params);
        s3.upload(params, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
exports.default = upload;
//# sourceMappingURL=imageservice.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImage = void 0;
const imageservice_1 = __importDefault(require("../Util/imageservice"));
async function UploadImage(req, res, next) {
    const base64Image = req.body.image;
    const imageName = req.body.imageName;
    const type = req.body.type;
    let response;
    try {
        response = await (0, imageservice_1.default)(imageName, base64Image, type);
    }
    catch (err) {
        console.error(`Error uploading image: ${err.message}`);
        return next(new Error(`Error uploading image: ${imageName}`));
    }
    res.send({ link: response });
}
exports.UploadImage = UploadImage;
//# sourceMappingURL=image.js.map
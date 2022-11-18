"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const VehicleSchema = new Schema({
    VehicleType: String,
    BrandName: String,
    Model: String,
    Year: Number,
    Description: String,
    Image: String,
    Status: Number,
    RentPrice: Number,
    MemberMemberID: String,
    Created: {
        type: Date,
        default: Date.now()
    },
    Updated: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: "vehicle"
});
const Model = mongoose_1.default.model("Vehicle", VehicleSchema);
exports.default = Model;
//# sourceMappingURL=vehicle.js.map
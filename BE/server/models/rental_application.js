"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ApplicationSchema = new Schema({
    StartDate: {
        Date,
        default: Date.now()
    },
    EndDate: {
        Date,
        default: Date.now()
    },
    Status: Number,
    Price: Number,
    Tax: Number,
    TotalPrice: Number,
    RentalPeriod: Number,
    SpecialReq: String,
    MemberMemberID: String,
    VehicleVehicleID: String,
    Created: {
        type: Date,
        default: Date.now()
    },
    Updated: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: "application"
});
const Model = mongoose_1.default.model("Application", ApplicationSchema);
exports.default = Model;
//# sourceMappingURL=rental_application.js.map
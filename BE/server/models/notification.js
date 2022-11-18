"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const NotificationSchema = new Schema({
    Message: String,
    Status: String,
    RentalApplicationRentalID: String,
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
    collection: "notification"
});
const Model = mongoose_1.default.model("Notification", NotificationSchema);
exports.default = Model;
//# sourceMappingURL=notification.js.map
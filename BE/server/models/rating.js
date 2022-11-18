"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const RatingSchema = new Schema({
    Rating: Number,
    RatedFrom: String,
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
    collection: "rating"
});
const Model = mongoose_1.default.model("Rating", RatingSchema);
exports.default = Model;
//# sourceMappingURL=rating.js.map
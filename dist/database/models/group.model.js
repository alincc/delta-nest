"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const group_interface_1 = require("../../interfaces/group.interface");
exports.GroupSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    avatarUrl: { type: String, default: null },
    description: { type: String, default: null },
    members: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "user" }],
    school: { type: mongoose_1.Schema.Types.ObjectId, ref: "school" },
    createdAt: { type: Number, default: Date.now() },
    updatedAt: { type: Number, default: Date.now() }
});
exports.GroupSchema.pre("remove", function (next) {
    let document = this;
    return mongoose_1.model("school")
        .updateMany({ groups: mongoose_1.Types.ObjectId(document._id) }, {
        $pull: {
            groups: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return mongoose_1.model("user").updateMany({ group: mongoose_1.Types.ObjectId(document._id) }, {
            group: null
        });
    })
        .then(() => {
        return next();
    });
});
exports.GroupSchema.post("findOneAndUpdate", function (document, next) {
    let operation = Object.keys(this._update)[0];
    let property = Object.keys(this._update[operation])[0];
    return mongoose_1.model("user")
        .findByIdAndUpdate(this._update[operation][property], {
        [operation == "$push" ? "$set" : "$unset"]: {
            group: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return next();
    });
});
exports.GroupSchema.post("save", function (document, next) {
    return mongoose_1.model("school")
        .findByIdAndUpdate(document.school, {
        $push: {
            groups: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return next();
    });
});
//# sourceMappingURL=group.model.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const program_interface_1 = require("../../interfaces/program.interface");
exports.ProgramSchema = new mongoose_1.Schema({
    folio: {
        type: String,
        unique: [true, "folio must be unique"],
        required: [true, "folio is requiered"]
    },
    name: { type: String, default: null },
    description: { type: String, default: null },
    inscription: { type: Number, default: 0 },
    monthlyRate: { type: Number, default: 0 },
    email: { type: String, default: null },
    startDate: { type: Number, default: Date.now() },
    endDate: { type: Number, default: Date.now() },
    avatarUrl: { type: String, default: null },
    subjects: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "subject" }],
    school: { type: mongoose_1.Schema.Types.ObjectId, ref: "school" },
    createdAt: { type: Number, default: Date.now() },
    updatedAt: { type: Number, default: Date.now() }
});
exports.ProgramSchema.pre("remove", function (next) {
    let document = this;
    return mongoose_1.model("school")
        .updateMany({ programs: mongoose_1.Types.ObjectId(document._id) }, {
        $pull: {
            programs: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return mongoose_1.model("subject").updateMany({ programs: mongoose_1.Types.ObjectId(document._id) }, {
            $pull: {
                programs: mongoose_1.Types.ObjectId(document._id)
            }
        });
    })
        .then(() => {
        return next();
    });
});
exports.ProgramSchema.post("findOneAndUpdate", function (document, next) {
    let operation = Object.keys(this._update)[0];
    let property = Object.keys(this._update[operation])[0];
    return mongoose_1.model("subject")
        .findByIdAndUpdate(this._update[operation][property], {
        [operation]: {
            programs: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return next();
    });
});
exports.ProgramSchema.post("save", function (document, next) {
    return mongoose_1.model("school")
        .findByIdAndUpdate(document.school, {
        $push: {
            programs: document._id
        }
    })
        .then(() => {
        return next();
    });
});
//# sourceMappingURL=program.model.js.map
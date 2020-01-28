"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const subject_iterface_1 = require("../../interfaces/subject.iterface");
const grade_interface_1 = require("../../interfaces/grade.interface");
exports.SubjectSchema = new mongoose_1.Schema({
    folio: {
        type: String,
        unique: [true, "folio must be unique"],
        required: [true, "folio is requiered"]
    },
    name: { type: String, default: null },
    description: { type: String, default: null },
    avatarUrl: { type: String, default: null },
    email: { type: String, default: null },
    grades: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "grade" }],
    school: { type: mongoose_1.Schema.Types.ObjectId, ref: "school" },
    programs: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "program" }],
    createdAt: { type: Number, default: Date.now() },
    updatedAt: { type: Number, default: Date.now() }
});
exports.SubjectSchema.pre("remove", function (next) {
    let document = this;
    return mongoose_1.model("school")
        .updateMany({ subjects: mongoose_1.Types.ObjectId(document._id) }, {
        $pull: {
            subjects: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return mongoose_1.model("program").updateMany({ subjects: mongoose_1.Types.ObjectId(document._id) }, {
            $pull: {
                subjects: mongoose_1.Types.ObjectId(document._id)
            }
        });
    })
        .then(() => {
        return mongoose_1.model("grade")
            .find({
            subject: mongoose_1.Types.ObjectId(document._id)
        })
            .exec();
    })
        .then((documents) => {
        return documents.forEach(document => {
            document.remove();
        });
    })
        .then(() => {
        return next();
    });
});
exports.SubjectSchema.post("save", function (document, next) {
    return mongoose_1.model("school")
        .findByIdAndUpdate(document.school, {
        $push: {
            subjects: document._id
        }
    })
        .then(() => {
        return next();
    });
});
//# sourceMappingURL=subject.model.js.map
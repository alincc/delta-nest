"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const grade_interface_1 = require("../../interfaces/grade.interface");
exports.GradeSchema = new mongoose_1.Schema({
    grade: { type: Number, default: 0 },
    student: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
    subject: { type: mongoose_1.Schema.Types.ObjectId, ref: "subject" },
    school: { type: mongoose_1.Schema.Types.ObjectId, ref: "school" },
    createdAt: { type: Number, default: Date.now() },
    updatedAt: { type: Number, default: Date.now() }
});
exports.GradeSchema.pre("remove", function (next) {
    let document = this;
    return mongoose_1.model("school")
        .updateMany({ grades: mongoose_1.Types.ObjectId(document._id) }, {
        $pull: {
            grades: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return mongoose_1.model("subject").updateMany({ grades: mongoose_1.Types.ObjectId(document._id) }, {
            $pull: {
                grades: mongoose_1.Types.ObjectId(document._id)
            }
        });
    })
        .then(() => {
        return mongoose_1.model("user").updateMany({ grades: mongoose_1.Types.ObjectId(document._id) }, {
            $pull: {
                grades: mongoose_1.Types.ObjectId(document._id)
            }
        });
    })
        .then(() => {
        return next();
    });
});
exports.GradeSchema.post("save", function (document, next) {
    return mongoose_1.model("school")
        .findByIdAndUpdate(document.school, {
        $push: {
            grades: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return mongoose_1.model("user").findByIdAndUpdate(document.student, {
            $push: {
                grades: mongoose_1.Types.ObjectId(document._id)
            }
        });
    })
        .then(() => {
        return mongoose_1.model("subject").findByIdAndUpdate(document.subject, {
            $push: {
                grades: mongoose_1.Types.ObjectId(document._id)
            }
        });
    })
        .then(() => {
        return next();
    });
});
//# sourceMappingURL=grade.model.js.map
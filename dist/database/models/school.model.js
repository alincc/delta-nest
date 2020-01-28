"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const school_interface_1 = require("../../interfaces/school.interface");
const group_interface_1 = require("../../interfaces/group.interface");
const payment_interface_1 = require("../../interfaces/payment.interface");
const flight_interface_1 = require("../../interfaces/flight.interface");
const program_interface_1 = require("../../interfaces/program.interface");
const subject_iterface_1 = require("../../interfaces/subject.iterface");
const grade_interface_1 = require("../../interfaces/grade.interface");
const user_interface_1 = require("../../interfaces/user.interface");
exports.SchoolSchema = new mongoose_1.Schema({
    name: { type: String, default: null },
    avatarUrl: { type: String, default: null },
    email: { type: String, default: null },
    phone: { type: String, default: null },
    flights: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "subject" }],
    grades: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "grade" }],
    groups: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "group" }],
    payments: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "payment" }],
    principals: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "user" }],
    programs: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "program" }],
    students: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "user" }],
    subjects: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "subject" }],
    createdAt: { type: Number, default: Date.now() },
    updatedAt: { type: Number, default: Date.now() }
});
exports.SchoolSchema.post("remove", function (document, next) {
    return mongoose_1.model("user")
        .updateMany({ schools: mongoose_1.Types.ObjectId(document._id), role: "PRINCIPAL_ROLE" }, {
        $pull: {
            schools: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return mongoose_1.model("user")
            .find({
            schools: mongoose_1.Types.ObjectId(document._id),
            role: "STUDENT_ROLE"
        })
            .exec();
    })
        .then((documents) => {
        return documents.forEach(document => {
            document.remove();
        });
    })
        .then(() => {
        return mongoose_1.model("group")
            .find({
            school: mongoose_1.Types.ObjectId(document._id)
        })
            .exec();
    })
        .then((documents) => {
        return documents.forEach(document => {
            document.remove();
        });
    })
        .then(() => {
        return mongoose_1.model("payment")
            .find({
            school: mongoose_1.Types.ObjectId(document._id)
        })
            .exec();
    })
        .then((documents) => {
        return documents.forEach(document => {
            document.remove();
        });
    })
        .then(() => {
        return mongoose_1.model("flight")
            .find({
            school: mongoose_1.Types.ObjectId(document._id)
        })
            .exec();
    })
        .then((documents) => {
        return documents.forEach(document => {
            document.remove();
        });
    })
        .then(() => {
        return mongoose_1.model("program")
            .find({
            school: mongoose_1.Types.ObjectId(document._id)
        })
            .exec();
    })
        .then((documents) => {
        return documents.forEach(document => {
            document.remove();
        });
    })
        .then(() => {
        return mongoose_1.model("subject")
            .find({
            school: mongoose_1.Types.ObjectId(document._id)
        })
            .exec();
    })
        .then((documents) => {
        return documents.forEach(document => {
            document.remove();
        });
    })
        .then(() => {
        return mongoose_1.model("grade")
            .find({
            school: mongoose_1.Types.ObjectId(document._id)
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
exports.SchoolSchema.post("save", function (document, next) {
    return mongoose_1.model("user")
        .findByIdAndUpdate(document.principals, {
        $push: {
            schools: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return next();
    });
});
//# sourceMappingURL=school.model.js.map
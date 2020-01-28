"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const user_interface_1 = require("../../interfaces/user.interface");
const payment_interface_1 = require("../../interfaces/payment.interface");
const grade_interface_1 = require("../../interfaces/grade.interface");
let userRoles = {
    values: ["PRINCIPAL_ROLE", "STUDENT_ROLE"],
    message: "{VALUE} is not a role"
};
exports.UserSchema = new mongoose_1.Schema({
    enrollmentId: { type: String, default: null },
    role: { type: String, default: "STUDENT_ROLE", enum: userRoles },
    email: { type: String, default: null },
    avatarUrl: { type: String, default: null },
    username: {
        type: String,
        unique: [true, "username must be unique"],
        required: [true, "username is required"]
    },
    password: { type: String, default: null },
    name: { type: String, required: [true, "name is required"] },
    phone: { type: String, default: null },
    dob: { type: Number, default: null },
    graduated: { type: Boolean, default: false },
    gender: { type: String, default: null },
    lastSchool: { type: String, default: null },
    address: {
        state: { type: String, default: null },
        municipality: { type: String, default: null },
        colony: { type: String, default: null },
        street: { type: String, default: null },
        zipCode: { type: String, default: null }
    },
    emergency: {
        name: { type: String, default: null },
        phone: { type: String, default: null },
        relation: { type: String, default: null },
        bloodType: { type: String, default: null }
    },
    note: {
        type: String,
        default: `time: 1552744582955, blocks: [], version: "2.11.10"`
    },
    enrolled: { type: Number, default: Date.now() },
    flights: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "flight" }],
    grades: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "grade" }],
    group: { type: mongoose_1.Schema.Types.ObjectId, ref: "group" },
    payments: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "payment" }],
    program: { type: mongoose_1.Schema.Types.ObjectId, ref: "program" },
    schools: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "school" }],
    createdAt: { type: Number, default: Date.now() },
    updatedAt: { type: Number, default: Date.now() }
});
exports.UserSchema.pre("remove", function (next) {
    let document = this;
    if (document.role == "PRINCIPAL_ROLE") {
        return mongoose_1.model("school")
            .updateMany({ principals: mongoose_1.Types.ObjectId(document._id) }, {
            $pull: {
                principals: mongoose_1.Types.ObjectId(document._id)
            }
        })
            .then(() => {
            return mongoose_1.model("flight").deleteMany({
                authorizedBy: mongoose_1.Types.ObjectId(document._id)
            });
        })
            .then(() => {
            return next();
        });
    }
    else {
        return mongoose_1.model("school")
            .updateMany({ students: mongoose_1.Types.ObjectId(document._id) }, {
            $pull: {
                students: mongoose_1.Types.ObjectId(document._id)
            }
        })
            .then(() => {
            return mongoose_1.model("group").updateMany({ members: mongoose_1.Types.ObjectId(document._id) }, {
                $pull: {
                    members: mongoose_1.Types.ObjectId(document._id)
                }
            });
        })
            .then(() => {
            return mongoose_1.model("flight").updateMany({
                $or: [
                    { enlisted: mongoose_1.Types.ObjectId(document._id) },
                    { approved: mongoose_1.Types.ObjectId(document._id) }
                ]
            }, {
                $pull: {
                    enlisted: mongoose_1.Types.ObjectId(document._id),
                    approved: mongoose_1.Types.ObjectId(document._id)
                }
            });
        })
            .then(() => {
            return mongoose_1.model("payment")
                .find({
                student: mongoose_1.Types.ObjectId(document._id)
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
                student: mongoose_1.Types.ObjectId(document._id)
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
    }
});
exports.UserSchema.post("save", function (document, next) {
    if (document.role == "PRINCIPAL_ROLE") {
        return mongoose_1.model("school")
            .findByIdAndUpdate(document.schools[0], {
            $push: {
                principals: mongoose_1.Types.ObjectId(document._id)
            }
        })
            .then(() => {
            return next();
        });
    }
    else {
        return mongoose_1.model("school")
            .findByIdAndUpdate(document.schools[0], {
            $push: {
                students: mongoose_1.Types.ObjectId(document._id)
            }
        })
            .then(() => {
            return mongoose_1.model("group").findByIdAndUpdate(document.group, {
                $push: {
                    members: mongoose_1.Types.ObjectId(document._id)
                }
            });
        })
            .then(() => {
            return next();
        });
    }
});
//# sourceMappingURL=user.model.js.map
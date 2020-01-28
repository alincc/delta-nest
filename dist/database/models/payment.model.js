"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const program_interface_1 = require("../../interfaces/program.interface");
const payment_interface_1 = require("../../interfaces/payment.interface");
exports.PaymentSchema = new mongoose_1.Schema({
    folio: {
        type: String,
        unique: [true, "folio must be unique"],
        required: [true, "folio is requiered"]
    },
    name: { type: String, default: null },
    description: { type: String, default: null },
    charge: { type: Number, default: 0 },
    deadLine: { type: Number, default: Date.now() },
    completed: { type: Boolean, default: false },
    student: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
    school: { type: mongoose_1.Schema.Types.ObjectId, ref: "school" },
    createdAt: { type: Number, default: Date.now() },
    updatedAt: { type: Number, default: Date.now() }
});
exports.PaymentSchema.pre("remove", function (next) {
    let document = this;
    return mongoose_1.model("school")
        .updateMany({ payments: mongoose_1.Types.ObjectId(document._id) }, {
        $pull: {
            payments: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return mongoose_1.model("user").updateMany({ payments: mongoose_1.Types.ObjectId(document._id) }, {
            $pull: {
                payments: mongoose_1.Types.ObjectId(document._id)
            }
        });
    })
        .then(() => {
        return next();
    });
});
exports.PaymentSchema.post("save", function (document, next) {
    return mongoose_1.model("school")
        .findByIdAndUpdate(document.school, {
        $push: {
            payments: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return mongoose_1.model("user").findByIdAndUpdate(document.student, {
            $push: {
                payments: mongoose_1.Types.ObjectId(document._id)
            }
        });
    })
        .then(() => {
        return next();
    });
});
//# sourceMappingURL=payment.model.js.map
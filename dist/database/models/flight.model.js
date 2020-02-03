"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const flight_interface_1 = require("../../interfaces/flight.interface");
exports.FlightSchema = new mongoose_1.Schema({
    folio: {
        type: String,
        unique: [true, "folio must be unique"],
        required: [true, "folio is requiered"]
    },
    name: { type: String, default: null },
    description: { type: String, default: null },
    startDate: { type: Number, default: Date.now() },
    duration: { type: String, default: "0 horas" },
    cost: { type: Number, default: 0 },
    enlisted: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "user" }],
    approved: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "user" }],
    school: { type: mongoose_1.Schema.Types.ObjectId, ref: "school" },
    authorizedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
    createdAt: { type: Number, default: Date.now() },
    updatedAt: { type: Number, default: Date.now() }
});
exports.FlightSchema.pre("remove", function (next) {
    let document = this;
    return mongoose_1.model("school")
        .updateMany({ flights: mongoose_1.Types.ObjectId(document._id) }, {
        $pull: {
            flights: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return mongoose_1.model("user").updateMany({ flights: mongoose_1.Types.ObjectId(document._id) }, {
            $pull: {
                flights: mongoose_1.Types.ObjectId(document._id)
            }
        });
    })
        .then(() => {
        return next();
    });
});
exports.FlightSchema.post("findOneAndUpdate", function (document, next) {
    let operation = Object.keys(this._update)[0];
    let property = Object.keys(this._update[operation])[0];
    if (operation == "$setOnInsert") {
        return next();
    }
    return mongoose_1.model("user")
        .findByIdAndUpdate(this._update[operation][property], {
        [operation]: {
            flights: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return next();
    });
});
exports.FlightSchema.post("save", function (document, next) {
    return mongoose_1.model("school")
        .findByIdAndUpdate(document.school, {
        $push: {
            flights: mongoose_1.Types.ObjectId(document._id)
        }
    })
        .then(() => {
        return mongoose_1.model("user").updateMany({
            $or: [
                { _id: { $in: document.approved } },
                { _id: { $in: document.authorizedBy } }
            ]
        }, { flights: mongoose_1.Types.ObjectId(document._id) });
    })
        .then(() => {
        return next();
    });
});
//# sourceMappingURL=flight.model.js.map
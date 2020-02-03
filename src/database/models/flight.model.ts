import { Schema, model, Types } from "mongoose";
import { IFlight } from "src/interfaces/flight.interface";

export const FlightSchema = new Schema({
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
  enlisted: [{ type: Schema.Types.ObjectId, ref: "user" }],
  approved: [{ type: Schema.Types.ObjectId, ref: "user" }],
  school: { type: Schema.Types.ObjectId, ref: "school" },
  authorizedBy: { type: Schema.Types.ObjectId, ref: "user" },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});

FlightSchema.pre("remove", function(next) {
  let document: IFlight = this;

  return model("school")
    .updateMany(
      { flights: Types.ObjectId(document._id) },
      {
        $pull: {
          flights: Types.ObjectId(document._id)
        }
      }
    )
    .then(() => {
      return model("user").updateMany(
        { flights: Types.ObjectId(document._id) },
        {
          $pull: {
            flights: Types.ObjectId(document._id)
          }
        }
      );
    })
    .then(() => {
      return next();
    });
});

FlightSchema.post("findOneAndUpdate", function(document: IFlight, next) {
  let operation = Object.keys(this._update)[0];
  let property = Object.keys(this._update[operation])[0];

  if (operation == "$setOnInsert") {
    return next();
  }

  return model("user")
    .findByIdAndUpdate(this._update[operation][property], {
      [operation]: {
        flights: Types.ObjectId(document._id)
      }
    })
    .then(() => {
      return next();
    });
});

FlightSchema.post("save", function(document: IFlight, next) {
  return model("school")
    .findByIdAndUpdate(document.school, {
      $push: {
        flights: Types.ObjectId(document._id)
      }
    })
    .then(() => {
      return model("user").updateMany(
        {
          $or: [
            { _id: { $in: document.approved } },
            { _id: { $in: document.authorizedBy } }
          ]
        },
        { flights: Types.ObjectId(document._id) }
      );
    })
    .then(() => {
      return next();
    });
});

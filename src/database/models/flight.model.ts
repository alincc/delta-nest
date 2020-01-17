import { Schema } from "mongoose";

export const FlightSchema = new Schema({
  folio: {
    type: String,
    unique: [true, "folio must be unique"],
    required: [true, "folio is requiered"]
  },
  name: { type: String, default: null },
  description: { type: String, default: null },
  startDate: { type: Number, default: Date.now() },
  duration: { type: Number, default: 0 },
  cost: { type: Number, default: 0 },
  enlisted: [{ type: Schema.Types.ObjectId, ref: "user" }],
  approved: [{ type: Schema.Types.ObjectId, ref: "user" }],
  school: { type: Schema.Types.ObjectId, ref: "school" },
  authorizedBy: { type: Schema.Types.ObjectId, ref: "user" },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});

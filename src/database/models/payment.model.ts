import { Schema } from "mongoose";

export const PaymentSchema = new Schema({
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
  student: { type: Schema.Types.ObjectId, ref: "user" },
  school: { type: Schema.Types.ObjectId, ref: "school" },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});

import { Schema } from "mongoose";

export const GroupSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"]
  },
  description: { type: String, default: null },
  members: [{ type: Schema.Types.ObjectId, ref: "user" }],
  school: { type: Schema.Types.ObjectId, ref: "school" },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});

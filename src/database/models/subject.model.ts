import { Schema } from "mongoose";

export const SubjectSchema = new Schema({
  folio: {
    type: String,
    unique: [true, "folio must be unique"],
    required: [true, "folio is requiered"]
  },
  name: { type: String, default: null },
  description: { type: String, default: null },
  avatarUrl: { type: String, default: null },
  email: { type: String, default: null },
  grades: [{ type: Schema.Types.ObjectId, ref: "grade" }],
  school: { type: Schema.Types.ObjectId, ref: "school" },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});

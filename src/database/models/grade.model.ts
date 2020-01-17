import { Schema } from "mongoose";

export const GradeSchema = new Schema({
  name: { type: String, default: null },
  description: { type: String, default: null },
  grade: { type: Number, default: 0 },
  student: { type: Schema.Types.ObjectId, ref: "user" },
  subject: { type: Schema.Types.ObjectId, ref: "subject" },
  school: { type: Schema.Types.ObjectId, ref: "school" },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});

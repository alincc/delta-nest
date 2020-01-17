import { Schema } from "mongoose";

export const SchoolSchema = new Schema({
  name: { type: String, default: null },
  avatarUrl: { type: String, default: null },
  email: { type: String, default: null },
  phone: { type: String, default: null },
  flights: [{ type: Schema.Types.ObjectId, ref: "subject" }],
  grades: [{ type: Schema.Types.ObjectId, ref: "grade" }],
  groups: [{ type: Schema.Types.ObjectId, ref: "group" }],
  payments: [{ type: Schema.Types.ObjectId, ref: "payment" }],
  principals: [{ type: Schema.Types.ObjectId, ref: "user" }],
  programs: [{ type: Schema.Types.ObjectId, ref: "program" }],
  students: [{ type: Schema.Types.ObjectId, ref: "user" }],
  subjects: [{ type: Schema.Types.ObjectId, ref: "subject" }],
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});

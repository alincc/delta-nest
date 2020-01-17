import { Schema } from "mongoose";

let userRoles = {
  values: ["PRINCIPAL_ROLE", "STUDENT_ROLE"],
  message: "{VALUE} is not a role"
};

export const UserSchema = new Schema({
  role: { type: String, default: "STUDENT_ROLE", enum: userRoles },
  email: {
    type: String,
    unique: [true, "email must be unique"],
    required: [true, "email is required"]
  },
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
  adress: {
    state: { type: String, default: null },
    municipality: { type: String, default: null },
    colony: { type: String, default: null },
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
  flights: [{ type: Schema.Types.ObjectId, ref: "flight" }],
  grades: [{ type: Schema.Types.ObjectId, ref: "grade" }],
  group: { type: Schema.Types.ObjectId, ref: "group" },
  payments: [{ type: Schema.Types.ObjectId, ref: "payment" }],
  program: { type: Schema.Types.ObjectId, ref: "program" },
  schools: [{ type: Schema.Types.ObjectId, ref: "school" }],
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});
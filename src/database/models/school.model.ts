import { Schema, model, Types } from "mongoose";
import { ISchool } from "src/interfaces/school.interface";
import { IGroup } from "src/interfaces/group.interface";
import { IPayment } from "src/interfaces/payment.interface";
import { IFlight } from "src/interfaces/flight.interface";
import { IProgram } from "src/interfaces/program.interface";
import { ISubject } from "src/interfaces/subject.iterface";
import { IGrade } from "src/interfaces/grade.interface";

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

SchoolSchema.post("remove", function(document: ISchool, next) {
  return model("user")
    .updateMany(
      { schools: Types.ObjectId(document._id), role: "PRINCIPAL_ROLE" },
      {
        $pull: {
          schools: Types.ObjectId(document._id)
        }
      }
    )
    .then(() => {
      return model("user").deleteMany({
        schools: Types.ObjectId(document._id),
        role: "STUDENT_ROLE"
      });
    })
    .then(() => {
      return model("group").deleteMany({
        school: Types.ObjectId(document._id)
      } as IGroup);
    })
    .then(() => {
      return model("payment").deleteMany({
        school: Types.ObjectId(document._id)
      } as IPayment);
    })
    .then(() => {
      return model("flight").deleteMany({
        school: Types.ObjectId(document._id)
      } as IFlight);
    })
    .then(() => {
      return model("program").deleteMany({
        school: Types.ObjectId(document._id)
      } as IProgram);
    })
    .then(() => {
      return model("subject").deleteMany({
        school: Types.ObjectId(document._id)
      } as ISubject);
    })
    .then(() => {
      return model("grade").deleteMany({
        school: Types.ObjectId(document._id)
      } as IGrade);
    })
    .then(() => {
      return next();
    });
});

SchoolSchema.post("save", function(document: ISchool, next) {
  return model("user")
    .findByIdAndUpdate(document.principals, {
      $push: {
        schools: Types.ObjectId(document._id)
      }
    })
    .then(() => {
      return next();
    });
});

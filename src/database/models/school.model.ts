import { Schema, model, Types } from "mongoose";
import { ISchool } from "src/interfaces/school.interface";
import { IGroup } from "src/interfaces/group.interface";
import { IPayment } from "src/interfaces/payment.interface";
import { IFlight } from "src/interfaces/flight.interface";
import { IProgram } from "src/interfaces/program.interface";
import { ISubject } from "src/interfaces/subject.iterface";
import { IGrade } from "src/interfaces/grade.interface";
import { IUser } from "src/interfaces/user.interface";

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
      return model("user")
        .find({
          schools: Types.ObjectId(document._id),
          role: "STUDENT_ROLE"
        })
        .exec();
    })
    .then((documents: IUser[]) => {
      return documents.forEach(document => {
        document.remove();
      });
    })
    .then(() => {
      return model("group")
        .find({
          school: Types.ObjectId(document._id)
        } as IGroup)
        .exec();
    })
    .then((documents: IGroup[]) => {
      return documents.forEach(document => {
        document.remove();
      });
    })
    .then(() => {
      return model("payment")
        .find({
          school: Types.ObjectId(document._id)
        } as IPayment)
        .exec();
    })
    .then((documents: IPayment[]) => {
      return documents.forEach(document => {
        document.remove();
      });
    })
    .then(() => {
      return model("flight")
        .find({
          school: Types.ObjectId(document._id)
        } as IFlight)
        .exec();
    })
    .then((documents: IFlight[]) => {
      return documents.forEach(document => {
        document.remove();
      });
    })
    .then(() => {
      return model("program")
        .find({
          school: Types.ObjectId(document._id)
        } as IProgram)
        .exec();
    })
    .then((documents: IProgram[]) => {
      return documents.forEach(document => {
        document.remove();
      });
    })
    .then(() => {
      return model("subject")
        .find({
          school: Types.ObjectId(document._id)
        } as ISubject)
        .exec();
    })
    .then((documents: ISubject[]) => {
      return documents.forEach(document => {
        document.remove();
      });
    })
    .then(() => {
      return model("grade")
        .find({
          school: Types.ObjectId(document._id)
        } as IGrade)
        .exec();
    })
    .then((documents: IGrade[]) => {
      return documents.forEach(document => {
        document.remove();
      });
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

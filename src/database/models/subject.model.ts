import { Schema, model, Types } from "mongoose";
import { ISubject } from "src/interfaces/subject.iterface";
import { IGrade } from "src/interfaces/grade.interface";

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
  programs: [{ type: Schema.Types.ObjectId, ref: "program" }],
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});

SubjectSchema.pre("remove", function(next) {
  let document: ISubject = this;

  return model("school")
    .updateMany(
      { subjects: Types.ObjectId(document._id) },
      {
        $pull: {
          subjects: Types.ObjectId(document._id)
        }
      }
    )
    .then(() => {
      return model("program").updateMany(
        { subjects: Types.ObjectId(document._id) },
        {
          $pull: {
            subjects: Types.ObjectId(document._id)
          }
        }
      );
    })
    .then(() => {
      return model("grade")
        .find({
          subject: Types.ObjectId(document._id)
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

SubjectSchema.post("save", function(document: ISubject, next) {
  return model("school")
    .findByIdAndUpdate(document.school, {
      $push: {
        subjects: document._id
      }
    })
    .then(() => {
      return next();
    });
});

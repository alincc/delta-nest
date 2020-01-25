import { Schema, model, Types } from "mongoose";
import { IGrade } from "src/interfaces/grade.interface";

export const GradeSchema = new Schema({
  grade: { type: Number, default: 0 },
  student: { type: Schema.Types.ObjectId, ref: "user" },
  subject: { type: Schema.Types.ObjectId, ref: "subject" },
  school: { type: Schema.Types.ObjectId, ref: "school" },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});

GradeSchema.pre("remove", function(next) {
  let document: IGrade = this;

  return model("school")
    .updateMany(
      { grades: Types.ObjectId(document._id) },
      {
        $pull: {
          grades: Types.ObjectId(document._id)
        }
      }
    )
    .then(() => {
      return model("subject").updateMany(
        { grades: Types.ObjectId(document._id) },
        {
          $pull: {
            grades: Types.ObjectId(document._id)
          }
        }
      );
    })
    .then(() => {
      return model("user").updateMany(
        { grades: Types.ObjectId(document._id) },
        {
          $pull: {
            grades: Types.ObjectId(document._id)
          }
        }
      );
    })
    .then(() => {
      return next();
    });
});

GradeSchema.post("save", function(document: IGrade, next) {
  return model("school")
    .findByIdAndUpdate(document.school, {
      $push: {
        grades: Types.ObjectId(document._id)
      }
    })
    .then(() => {
      return model("user").findByIdAndUpdate(document.student, {
        $push: {
          grades: Types.ObjectId(document._id)
        }
      });
    })
    .then(() => {
      return model("subject").findByIdAndUpdate(document.subject, {
        $push: {
          grades: Types.ObjectId(document._id)
        }
      });
    })
    .then(() => {
      return next();
    });
});

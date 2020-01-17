import { Schema, model, Types } from "mongoose";
import { IGrade } from "src/interfaces/grade.interface";

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

GradeSchema.pre("remove", function(next) {
  let document: IGrade = this;

  return model("school")
    .updateMany(
      { gardes: Types.ObjectId(document._id) },
      {
        $pull: {
          gardes: Types.ObjectId(document._id)
        }
      }
    )
    .then(() => {
      return model("subject").updateMany(
        { gardes: Types.ObjectId(document._id) },
        {
          $pull: {
            gardes: Types.ObjectId(document._id)
          }
        }
      );
    })
    .then(() => {
      return model("user").updateMany(
        { gardes: Types.ObjectId(document._id) },
        {
          $pull: {
            gardes: Types.ObjectId(document._id)
          }
        }
      );
    })
    .then(() => {
      return next();
    });
});

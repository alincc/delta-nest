import { Schema, model, Types } from "mongoose";
import { IProgram } from "src/interfaces/program.interface";

export const ProgramSchema = new Schema({
  folio: {
    type: String,
    unique: [true, "folio must be unique"],
    required: [true, "folio is requiered"]
  },
  name: { type: String, default: null },
  description: { type: String, default: null },
  inscription: { type: Number, default: 0 },
  monthlyRate: { type: Number, default: 0 },
  email: { type: String, default: null },
  startDate: { type: Number, default: Date.now() },
  endDate: { type: Number, default: Date.now() },
  avatarUrl: { type: String, default: null },
  subjects: [{ type: Schema.Types.ObjectId, ref: "subject" }],
  school: { type: Schema.Types.ObjectId, ref: "school" },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});

ProgramSchema.pre("remove", function(next) {
  let document: IProgram = this;

  return model("school")
    .updateMany(
      { programs: Types.ObjectId(document._id) },
      {
        $pull: {
          programs: Types.ObjectId(document._id)
        }
      }
    )
    .then(() => {
      return model("subject").updateMany(
        { programs: Types.ObjectId(document._id) },
        {
          $pull: {
            programs: Types.ObjectId(document._id)
          }
        }
      );
    })
    .then(() => {
      return next();
    });
});

ProgramSchema.post("findOneAndUpdate", function(document: IProgram, next) {
  let operation = Object.keys(this._update)[0];
  let property = Object.keys(this._update[operation])[0];

  return model("subject")
    .findByIdAndUpdate(this._update[operation][property], {
      [operation]: {
        programs: Types.ObjectId(document._id)
      }
    })
    .then(() => {
      return next();
    });
});

ProgramSchema.post("save", function(document: IProgram, next) {
  return model("school")
    .findByIdAndUpdate(document.school, {
      $push: {
        programs: document._id
      }
    })
    .then(() => {
      return next();
    });
});

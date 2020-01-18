import { Schema, model, Types } from "mongoose";
import { IGroup } from "src/interfaces/group.interface";

export const GroupSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"]
  },
  avatarUrl: { type: String, default: null },
  description: { type: String, default: null },
  members: [{ type: Schema.Types.ObjectId, ref: "user" }],
  school: { type: Schema.Types.ObjectId, ref: "school" },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});

GroupSchema.pre("remove", function(next) {
  let document: IGroup = this;

  return model("school")
    .updateMany(
      { groups: Types.ObjectId(document._id) },
      {
        $pull: {
          groups: Types.ObjectId(document._id)
        }
      }
    )
    .then(() => {
      return model("user").updateMany(
        { group: Types.ObjectId(document._id) },
        {
          group: null
        }
      );
    })
    .then(() => {
      return next();
    });
});

GroupSchema.post("save", function(document: IGroup, next) {
  return model("school")
    .findByIdAndUpdate(document.school, {
      $push: {
        groups: document._id
      }
    })
    .then(() => {
      return next();
    });
});

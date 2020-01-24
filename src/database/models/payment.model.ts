import { Schema, model, Types } from "mongoose";
import { ProgramSchema } from "./program.model";
import { IProgram } from "src/interfaces/program.interface";
import { IPayment } from "src/interfaces/payment.interface";

export const PaymentSchema = new Schema({
  folio: {
    type: String,
    unique: [true, "folio must be unique"],
    required: [true, "folio is requiered"]
  },
  name: { type: String, default: null },
  description: { type: String, default: null },
  charge: { type: Number, default: 0 },
  deadLine: { type: Number, default: Date.now() },
  completed: { type: Boolean, default: false },
  student: { type: Schema.Types.ObjectId, ref: "user" },
  school: { type: Schema.Types.ObjectId, ref: "school" },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() }
});

PaymentSchema.pre("remove", function(next) {
  let document: IProgram = this;

  return model("school")
    .updateMany(
      { payments: Types.ObjectId(document._id) },
      {
        $pull: {
          payments: Types.ObjectId(document._id)
        }
      }
    )
    .then(() => {
      return model("user").updateMany(
        { payments: Types.ObjectId(document._id) },
        {
          $pull: {
            payments: Types.ObjectId(document._id)
          }
        }
      );
    })
    .then(() => {
      return next();
    });
});

PaymentSchema.post("save", function(document: IPayment, next) {
  return model("school")
    .findByIdAndUpdate(document.school, {
      $push: {
        payments: Types.ObjectId(document._id)
      }
    })
    .then(() => {
      return model("user").findByIdAndUpdate(document.student, {
        $push: {
          payments: Types.ObjectId(document._id)
        }
      });
    })
    .then(() => {
      return next();
    });
});

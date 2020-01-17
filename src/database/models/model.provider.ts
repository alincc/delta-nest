import { FlightSchema } from "./flight.model";
import { GradeSchema } from "./grade.model";
import { GroupSchema } from "./group.model";
import { PaymentSchema } from "./payment.model";
import { UserSchema } from "./user.model";
import { SchoolSchema } from "./school.model";
import { SubjectSchema } from "./subject.model";
import { Connection } from "mongoose";
import { ProgramSchema } from "./program.model";

export const ModelsProviders = [
  {
    provide: "FLIGHT_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("flight", FlightSchema),
    inject: ["DATABASE_CONNECTION"]
  },
  {
    provide: "GRADE_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("grade", GradeSchema),
    inject: ["DATABASE_CONNECTION"]
  },
  {
    provide: "GROUP_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("group", GroupSchema),
    inject: ["DATABASE_CONNECTION"]
  },
  {
    provide: "PAYMENT_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("payment", PaymentSchema),
    inject: ["DATABASE_CONNECTION"]
  },
  {
    provide: "PROGRAM_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("program", ProgramSchema),
    inject: ["DATABASE_CONNECTION"]
  },
  {
    provide: "USER_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("user", UserSchema),
    inject: ["DATABASE_CONNECTION"]
  },
  {
    provide: "SCHOOL_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("school", SchoolSchema),
    inject: ["DATABASE_CONNECTION"]
  },
  {
    provide: "SUBJECT_MODEL",
    useFactory: (connection: Connection) =>
      connection.model("subject", SubjectSchema),
    inject: ["DATABASE_CONNECTION"]
  }
];

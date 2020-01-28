"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flight_model_1 = require("./flight.model");
const grade_model_1 = require("./grade.model");
const group_model_1 = require("./group.model");
const payment_model_1 = require("./payment.model");
const user_model_1 = require("./user.model");
const school_model_1 = require("./school.model");
const subject_model_1 = require("./subject.model");
const program_model_1 = require("./program.model");
exports.ModelsProviders = [
    {
        provide: "FLIGHT_MODEL",
        useFactory: (connection) => connection.model("flight", flight_model_1.FlightSchema),
        inject: ["DATABASE_CONNECTION"]
    },
    {
        provide: "GRADE_MODEL",
        useFactory: (connection) => connection.model("grade", grade_model_1.GradeSchema),
        inject: ["DATABASE_CONNECTION"]
    },
    {
        provide: "GROUP_MODEL",
        useFactory: (connection) => connection.model("group", group_model_1.GroupSchema),
        inject: ["DATABASE_CONNECTION"]
    },
    {
        provide: "PAYMENT_MODEL",
        useFactory: (connection) => connection.model("payment", payment_model_1.PaymentSchema),
        inject: ["DATABASE_CONNECTION"]
    },
    {
        provide: "PROGRAM_MODEL",
        useFactory: (connection) => connection.model("program", program_model_1.ProgramSchema),
        inject: ["DATABASE_CONNECTION"]
    },
    {
        provide: "USER_MODEL",
        useFactory: (connection) => connection.model("user", user_model_1.UserSchema),
        inject: ["DATABASE_CONNECTION"]
    },
    {
        provide: "SCHOOL_MODEL",
        useFactory: (connection) => connection.model("school", school_model_1.SchoolSchema),
        inject: ["DATABASE_CONNECTION"]
    },
    {
        provide: "SUBJECT_MODEL",
        useFactory: (connection) => connection.model("subject", subject_model_1.SubjectSchema),
        inject: ["DATABASE_CONNECTION"]
    }
];
//# sourceMappingURL=model.provider.js.map
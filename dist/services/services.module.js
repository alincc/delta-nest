"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const flight_service_1 = require("./flight.service");
const grade_service_1 = require("./grade.service");
const group_service_1 = require("./group.service");
const payment_service_1 = require("./payment.service");
const school_service_1 = require("./school.service");
const subject_service_1 = require("./subject.service");
const user_service_1 = require("./user.service");
const program_service_1 = require("./program.service");
let ServicesModule = class ServicesModule {
};
ServicesModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        providers: [
            flight_service_1.FlightService,
            grade_service_1.GradeService,
            group_service_1.GroupService,
            payment_service_1.PaymentService,
            program_service_1.ProgramService,
            school_service_1.SchoolService,
            subject_service_1.SubjectService,
            user_service_1.UserService
        ],
        exports: [
            flight_service_1.FlightService,
            grade_service_1.GradeService,
            group_service_1.GroupService,
            payment_service_1.PaymentService,
            program_service_1.ProgramService,
            school_service_1.SchoolService,
            subject_service_1.SubjectService,
            user_service_1.UserService
        ]
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=services.module.js.map
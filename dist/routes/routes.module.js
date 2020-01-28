"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const group_module_1 = require("./group/group.module");
const student_module_1 = require("./student/student.module");
const principal_module_1 = require("./principal/principal.module");
const flight_module_1 = require("./flight/flight.module");
const grade_module_1 = require("./grade/grade.module");
const payment_module_1 = require("./payment/payment.module");
const school_module_1 = require("./school/school.module");
const subject_module_1 = require("./subject/subject.module");
const program_module_1 = require("./program/program.module");
const upload_module_1 = require("./upload/upload.module");
const maintenance_module_1 = require("./maintenance/maintenance.module");
let RoutesModule = class RoutesModule {
};
RoutesModule = __decorate([
    common_1.Module({
        imports: [
            group_module_1.GroupModule,
            student_module_1.StudentModule,
            principal_module_1.PrincipalModule,
            flight_module_1.FlightModule,
            grade_module_1.GradeModule,
            payment_module_1.PaymentModule,
            school_module_1.SchoolModule,
            subject_module_1.SubjectModule,
            program_module_1.ProgramModule,
            upload_module_1.UploadModule,
            maintenance_module_1.MaintenanceModule
        ],
        exports: [
            group_module_1.GroupModule,
            student_module_1.StudentModule,
            principal_module_1.PrincipalModule,
            flight_module_1.FlightModule,
            grade_module_1.GradeModule,
            payment_module_1.PaymentModule,
            school_module_1.SchoolModule,
            subject_module_1.SubjectModule,
            program_module_1.ProgramModule,
            upload_module_1.UploadModule
        ]
    })
], RoutesModule);
exports.RoutesModule = RoutesModule;
//# sourceMappingURL=routes.module.js.map
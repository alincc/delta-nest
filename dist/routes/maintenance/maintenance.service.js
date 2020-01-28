"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_service_1 = require("../../services/user.service");
const school_service_1 = require("../../services/school.service");
const user_interface_1 = require("../../interfaces/user.interface");
const flight_service_1 = require("../../services/flight.service");
const grade_service_1 = require("../../services/grade.service");
const group_service_1 = require("../../services/group.service");
const payment_service_1 = require("../../services/payment.service");
const program_service_1 = require("../../services/program.service");
const subject_service_1 = require("../../services/subject.service");
const mongoose_1 = require("mongoose");
let MaintenanceControllerService = class MaintenanceControllerService {
    constructor(userService, schoolService, flightService, gradeService, groupService, paymentService, programService, subjectService) {
        this.userService = userService;
        this.schoolService = schoolService;
        this.flightService = flightService;
        this.gradeService = gradeService;
        this.groupService = groupService;
        this.paymentService = paymentService;
        this.programService = programService;
        this.subjectService = subjectService;
    }
    async resetDataBase() {
        return new Promise(async (resolve, reject) => {
            mongoose_1.connection.dropDatabase(error => {
                error
                    ? reject(error)
                    : resolve({
                        errors: false,
                        statusCode: 200,
                        message: "Database Deleted",
                        data: null
                    });
            });
        });
    }
    async getCurrentState() {
        return new Promise(async (resolve, reject) => {
            const users = await this.userService.findAll();
            const schools = await this.schoolService.findAll();
            const flights = await this.flightService.findAll();
            const grades = await this.gradeService.findAll();
            const groups = await this.groupService.findAll();
            const payments = await this.paymentService.findAll();
            const programs = await this.programService.findAll();
            const subjects = await this.subjectService.findAll();
            users &&
                schools &&
                flights &&
                grades &&
                groups &&
                payments &&
                programs &&
                subjects
                ? resolve({
                    errors: false,
                    statusCode: 200,
                    message: "All Found",
                    data: {
                        users,
                        schools,
                        flights,
                        grades,
                        groups,
                        payments,
                        programs,
                        subjects
                    }
                })
                : reject();
        });
    }
};
MaintenanceControllerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        school_service_1.SchoolService,
        flight_service_1.FlightService,
        grade_service_1.GradeService,
        group_service_1.GroupService,
        payment_service_1.PaymentService,
        program_service_1.ProgramService,
        subject_service_1.SubjectService])
], MaintenanceControllerService);
exports.MaintenanceControllerService = MaintenanceControllerService;
//# sourceMappingURL=maintenance.service.js.map
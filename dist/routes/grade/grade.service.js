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
const response_interface_1 = require("../../interfaces/response.interface");
const _ = require("lodash");
const grade_service_1 = require("../../services/grade.service");
const grade_interface_1 = require("../../interfaces/grade.interface");
let GradeControllerService = class GradeControllerService {
    constructor(gradeService) {
        this.gradeService = gradeService;
    }
    async findAll() {
        return this.gradeService.findAll().then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Grades Found",
                count: document.length,
                data: document
            };
        });
    }
    async findAllInSchool(schoolId) {
        return this.gradeService
            .findAllInSchool(schoolId)
            .then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Grades Found",
                count: document.length,
                data: document
            };
        });
    }
    async findAllInSubject(schoolId) {
        return this.gradeService
            .findAllInSubject(schoolId)
            .then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Grades Found",
                count: document.length,
                data: document
            };
        });
    }
    async findAllInStudent(studentId) {
        return this.gradeService
            .findAllInStudent(studentId)
            .then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Grades Found",
                count: document.length,
                data: document
            };
        });
    }
    async findById(id) {
        return this.gradeService.findById(id).then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Grade Found",
                data: document
            };
        });
    }
    async createOne(grade) {
        return this.gradeService.createOneOrMany(grade).then((document) => {
            return {
                errors: false,
                statusCode: 201,
                message: "Grade Created",
                data: document
            };
        });
    }
    async updateOne(id, grade) {
        const sanitizedGrade = _.omit(grade, [
            "_id",
            "student",
            "subject",
            "school"
        ]);
        return this.gradeService
            .updateCreateOne(id, sanitizedGrade)
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "Grade Updated",
                data: document
            };
        });
    }
    async deleteOne(id) {
        return this.gradeService.deleteOne(id).then(() => {
            return {
                errors: false,
                statusCode: 200,
                message: "Grade deleted",
                data: null
            };
        });
    }
};
GradeControllerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [grade_service_1.GradeService])
], GradeControllerService);
exports.GradeControllerService = GradeControllerService;
//# sourceMappingURL=grade.service.js.map
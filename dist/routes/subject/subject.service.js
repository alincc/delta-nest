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
const subject_service_1 = require("../../services/subject.service");
const subject_iterface_1 = require("../../interfaces/subject.iterface");
const _ = require("lodash");
let SubjectControllerService = class SubjectControllerService {
    constructor(subjectService) {
        this.subjectService = subjectService;
    }
    async findAll() {
        return this.subjectService.findAll().then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Subjects Found",
                count: document.length,
                data: document
            };
        });
    }
    async findAllInSchool(schoolId) {
        return this.subjectService
            .findAllInSchool(schoolId)
            .then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Subjects Found",
                count: document.length,
                data: document
            };
        });
    }
    async findAllInProgram(programId) {
        return this.subjectService
            .findAllInProgram(programId)
            .then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Subjects Found",
                count: document.length,
                data: document
            };
        });
    }
    async findById(id) {
        return this.subjectService.findById(id).then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Subject Found",
                data: document
            };
        });
    }
    async createOne(subject) {
        return this.subjectService
            .createOneOrMany(subject)
            .then((document) => {
            return {
                errors: false,
                statusCode: 201,
                message: "Subject Created",
                data: document
            };
        });
    }
    async updateOne(id, subject) {
        const sanitizedSubject = _.omit(subject, [
            "_id",
            "grades",
            "school",
            "programs"
        ]);
        return this.subjectService
            .updateCreateOne(id, sanitizedSubject)
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "Subject Updated",
                data: document
            };
        });
    }
    async deleteOne(id) {
        return this.subjectService.deleteOne(id).then(() => {
            return {
                errors: false,
                statusCode: 200,
                message: "Subject deleted",
                data: null
            };
        });
    }
    async checkFolio(folio) {
        return this.subjectService.findOne(folio).then((document) => {
            if (!document) {
                throw new Error();
            }
            return {
                errors: false,
                statusCode: 200,
                message: "Subject Found",
                data: document
            };
        });
    }
};
SubjectControllerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [subject_service_1.SubjectService])
], SubjectControllerService);
exports.SubjectControllerService = SubjectControllerService;
//# sourceMappingURL=subject.service.js.map
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
const program_service_1 = require("../../services/program.service");
const response_interface_1 = require("../../interfaces/response.interface");
const program_interface_1 = require("../../interfaces/program.interface");
const _ = require("lodash");
const mongoose_1 = require("mongoose");
let ProgramControllerService = class ProgramControllerService {
    constructor(programService) {
        this.programService = programService;
    }
    async findAll() {
        return this.programService.findAll().then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Programs Found",
                count: document.length,
                data: document
            };
        });
    }
    async findAllInSchool(schoolId) {
        return this.programService
            .findAllInSchool(schoolId)
            .then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Programs Found",
                count: document.length,
                data: document
            };
        });
    }
    async findById(id) {
        return this.programService.findById(id).then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Program Found",
                data: document
            };
        });
    }
    async createOne(group) {
        return this.programService
            .createOneOrMany(group)
            .then((document) => {
            return {
                errors: false,
                statusCode: 201,
                message: "Program Created",
                data: document
            };
        });
    }
    async updateOne(id, group) {
        const sanitizedGroup = _.omit(group, ["school", "subjects"]);
        return this.programService
            .updateCreateOne(id, sanitizedGroup)
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "Program Updated",
                data: document
            };
        });
    }
    async addSubject(id, subjectId) {
        return this.programService
            .addChild(id, { subjects: mongoose_1.Types.ObjectId(subjectId) })
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "Program Updated",
                data: document
            };
        });
    }
    async removeSubject(id, subjectId) {
        return this.programService
            .removeChild(id, { subjects: mongoose_1.Types.ObjectId(subjectId) })
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "Program Updated",
                data: document
            };
        });
    }
    async deleteOne(id) {
        return this.programService.deleteOne(id).then(() => {
            return {
                errors: false,
                statusCode: 200,
                message: "Program deleted",
                data: null
            };
        });
    }
    async checkFolio(folio) {
        return this.programService.findOne(folio).then((document) => {
            if (!document) {
                throw new Error();
            }
            return {
                errors: false,
                statusCode: 200,
                message: "Program Found",
                data: document
            };
        });
    }
};
ProgramControllerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [program_service_1.ProgramService])
], ProgramControllerService);
exports.ProgramControllerService = ProgramControllerService;
//# sourceMappingURL=program.service.js.map
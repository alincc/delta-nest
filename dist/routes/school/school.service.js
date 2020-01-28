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
const user_interface_1 = require("../../interfaces/user.interface");
const school_interface_1 = require("../../interfaces/school.interface");
const user_service_1 = require("../../services/user.service");
const school_service_1 = require("../../services/school.service");
const response_interface_1 = require("../../interfaces/response.interface");
const _ = require("lodash");
let SchoolControllerService = class SchoolControllerService {
    constructor(userService, schoolService) {
        this.userService = userService;
        this.schoolService = schoolService;
    }
    async findAll() {
        return this.schoolService.findAll().then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Schools Found",
                count: document.length,
                data: document
            };
        });
    }
    async findAllInPrincipal(principalId) {
        return this.schoolService
            .findAllInPrincipal(principalId)
            .then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Schools Found",
                count: document.length,
                data: document
            };
        });
    }
    async findById(id) {
        return this.schoolService.findById(id).then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "School Found",
                data: document
            };
        });
    }
    async createOne(school) {
        return this.schoolService
            .createOneOrMany(school)
            .then((document) => {
            return {
                errors: false,
                statusCode: 201,
                message: "School Created",
                data: document
            };
        });
    }
    async updateOne(id, school) {
        const sanitizedSchool = _.omit(school, [
            "flights",
            "grades",
            "groups",
            "payments",
            "principals",
            "programs",
            "students",
            "subjects"
        ]);
        return this.schoolService
            .updateCreateOne(id, sanitizedSchool)
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "School Updated",
                data: document
            };
        });
    }
    async deleteOne(id) {
        return this.schoolService.deleteOne(id).then(() => {
            return {
                errors: false,
                statusCode: 200,
                message: "School deleted",
                data: null
            };
        });
    }
};
SchoolControllerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        school_service_1.SchoolService])
], SchoolControllerService);
exports.SchoolControllerService = SchoolControllerService;
//# sourceMappingURL=school.service.js.map
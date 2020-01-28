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
const school_service_1 = require("../../services/school.service");
const response_interface_1 = require("../../interfaces/response.interface");
const _ = require("lodash");
const user_service_1 = require("../../services/user.service");
let StudentControllerService = class StudentControllerService {
    constructor(schoolService, userService) {
        this.schoolService = schoolService;
        this.userService = userService;
    }
    async findAll() {
        return this.userService.findAll().then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Users Found",
                count: document.length,
                data: document
            };
        });
    }
    async findAllInSchool(schoolId, flags) {
        return this.userService
            .findAllInSchool(Object.assign({ school: schoolId }, flags))
            .then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Users Found",
                count: document.length,
                data: document
            };
        });
    }
    async findAllInGroup(groupId) {
        return this.userService
            .findAllInGroup(groupId)
            .then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Users Found",
                count: document.length,
                data: document
            };
        });
    }
    async findById(id) {
        return this.userService.findById(id).then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "User Found",
                data: document
            };
        });
    }
    async createOne(student) {
        return this.userService.createOneOrMany(student).then((document) => {
            return {
                errors: false,
                statusCode: 201,
                message: "User Created",
                data: document
            };
        });
    }
    async updateOne(id, user) {
        const sanitizedUser = _.omit(user, [
            "role",
            "flights",
            "grades",
            "group",
            "payments",
            "program",
            "schools"
        ]);
        return this.userService
            .updateCreateOne(id, sanitizedUser)
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "User Updated",
                data: document
            };
        });
    }
    async deleteOne(id) {
        return this.userService.deleteOne(id).then(() => {
            return {
                errors: false,
                statusCode: 200,
                message: "User deleted",
                data: null
            };
        });
    }
};
StudentControllerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [school_service_1.SchoolService,
        user_service_1.UserService])
], StudentControllerService);
exports.StudentControllerService = StudentControllerService;
//# sourceMappingURL=student.service.js.map
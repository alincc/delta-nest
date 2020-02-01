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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const roles_decorator_1 = require("../../guards/roles.decorator");
const roles_guard_1 = require("../../guards/roles.guard");
const response_interface_1 = require("../../interfaces/response.interface");
const student_service_1 = require("./student.service");
const receive_user_dto_1 = require("../../dtos/receive-user.dto");
const user_interface_1 = require("../../interfaces/user.interface");
let StudentController = class StudentController {
    constructor(studentControllerService) {
        this.studentControllerService = studentControllerService;
    }
    async findAll(response) {
        return this.studentControllerService
            .findAll()
            .then((success) => {
            return response.status(201).json(success);
        })
            .catch(error => {
            return response.status(400).json({
                status: common_1.HttpStatus.BAD_REQUEST,
                error
            });
        });
    }
    async findById(param, response) {
        const id = param["id"];
        return this.studentControllerService
            .findById(id)
            .then((success) => {
            return response.status(201).json(success);
        })
            .catch(error => {
            return response.status(400).json({
                status: common_1.HttpStatus.BAD_REQUEST,
                error
            });
        });
    }
    async createOne(student, response) {
        return this.studentControllerService
            .createOne(student)
            .then((success) => {
            return response.status(201).json(success);
        })
            .catch(error => {
            return response.status(400).json({
                status: common_1.HttpStatus.BAD_REQUEST,
                error
            });
        });
    }
    updateOne(param, student, response) {
        const id = param["id"];
        this.studentControllerService
            .updateOne(id, student)
            .then((success) => {
            return response.status(200).json(success);
        })
            .catch(error => {
            return response.status(400).json({
                status: common_1.HttpStatus.BAD_REQUEST,
                error
            });
        });
    }
    async deleteOne(param, response) {
        const id = param["id"];
        return this.studentControllerService
            .deleteOne(id)
            .then((success) => {
            return response.status(201).json(success);
        })
            .catch(error => {
            return response.status(400).json({
                status: common_1.HttpStatus.BAD_REQUEST,
                error
            });
        });
    }
    async deleteAll(param, response) {
        console.log("ok");
        return this.studentControllerService
            .deleteMany({})
            .then((success) => {
            return response.status(201).json(success);
        })
            .catch(error => {
            return response.status(400).json({
                status: common_1.HttpStatus.BAD_REQUEST,
                error
            });
        });
    }
    async findAllInSchool(param, response, query) {
        const id = param["id"];
        const flags = {
            graduated: query.graduated
        };
        return this.studentControllerService
            .findAllInSchool(id, flags)
            .then((success) => {
            return response.status(201).json(success);
        })
            .catch(error => {
            return response.status(400).json({
                status: common_1.HttpStatus.BAD_REQUEST,
                error
            });
        });
    }
    async findAllInGroup(param, response) {
        const id = param["id"];
        return this.studentControllerService
            .findAllInGroup(id)
            .then((success) => {
            return response.status(201).json(success);
        })
            .catch(error => {
            return response.status(400).json({
                status: common_1.HttpStatus.BAD_REQUEST,
                error
            });
        });
    }
};
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findAll", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE", "STUDENT_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Get(":id"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findById", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receive_user_dto_1.ReceiveUserDto, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "createOne", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Put(":id"),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, receive_user_dto_1.ReceiveUserDto, Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "updateOne", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Delete(":id"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteOne", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Delete(),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteAll", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Get("school/:id"),
    __param(0, common_1.Param()),
    __param(1, common_1.Res()),
    __param(2, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findAllInSchool", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Get("group/:id"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findAllInGroup", null);
StudentController = __decorate([
    common_1.Controller("students"),
    __metadata("design:paramtypes", [student_service_1.StudentControllerService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map
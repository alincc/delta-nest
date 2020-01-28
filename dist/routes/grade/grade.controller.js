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
const grade_service_1 = require("./grade.service");
const receive_grade_dto_1 = require("../../dtos/receive-grade.dto");
const grade_interface_1 = require("../../interfaces/grade.interface");
let GradeController = class GradeController {
    constructor(gradeControllerService) {
        this.gradeControllerService = gradeControllerService;
    }
    async findAll(response) {
        return this.gradeControllerService
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
        return this.gradeControllerService
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
    async createOne(grade, response) {
        return this.gradeControllerService
            .createOne(grade)
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
    updateOne(param, grade, response) {
        const id = param["id"];
        this.gradeControllerService
            .updateOne(id, grade)
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
        return this.gradeControllerService
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
    async findAllInSchool(param, response) {
        const id = param["id"];
        return this.gradeControllerService
            .findAllInSchool(id)
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
    async findAllInSubject(param, response) {
        const id = param["id"];
        return this.gradeControllerService
            .findAllInSubject(id)
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
    async findAllInStudent(param, response) {
        const id = param["id"];
        return this.gradeControllerService
            .findAllInStudent(id)
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
], GradeController.prototype, "findAll", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE", "STUDENT_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Get(":id"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GradeController.prototype, "findById", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receive_grade_dto_1.ReceiveGradeDto, Object]),
    __metadata("design:returntype", Promise)
], GradeController.prototype, "createOne", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Put(":id"),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, receive_grade_dto_1.ReceiveGradeDto, Object]),
    __metadata("design:returntype", void 0)
], GradeController.prototype, "updateOne", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Delete(":id"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GradeController.prototype, "deleteOne", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Get("school/:id"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GradeController.prototype, "findAllInSchool", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Get("subject/:id"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GradeController.prototype, "findAllInSubject", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE", "STUDENT_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Get("student/:id"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GradeController.prototype, "findAllInStudent", null);
GradeController = __decorate([
    common_1.Controller("grades"),
    __metadata("design:paramtypes", [grade_service_1.GradeControllerService])
], GradeController);
exports.GradeController = GradeController;
//# sourceMappingURL=grade.controller.js.map
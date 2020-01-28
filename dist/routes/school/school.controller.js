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
const receive_school_dto_1 = require("../../dtos/receive-school.dto");
const school_service_1 = require("./school.service");
const school_interface_1 = require("../../interfaces/school.interface");
const response_interface_1 = require("../../interfaces/response.interface");
let SchoolController = class SchoolController {
    constructor(schoolControllerService) {
        this.schoolControllerService = schoolControllerService;
    }
    async findAll(response) {
        return this.schoolControllerService
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
        return this.schoolControllerService
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
    async createOne(school, response) {
        return this.schoolControllerService
            .createOne(school)
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
    updateOne(param, school, response) {
        const id = param["id"];
        this.schoolControllerService
            .updateOne(id, school)
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
        return this.schoolControllerService
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
    async findAllInPrincipal(param, response) {
        const id = param["id"];
        return this.schoolControllerService
            .findAllInPrincipal(id)
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
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SchoolController.prototype, "findAll", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE", "STUDENT_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Get(":id"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SchoolController.prototype, "findById", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receive_school_dto_1.ReceiveSchoolDto, Object]),
    __metadata("design:returntype", Promise)
], SchoolController.prototype, "createOne", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Put(":id"),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, receive_school_dto_1.ReceiveSchoolDto, Object]),
    __metadata("design:returntype", void 0)
], SchoolController.prototype, "updateOne", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Delete(":id"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SchoolController.prototype, "deleteOne", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Get("principal/:id"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SchoolController.prototype, "findAllInPrincipal", null);
SchoolController = __decorate([
    common_1.Controller("schools"),
    __metadata("design:paramtypes", [school_service_1.SchoolControllerService])
], SchoolController);
exports.SchoolController = SchoolController;
//# sourceMappingURL=school.controller.js.map
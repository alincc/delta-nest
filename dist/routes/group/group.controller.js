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
const receive_group_dto_1 = require("../../dtos/receive-group.dto");
const passport_1 = require("@nestjs/passport");
const roles_decorator_1 = require("../../guards/roles.decorator");
const roles_guard_1 = require("../../guards/roles.guard");
const group_service_1 = require("./group.service");
const response_interface_1 = require("../../interfaces/response.interface");
const group_interface_1 = require("../../interfaces/group.interface");
let GroupController = class GroupController {
    constructor(groupControllerService) {
        this.groupControllerService = groupControllerService;
    }
    async findAll(response) {
        return this.groupControllerService
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
        return this.groupControllerService
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
    async createOne(group, response) {
        return this.groupControllerService
            .createOne(group)
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
    updateOne(param, group, response) {
        const id = param["id"];
        this.groupControllerService
            .updateOne(id, group)
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
        return this.groupControllerService
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
        return this.groupControllerService
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
    addMember(param, response) {
        const id = param["id"];
        const studentId = param["studentId"];
        this.groupControllerService
            .addMember(id, studentId)
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
    removeMember(param, response) {
        const id = param["id"];
        const studentId = param["studentId"];
        this.groupControllerService
            .removeMember(id, studentId)
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
};
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "findAll", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE", "STUDENT_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Get(":id"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "findById", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receive_group_dto_1.ReceiveGroupDto, Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "createOne", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Put(":id"),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, receive_group_dto_1.ReceiveGroupDto, Object]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "updateOne", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Delete(":id"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "deleteOne", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Get("school/:id"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "findAllInSchool", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Put(":id/student/:studentId"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "addMember", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Delete(":id/student/:studentId"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "removeMember", null);
GroupController = __decorate([
    common_1.Controller("groups"),
    __metadata("design:paramtypes", [group_service_1.GroupControllerService])
], GroupController);
exports.GroupController = GroupController;
//# sourceMappingURL=group.controller.js.map
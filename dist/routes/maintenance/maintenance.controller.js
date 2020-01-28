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
const roles_decorator_1 = require("../../guards/roles.decorator");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../../guards/roles.guard");
const maintenance_service_1 = require("./maintenance.service");
let MaintenanceController = class MaintenanceController {
    constructor(maintenanceControllerService) {
        this.maintenanceControllerService = maintenanceControllerService;
    }
    getCurrentState(response) {
        this.maintenanceControllerService
            .getCurrentState()
            .then(success => {
            return response.status(200).json(success);
        })
            .catch(() => {
            return response.status(500).json({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: "Deletion Failed"
            });
        });
    }
    resetDatabase(response) {
        this.maintenanceControllerService
            .resetDataBase()
            .then(success => {
            return response.status(200).json(success);
        })
            .catch(() => {
            return response.status(500).json({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: "Deletion Failed"
            });
        });
    }
};
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MaintenanceController.prototype, "getCurrentState", null);
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Delete(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MaintenanceController.prototype, "resetDatabase", null);
MaintenanceController = __decorate([
    common_1.Controller("maintenance"),
    __metadata("design:paramtypes", [maintenance_service_1.MaintenanceControllerService])
], MaintenanceController);
exports.MaintenanceController = MaintenanceController;
//# sourceMappingURL=maintenance.controller.js.map
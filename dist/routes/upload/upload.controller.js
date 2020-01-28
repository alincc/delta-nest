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
const multer_1 = require("multer");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
const roles_decorator_1 = require("../../guards/roles.decorator");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../../guards/roles.guard");
const constants_1 = require("./constants");
const upload_service_1 = require("./upload.service");
const response_interface_1 = require("../../interfaces/response.interface");
let UploadController = class UploadController {
    constructor(uploadControllerService) {
        this.uploadControllerService = uploadControllerService;
    }
    async updateAvatar(file, param, response) {
        const avatarUrl = {
            avatarUrl: `${constants_1.SERVER_URL}${file.path}`.replace(/\\/g, "/")
        };
        return this.uploadControllerService
            .updateAvatarUrl(param, avatarUrl)
            .then((success) => {
            return response.status(201).json(success);
        })
            .catch(error => {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error
            }, 400);
        });
    }
    async serveAvatar(params, response) {
        const file = params.file;
        response.sendFile(file, { root: "uploads/avatar" });
    }
};
__decorate([
    roles_decorator_1.Roles("PRINCIPAL_ROLE"),
    common_1.UseGuards(passport_1.AuthGuard("jwt"), roles_guard_1.RolesGuard),
    common_1.Post("avatar/:parent/:id"),
    common_1.UseInterceptors(platform_express_1.FileInterceptor("file", {
        storage: multer_1.diskStorage({
            destination: "./uploads/avatar",
            filename: (req, file, next) => {
                const name = req.params.id;
                return next(null, `${name}${path_1.extname(file.originalname)}`);
            }
        })
    })),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Param()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "updateAvatar", null);
__decorate([
    common_1.Get("avatar/:file"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "serveAvatar", null);
UploadController = __decorate([
    common_1.Controller("uploads"),
    __metadata("design:paramtypes", [upload_service_1.UploadControllerService])
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=upload.controller.js.map
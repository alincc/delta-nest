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
const auth_service_1 = require("./auth.service");
const receive_user_dto_1 = require("../dtos/receive-user.dto");
const user_interface_1 = require("../interfaces/user.interface");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(request, response) {
        const user = request.user;
        return this.authService
            .login(user)
            .then(success => {
            return response.status(200).json(success);
        })
            .catch(error => {
            return response.status(500).json({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: "Student Login Failed Something is Wrong"
            });
        });
    }
    async signUp(user, response) {
        return this.authService
            .signUp(user)
            .then(success => {
            return response.status(201).json(success);
        })
            .catch(error => {
            return response.status(500).json({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: "Student Login Failed Something is Wrong"
            });
        });
    }
    async checkUsername(param, response) {
        this.authService
            .checkUsername(param.username)
            .then(success => {
            return response.status(200).json(success);
        })
            .catch(() => {
            return response.status(404).json({
                status: common_1.HttpStatus.NOT_FOUND,
                error: "Student Not Found"
            });
        });
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard("local")),
    common_1.Post("login"),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post("signUp"),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receive_user_dto_1.ReceiveUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    common_1.Get(":username"),
    __param(0, common_1.Param()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "checkUsername", null);
AuthController = __decorate([
    common_1.Controller("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map
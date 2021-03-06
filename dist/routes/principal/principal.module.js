"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const principal_service_1 = require("./principal.service");
const principal_controller_1 = require("./principal.controller");
const services_module_1 = require("../../services/services.module");
let PrincipalModule = class PrincipalModule {
};
PrincipalModule = __decorate([
    common_1.Module({
        imports: [services_module_1.ServicesModule],
        providers: [principal_service_1.PrincipalControllerService],
        controllers: [principal_controller_1.PrincipalController]
    })
], PrincipalModule);
exports.PrincipalModule = PrincipalModule;
//# sourceMappingURL=principal.module.js.map
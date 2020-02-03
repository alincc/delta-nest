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
const response_interface_1 = require("../../interfaces/response.interface");
const group_service_1 = require("../../services/group.service");
const group_interface_1 = require("../../interfaces/group.interface");
const _ = require("lodash");
const mongoose_1 = require("mongoose");
let GroupControllerService = class GroupControllerService {
    constructor(groupService) {
        this.groupService = groupService;
    }
    async findAll() {
        return this.groupService.findAll().then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Groups Found",
                count: document.length,
                data: document
            };
        });
    }
    async findAllInSchool(schoolId) {
        return this.groupService
            .findAllInSchool(schoolId)
            .then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Groups Found",
                count: document.length,
                data: document
            };
        });
    }
    async findById(id) {
        return this.groupService.findById(id).then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Group Found",
                data: document
            };
        });
    }
    async createOne(group) {
        return this.groupService.createOneOrMany(group).then((document) => {
            return {
                errors: false,
                statusCode: 201,
                message: "Group Created",
                data: document
            };
        });
    }
    async updateOne(id, group) {
        const sanitizedGroup = _.omit(group, ["_id", "school", "members"]);
        return this.groupService
            .updateCreateOne(id, sanitizedGroup)
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "Group Updated",
                data: document
            };
        });
    }
    async addMember(id, studentId) {
        return this.groupService
            .addChild(id, { members: mongoose_1.Types.ObjectId(studentId) })
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "Group Updated",
                data: document
            };
        });
    }
    async removeMember(id, studentId) {
        return this.groupService
            .removeChild(id, { members: mongoose_1.Types.ObjectId(studentId) })
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "Group Updated",
                data: document
            };
        });
    }
    async deleteOne(id) {
        return this.groupService.deleteOne(id).then(() => {
            return {
                errors: false,
                statusCode: 200,
                message: "Group deleted",
                data: null
            };
        });
    }
};
GroupControllerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [group_service_1.GroupService])
], GroupControllerService);
exports.GroupControllerService = GroupControllerService;
//# sourceMappingURL=group.service.js.map
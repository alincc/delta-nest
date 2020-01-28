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
const user_service_1 = require("../../services/user.service");
const group_service_1 = require("../../services/group.service");
const school_service_1 = require("../../services/school.service");
const program_service_1 = require("../../services/program.service");
const subject_service_1 = require("../../services/subject.service");
const school_interface_1 = require("../../interfaces/school.interface");
const group_interface_1 = require("../../interfaces/group.interface");
const program_interface_1 = require("../../interfaces/program.interface");
const subject_iterface_1 = require("../../interfaces/subject.iterface");
const user_interface_1 = require("../../interfaces/user.interface");
let UploadControllerService = class UploadControllerService {
    constructor(userService, schoolService, groupService, programService, subjectService) {
        this.userService = userService;
        this.schoolService = schoolService;
        this.groupService = groupService;
        this.programService = programService;
        this.subjectService = subjectService;
    }
    async updateAvatarUrl(param, avatarUrl) {
        let document;
        switch (param.parent) {
            case "principal":
            case "student":
                document = await this.userService.updateCreateOne(param.id, avatarUrl);
                break;
            case "school":
                document = await this.schoolService.updateCreateOne(param.id, avatarUrl);
                break;
            case "group":
                document = await this.groupService.updateCreateOne(param.id, avatarUrl);
                break;
            case "program":
                document = await this.programService.updateCreateOne(param.id, avatarUrl);
                break;
            case "subject":
                document = await this.subjectService.updateCreateOne(param.id, avatarUrl);
                break;
        }
        return new Promise((resolve, reject) => {
            if (document) {
                resolve({
                    errors: false,
                    statusCode: 201,
                    message: "Avatar Uploaded",
                    data: document
                });
            }
            else {
                reject(new Error("Upload failed"));
            }
        });
    }
};
UploadControllerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        school_service_1.SchoolService,
        group_service_1.GroupService,
        program_service_1.ProgramService,
        subject_service_1.SubjectService])
], UploadControllerService);
exports.UploadControllerService = UploadControllerService;
//# sourceMappingURL=upload.service.js.map
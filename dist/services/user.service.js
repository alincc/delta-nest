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
const mongoose_1 = require("mongoose");
const user_interface_1 = require("../interfaces/user.interface");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAll() {
        return await this.userModel.find().exec();
    }
    async findAllInSchool(options) {
        return await this.userModel
            .find({
            role: "STUDENT_ROLE",
            graduated: options.graduated,
            schools: mongoose_1.Types.ObjectId(options.school)
        })
            .populate("group")
            .exec();
    }
    async findAllInGroup(groupId) {
        return await this.userModel
            .find({
            role: "STUDENT_ROLE",
            group: mongoose_1.Types.ObjectId(groupId)
        })
            .exec();
    }
    async findById(id) {
        return await this.userModel.findById(id).exec();
    }
    async findOne(username) {
        return await this.userModel.findOne({ username }).exec();
    }
    async findByIdAndRole(id, role) {
        return await this.userModel
            .findOne({ _id: mongoose_1.Types.ObjectId(id), role })
            .exec();
    }
    async createOneOrMany(user) {
        return await this.userModel.create(user);
    }
    async updateCreateOne(id, user) {
        return await this.userModel
            .findByIdAndUpdate(id, user, {
            new: true,
            runValidators: true,
            upsert: true
        })
            .exec();
    }
    async updateMany(conditions, newValues) {
        return await this.userModel
            .updateMany(conditions, { $set: newValues })
            .exec();
    }
    async pullMany(conditions, pullProperties) {
        return await this.userModel
            .findOneAndUpdate(conditions, {
            $pullAll: pullProperties
        }, { new: true })
            .exec();
    }
    async deleteOne(id) {
        return await this.userModel
            .findById(id)
            .exec()
            .then((document) => {
            document.remove();
        });
    }
    async deleteMany(conditions) {
        return await this.userModel
            .find(conditions)
            .exec()
            .then((documents) => {
            return documents.forEach(document => {
                document.remove();
            });
        });
    }
    async deleteAll() {
        return await this.userModel.deleteMany({}).exec();
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject("USER_MODEL")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
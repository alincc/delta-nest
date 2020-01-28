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
const school_interface_1 = require("../interfaces/school.interface");
let SchoolService = class SchoolService {
    constructor(schoolModel) {
        this.schoolModel = schoolModel;
    }
    async findAll() {
        return await this.schoolModel.find().exec();
    }
    async findAllInPrincipal(principalId) {
        return await this.schoolModel.find({
            principals: mongoose_1.Types.ObjectId(principalId)
        });
    }
    async findById(id) {
        return await await this.schoolModel.findById(id).exec();
    }
    async findOne(name) {
        return await this.schoolModel.findOne({ name }).exec();
    }
    async createOneOrMany(school) {
        return await this.schoolModel.create(school);
    }
    async updateCreateOne(id, school) {
        return await this.schoolModel
            .findByIdAndUpdate(id, school, {
            new: true,
            runValidators: true,
            upsert: true
        })
            .exec();
    }
    async updateMany(conditions, newValues) {
        return await this.schoolModel
            .updateMany(conditions, { $set: newValues })
            .exec();
    }
    async deleteOne(id) {
        return await this.schoolModel
            .findById(id)
            .exec()
            .then((document) => {
            document.remove();
        });
    }
    async deleteAll() {
        return await this.schoolModel.deleteMany({}).exec();
    }
};
SchoolService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject("SCHOOL_MODEL")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], SchoolService);
exports.SchoolService = SchoolService;
//# sourceMappingURL=school.service.js.map
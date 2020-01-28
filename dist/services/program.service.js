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
const program_interface_1 = require("../interfaces/program.interface");
let ProgramService = class ProgramService {
    constructor(programModel) {
        this.programModel = programModel;
    }
    async findAll() {
        return await this.programModel.find().exec();
    }
    async findAllInSchool(schoolId) {
        return await this.programModel
            .find({
            school: mongoose_1.Types.ObjectId(schoolId)
        })
            .exec();
    }
    async findById(id) {
        return await this.programModel.findById(id).exec();
    }
    async findOne(folio) {
        return await this.programModel.findOne({ folio }).exec();
    }
    async createOneOrMany(program) {
        return await this.programModel.create(program);
    }
    async updateCreateOne(id, program) {
        return await this.programModel
            .findByIdAndUpdate(id, program, {
            new: true,
            runValidators: true,
            upsert: true
        })
            .exec();
    }
    async updateMany(conditions, newValues) {
        return await this.programModel
            .updateMany(conditions, { $set: newValues })
            .exec();
    }
    async addChild(id, pushProperties) {
        return await this.programModel.findOneAndUpdate({ _id: mongoose_1.Types.ObjectId(id) }, {
            $push: pushProperties
        }, { new: true });
    }
    async removeChild(id, pullProperties) {
        return await this.programModel
            .findOneAndUpdate({ _id: mongoose_1.Types.ObjectId(id) }, {
            $pull: pullProperties
        }, { new: true })
            .exec();
    }
    async deleteOne(id) {
        return await this.programModel
            .findById(id)
            .exec()
            .then((document) => {
            document.remove();
        });
    }
    async deleteMany(conditions) {
        return await this.programModel
            .find(conditions)
            .exec()
            .then((documents) => {
            return documents.forEach(document => {
                document.remove();
            });
        });
    }
    async deleteAll() {
        return await this.programModel.deleteMany({}).exec();
    }
};
ProgramService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject("PROGRAM_MODEL")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProgramService);
exports.ProgramService = ProgramService;
//# sourceMappingURL=program.service.js.map
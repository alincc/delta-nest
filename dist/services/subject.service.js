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
const subject_iterface_1 = require("../interfaces/subject.iterface");
const mongoose_1 = require("mongoose");
let SubjectService = class SubjectService {
    constructor(subjectModel) {
        this.subjectModel = subjectModel;
    }
    async findAll() {
        return await this.subjectModel.find().exec();
    }
    async findAllInSchool(schoolId) {
        return await this.subjectModel
            .find({
            school: mongoose_1.Types.ObjectId(schoolId)
        })
            .exec();
    }
    async findAllInProgram(programId) {
        return await this.subjectModel
            .find({
            programs: mongoose_1.Types.ObjectId(programId)
        })
            .exec();
    }
    async findById(id) {
        return await this.subjectModel.findById(id).exec();
    }
    async findOne(folio) {
        return await this.subjectModel.findOne({ folio }).exec();
    }
    async createOneOrMany(subject) {
        return await this.subjectModel.create(subject);
    }
    async updateCreateOne(id, subject) {
        return await this.subjectModel
            .findByIdAndUpdate(id, subject, {
            new: true,
            runValidators: true,
            upsert: true
        })
            .exec();
    }
    async updateMany(conditions, newValues) {
        return await this.subjectModel
            .updateMany(conditions, { $set: newValues })
            .exec();
    }
    async pullMany(conditions, pullProperties) {
        return await this.subjectModel
            .findOneAndUpdate(conditions, {
            $pullAll: { pullProperties }
        }, { new: true })
            .exec();
    }
    async deleteOne(id) {
        return await this.subjectModel
            .findById(id)
            .exec()
            .then((document) => {
            document.remove();
        });
    }
    async deleteMany(conditions) {
        return await this.subjectModel
            .find(conditions)
            .exec()
            .then((documents) => {
            return documents.forEach(document => {
                document.remove();
            });
        });
    }
    async deleteAll() {
        return await this.subjectModel.deleteMany({}).exec();
    }
};
SubjectService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject("SUBJECT_MODEL")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], SubjectService);
exports.SubjectService = SubjectService;
//# sourceMappingURL=subject.service.js.map
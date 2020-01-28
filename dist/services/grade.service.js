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
const grade_interface_1 = require("../interfaces/grade.interface");
let GradeService = class GradeService {
    constructor(gradeModel) {
        this.gradeModel = gradeModel;
    }
    async findAll() {
        return await this.gradeModel.find().exec();
    }
    async findById(id) {
        return await this.gradeModel.findById(id).exec();
    }
    async findAllInSchool(schoolId) {
        return await this.gradeModel
            .find({
            school: mongoose_1.Types.ObjectId(schoolId)
        })
            .exec();
    }
    async findAllInSubject(schoolId) {
        return await this.gradeModel
            .find({
            subject: mongoose_1.Types.ObjectId(schoolId)
        })
            .populate("student")
            .exec();
    }
    async findAllInStudent(studentId) {
        return await this.gradeModel
            .find({
            student: mongoose_1.Types.ObjectId(studentId)
        })
            .populate("subject")
            .exec();
    }
    async createOneOrMany(grade) {
        return await this.gradeModel.create(grade);
    }
    async updateCreateOne(id, grade) {
        return await this.gradeModel
            .findByIdAndUpdate(id, grade, {
            new: true,
            runValidators: true,
            upsert: true
        })
            .exec();
    }
    async updateMany(conditions, newValues) {
        return await this.gradeModel
            .updateMany(conditions, { $set: newValues })
            .exec();
    }
    async addChild(id, pushProperties) {
        return await this.gradeModel.findOneAndUpdate({ _id: mongoose_1.Types.ObjectId(id) }, {
            $push: pushProperties
        }, { new: true });
    }
    async removeChild(id, pullProperties) {
        return await this.gradeModel
            .findOneAndUpdate({ _id: mongoose_1.Types.ObjectId(id) }, {
            $pull: pullProperties
        }, { new: true })
            .exec();
    }
    async deleteOne(id) {
        return await this.gradeModel
            .findById(id)
            .exec()
            .then((document) => {
            document.remove();
        });
    }
    async deleteMany(conditions) {
        return await this.gradeModel
            .find(conditions)
            .exec()
            .then((documents) => {
            return documents.forEach(document => {
                document.remove();
            });
        });
    }
    async deleteAll() {
        return await this.gradeModel.deleteMany({}).exec();
    }
};
GradeService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject("GRADE_MODEL")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], GradeService);
exports.GradeService = GradeService;
//# sourceMappingURL=grade.service.js.map
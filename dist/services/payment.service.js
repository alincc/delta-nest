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
const payment_interface_1 = require("../interfaces/payment.interface");
let PaymentService = class PaymentService {
    constructor(paymentModel) {
        this.paymentModel = paymentModel;
    }
    async findAll() {
        return await this.paymentModel.find().exec();
    }
    async findById(id) {
        return await this.paymentModel.findById(id).exec();
    }
    async findAllInSchool(schoolId) {
        return await this.paymentModel
            .find({
            schools: mongoose_1.Types.ObjectId(schoolId)
        })
            .exec();
    }
    async findAllInStudent(studentId) {
        return await this.paymentModel
            .find({
            student: mongoose_1.Types.ObjectId(studentId)
        })
            .exec();
    }
    async findOne(folio) {
        return await this.paymentModel.findOne({ folio }).exec();
    }
    async createOneOrMany(payment) {
        return await this.paymentModel.create(payment);
    }
    async updateCreateOne(id, payment) {
        return await this.paymentModel
            .findByIdAndUpdate(id, payment, {
            new: true,
            runValidators: true,
            upsert: true
        })
            .exec();
    }
    async updateMany(conditions, newValues) {
        return await this.paymentModel
            .updateMany(conditions, { $set: newValues })
            .exec();
    }
    async deleteOne(id) {
        return await this.paymentModel
            .findById(id)
            .exec()
            .then((document) => {
            document.remove();
        });
    }
    async deleteMany(conditions) {
        return await this.paymentModel
            .find(conditions)
            .exec()
            .then((documents) => {
            return documents.forEach(document => {
                document.remove();
            });
        });
    }
    async deleteAll() {
        return await this.paymentModel.deleteMany({}).exec();
    }
};
PaymentService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject("PAYMENT_MODEL")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map
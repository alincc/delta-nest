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
const payment_service_1 = require("../../services/payment.service");
const payment_interface_1 = require("../../interfaces/payment.interface");
const _ = require("lodash");
let PaymentControllerService = class PaymentControllerService {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async findAll() {
        return this.paymentService.findAll().then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Payments Found",
                count: document.length,
                data: document
            };
        });
    }
    async findAllInSchool(schoolId) {
        return this.paymentService
            .findAllInSchool(schoolId)
            .then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Payments Found",
                count: document.length,
                data: document
            };
        });
    }
    async findAllInStudent(studentId) {
        return this.paymentService
            .findAllInStudent(studentId)
            .then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Payments Found",
                count: document.length,
                data: document
            };
        });
    }
    async findById(id) {
        return this.paymentService.findById(id).then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Payment Found",
                data: document
            };
        });
    }
    async createOne(payment) {
        return this.paymentService
            .createOneOrMany(payment)
            .then((docuemnt) => {
            return {
                errors: false,
                statusCode: 201,
                message: "Payment Created",
                data: docuemnt
            };
        });
    }
    async updateOne(id, payment) {
        const sanitizedPayment = _.omit(payment, ["_id", "student", "school"]);
        return this.paymentService
            .updateCreateOne(id, sanitizedPayment)
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "Payment Updated",
                data: document
            };
        });
    }
    async deleteOne(id) {
        return this.paymentService.deleteOne(id).then(() => {
            return {
                errors: false,
                statusCode: 200,
                message: "Payment deleted",
                data: null
            };
        });
    }
    async checkFolio(folio) {
        return this.paymentService.findOne(folio).then((document) => {
            if (!document) {
                throw new Error();
            }
            return {
                errors: false,
                statusCode: 200,
                message: "Program Found",
                data: document
            };
        });
    }
};
PaymentControllerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentControllerService);
exports.PaymentControllerService = PaymentControllerService;
//# sourceMappingURL=payment.service.js.map
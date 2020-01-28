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
const flight_interface_1 = require("../interfaces/flight.interface");
const mongoose_1 = require("mongoose");
let FlightService = class FlightService {
    constructor(flightModel) {
        this.flightModel = flightModel;
    }
    async findAll() {
        return await this.flightModel.find().exec();
    }
    async findById(id) {
        return await this.flightModel.findById(id).exec();
    }
    async findAllInSchool(schoolId) {
        return await this.flightModel
            .find({
            school: mongoose_1.Types.ObjectId(schoolId)
        })
            .populate({ path: "enlisted approved" })
            .exec();
    }
    async findAllInStudent(studentId) {
        return await this.flightModel
            .find({
            $or: [
                { enlisted: mongoose_1.Types.ObjectId(studentId) },
                { approved: mongoose_1.Types.ObjectId(studentId) }
            ]
        })
            .exec();
    }
    async findOne(folio) {
        return await this.flightModel.findOne({ folio }).exec();
    }
    async createOneOrMany(flight) {
        return await this.flightModel.create(flight);
    }
    async updateCreateOne(id, flight) {
        return await this.flightModel
            .findByIdAndUpdate(id, flight, {
            new: true,
            runValidators: true,
            upsert: true
        })
            .exec();
    }
    async updateMany(conditions, newValues) {
        return await this.flightModel
            .updateMany(conditions, { $set: newValues })
            .exec();
    }
    async addChild(id, pushProperties) {
        return await this.flightModel.findOneAndUpdate({ _id: mongoose_1.Types.ObjectId(id) }, {
            $push: pushProperties
        }, { new: true });
    }
    async removeChild(id, pullProperties) {
        return await this.flightModel
            .findOneAndUpdate({ _id: mongoose_1.Types.ObjectId(id) }, {
            $pull: pullProperties
        }, { new: true })
            .exec();
    }
    async deleteOne(id) {
        return await this.flightModel.deleteOne({ _id: mongoose_1.Types.ObjectId(id) }).exec();
    }
    async deleteMany(conditions) {
        return await this.flightModel.deleteMany(conditions).exec();
    }
    async deleteAll() {
        return await this.flightModel.deleteMany({}).exec();
    }
};
FlightService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject("FLIGHT_MODEL")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map
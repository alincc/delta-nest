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
const flight_service_1 = require("../../services/flight.service");
const flight_interface_1 = require("../../interfaces/flight.interface");
const _ = require("lodash");
const mongoose_1 = require("mongoose");
let FlightControllerService = class FlightControllerService {
    constructor(flightService) {
        this.flightService = flightService;
    }
    async findAll() {
        return this.flightService.findAll().then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Flights Found",
                count: document.length,
                data: document
            };
        });
    }
    async findAllInSchool(schoolId) {
        return this.flightService
            .findAllInSchool(schoolId)
            .then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Flights Found",
                count: document.length,
                data: document
            };
        });
    }
    async findAllInStudent(studentId) {
        return this.flightService
            .findAllInStudent(studentId)
            .then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Flights Found",
                count: document.length,
                data: document
            };
        });
    }
    async findById(id) {
        return this.flightService.findById(id).then((document) => {
            return {
                errors: false,
                statusCode: 200,
                message: "Flight Found",
                data: document
            };
        });
    }
    async createOne(flight) {
        return this.flightService
            .createOneOrMany(flight)
            .then((document) => {
            return {
                errors: false,
                statusCode: 201,
                message: "Flight Created",
                data: document
            };
        });
    }
    async updateOne(id, flight) {
        const sanitizedFlight = _.omit(flight, [
            "_id",
            "enlisted",
            "approved",
            "school",
            "authorizedBy"
        ]);
        return this.flightService
            .updateCreateOne(id, sanitizedFlight)
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "Flight Updated",
                data: document
            };
        });
    }
    async addRecruit(id, studentId) {
        return this.flightService
            .addChild(id, { enlisted: mongoose_1.Types.ObjectId(studentId) })
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "Flight Updated",
                data: document
            };
        });
    }
    async addPilot(id, studentId) {
        return this.flightService
            .addChild(id, { approved: mongoose_1.Types.ObjectId(studentId) })
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "Flight Updated",
                data: document
            };
        });
    }
    async removeStudent(id, studentId) {
        return this.flightService
            .removeChild(id, {
            enlisted: mongoose_1.Types.ObjectId(studentId),
            approved: mongoose_1.Types.ObjectId(studentId)
        })
            .then((document) => {
            document;
            return {
                errors: false,
                statusCode: 200,
                message: "Flight Updated",
                data: document
            };
        });
    }
    async deleteOne(id) {
        return this.flightService.deleteOne(id).then(() => {
            return {
                errors: false,
                statusCode: 200,
                message: "Flight deleted",
                data: null
            };
        });
    }
    async checkFolio(folio) {
        return this.flightService.findOne(folio).then((document) => {
            if (!document) {
                throw new Error();
            }
            return {
                errors: false,
                statusCode: 200,
                message: "Subject Found",
                data: document
            };
        });
    }
};
FlightControllerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [flight_service_1.FlightService])
], FlightControllerService);
exports.FlightControllerService = FlightControllerService;
//# sourceMappingURL=flight.service.js.map
import { Response } from "express";
import { FlightControllerService } from "./flight.service";
import { ReceiveFlightDto } from "src/dtos/receive-flight.dto";
export declare class FlightController {
    private readonly flightControllerService;
    constructor(flightControllerService: FlightControllerService);
    findAll(response: Response): Promise<Response>;
    findById(param: any, response: Response): Promise<Response>;
    createOne(flight: ReceiveFlightDto, response: Response): Promise<Response>;
    updateOne(param: any, flight: ReceiveFlightDto, response: Response): void;
    deleteOne(param: any, response: Response): Promise<Response>;
    findAllInSchool(param: any, response: Response): Promise<Response>;
    findAllInStudent(param: any, response: Response): Promise<Response>;
    addRecruit(param: any, response: Response): void;
    addPilot(param: any, response: Response): void;
    removeStudent(param: any, response: Response): void;
    checkFolio(param: any, response: Response): Promise<Response>;
}

import { IResponse } from "src/interfaces/response.interface";
import { FlightService } from "src/services/flight.service";
import { IFlight } from "src/interfaces/flight.interface";
export declare class FlightControllerService {
    private readonly flightService;
    constructor(flightService: FlightService);
    findAll(): Promise<IResponse>;
    findAllInSchool(schoolId: string): Promise<IResponse>;
    findAllInStudent(studentId: string): Promise<IResponse>;
    findById(id: string): Promise<IResponse>;
    createOne(flight: IFlight): Promise<IResponse>;
    updateOne(id: string, flight: IFlight): Promise<IResponse>;
    addRecruit(id: string, studentId: string): Promise<IResponse>;
    addPilot(id: string, studentId: string): Promise<IResponse>;
    removeStudent(id: string, studentId: string): Promise<IResponse>;
    deleteOne(id: string): Promise<IResponse>;
    checkFolio(folio: string): Promise<IResponse>;
}

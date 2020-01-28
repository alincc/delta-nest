import { ReceiveSchoolDto } from "src/dtos/receive-school.dto";
import { SchoolControllerService } from "./school.service";
import { Response } from "express";
export declare class SchoolController {
    private readonly schoolControllerService;
    constructor(schoolControllerService: SchoolControllerService);
    findAll(response: Response): Promise<Response>;
    findById(param: any, response: Response): Promise<Response>;
    createOne(school: ReceiveSchoolDto, response: Response): Promise<Response>;
    updateOne(param: any, school: ReceiveSchoolDto, response: Response): void;
    deleteOne(param: any, response: Response): Promise<Response>;
    findAllInPrincipal(param: any, response: Response): Promise<Response>;
}

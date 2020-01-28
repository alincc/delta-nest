import { Response } from "express";
import { GradeControllerService } from "./grade.service";
import { ReceiveGradeDto } from "src/dtos/receive-grade.dto";
export declare class GradeController {
    private readonly gradeControllerService;
    constructor(gradeControllerService: GradeControllerService);
    findAll(response: Response): Promise<Response>;
    findById(param: any, response: Response): Promise<Response>;
    createOne(grade: ReceiveGradeDto, response: Response): Promise<Response>;
    updateOne(param: any, grade: ReceiveGradeDto, response: Response): void;
    deleteOne(param: any, response: Response): Promise<Response>;
    findAllInSchool(param: any, response: Response): Promise<Response>;
    findAllInSubject(param: any, response: Response): Promise<Response>;
    findAllInStudent(param: any, response: Response): Promise<Response>;
}

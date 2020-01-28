import { Response } from "express";
import { SubjectControllerService } from "./subject.service";
import { ReceiveSubjectDto } from "src/dtos/receive-subject";
export declare class SubjectController {
    private readonly subjectControllerService;
    constructor(subjectControllerService: SubjectControllerService);
    findAll(response: Response): Promise<Response>;
    findById(param: any, response: Response): Promise<Response>;
    createOne(subject: ReceiveSubjectDto, response: Response): Promise<Response>;
    updateOne(param: any, subject: ReceiveSubjectDto, response: Response): void;
    deleteOne(param: any, response: Response): Promise<Response>;
    findAllInSchool(param: any, response: Response): Promise<Response>;
    findAllInProgram(param: any, response: Response): Promise<Response>;
    checkFolio(param: any, response: Response): Promise<Response>;
}

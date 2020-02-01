import { Response } from "express";
import { StudentControllerService } from "./student.service";
import { ReceiveUserDto } from "src/dtos/receive-user.dto";
export declare class StudentController {
    private readonly studentControllerService;
    constructor(studentControllerService: StudentControllerService);
    findAll(response: Response): Promise<Response>;
    findById(param: any, response: Response): Promise<Response>;
    createOne(student: ReceiveUserDto, response: Response): Promise<Response>;
    updateOne(param: any, student: ReceiveUserDto, response: Response): void;
    deleteOne(param: any, response: Response): Promise<Response>;
    deleteAll(param: any, response: Response): Promise<Response>;
    findAllInSchool(param: any, response: Response, query: any): Promise<Response>;
    findAllInGroup(param: any, response: Response): Promise<Response>;
}

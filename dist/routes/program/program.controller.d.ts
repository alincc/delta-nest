import { Response } from "express";
import { ProgramControllerService } from "./program.service";
import { ReceiveProgramDto } from "src/dtos/receive-program.dto";
export declare class ProgramController {
    private readonly programControllerService;
    constructor(programControllerService: ProgramControllerService);
    findAll(response: Response): Promise<Response>;
    findById(param: any, response: Response): Promise<Response>;
    createOne(program: ReceiveProgramDto, response: Response): Promise<Response>;
    updateOne(param: any, program: ReceiveProgramDto, response: Response): void;
    deleteOne(param: any, response: Response): Promise<Response>;
    findAllInSchool(param: any, response: Response): Promise<Response>;
    addSubject(param: any, response: Response): void;
    removeSubject(param: any, response: Response): void;
    checkFolio(param: any, response: Response): Promise<Response>;
}

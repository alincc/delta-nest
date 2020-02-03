import { ProgramService } from "src/services/program.service";
import { IResponse } from "src/interfaces/response.interface";
import { IProgram } from "src/interfaces/program.interface";
export declare class ProgramControllerService {
    private readonly programService;
    constructor(programService: ProgramService);
    findAll(): Promise<IResponse>;
    findAllInSchool(schoolId: string): Promise<IResponse>;
    findById(id: string): Promise<IResponse>;
    createOne(group: IProgram): Promise<IResponse>;
    updateOne(id: string, program: IProgram): Promise<IResponse>;
    addSubject(id: string, subjectId: string): Promise<IResponse>;
    removeSubject(id: string, subjectId: string): Promise<IResponse>;
    deleteOne(id: string): Promise<IResponse>;
    checkFolio(folio: string): Promise<IResponse>;
}

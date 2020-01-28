import { IResponse } from "src/interfaces/response.interface";
import { SubjectService } from "src/services/subject.service";
import { ISubject } from "src/interfaces/subject.iterface";
export declare class SubjectControllerService {
    private readonly subjectService;
    constructor(subjectService: SubjectService);
    findAll(): Promise<IResponse>;
    findAllInSchool(schoolId: string): Promise<IResponse>;
    findAllInProgram(programId: string): Promise<IResponse>;
    findById(id: string): Promise<IResponse>;
    createOne(subject: ISubject): Promise<IResponse>;
    updateOne(id: string, subject: ISubject): Promise<IResponse>;
    deleteOne(id: string): Promise<IResponse>;
    checkFolio(folio: string): Promise<IResponse>;
}

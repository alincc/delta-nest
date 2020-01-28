import { IResponse } from "src/interfaces/response.interface";
import { GradeService } from "src/services/grade.service";
import { IGrade } from "src/interfaces/grade.interface";
export declare class GradeControllerService {
    private readonly gradeService;
    constructor(gradeService: GradeService);
    findAll(): Promise<IResponse>;
    findAllInSchool(schoolId: string): Promise<IResponse>;
    findAllInSubject(schoolId: string): Promise<IResponse>;
    findAllInStudent(studentId: string): Promise<IResponse>;
    findById(id: string): Promise<IResponse>;
    createOne(grade: IGrade): Promise<IResponse>;
    updateOne(id: string, grade: IGrade): Promise<IResponse>;
    deleteOne(id: string): Promise<IResponse>;
}

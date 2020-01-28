import { ISchool } from "src/interfaces/school.interface";
import { UserService } from "src/services/user.service";
import { SchoolService } from "src/services/school.service";
import { IResponse } from "src/interfaces/response.interface";
export declare class SchoolControllerService {
    private readonly userService;
    private readonly schoolService;
    constructor(userService: UserService, schoolService: SchoolService);
    findAll(): Promise<IResponse>;
    findAllInPrincipal(principalId: string): Promise<IResponse>;
    findById(id: string): Promise<IResponse>;
    createOne(school: ISchool): Promise<IResponse>;
    updateOne(id: string, school: ISchool): Promise<IResponse>;
    deleteOne(id: string): Promise<IResponse>;
}

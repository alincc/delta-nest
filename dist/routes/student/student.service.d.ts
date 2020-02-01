import { IUser } from "src/interfaces/user.interface";
import { SchoolService } from "src/services/school.service";
import { IResponse } from "src/interfaces/response.interface";
import { UserService } from "src/services/user.service";
export declare class StudentControllerService {
    private readonly schoolService;
    private readonly userService;
    constructor(schoolService: SchoolService, userService: UserService);
    findAll(): Promise<IResponse>;
    findAllInSchool(schoolId: string, flags?: {
        graduated?: boolean;
    }): Promise<IResponse>;
    findAllInGroup(groupId: string): Promise<IResponse>;
    findById(id: string): Promise<IResponse>;
    createOne(student: IUser): Promise<IResponse>;
    updateOne(id: string, user: IUser): Promise<IResponse>;
    deleteOne(id: string): Promise<IResponse>;
    deleteMany(conditions: any): Promise<IResponse>;
}

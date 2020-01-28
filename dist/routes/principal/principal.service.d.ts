import { IUser } from "src/interfaces/user.interface";
import { UserService } from "src/services/user.service";
import { IResponse } from "src/interfaces/response.interface";
export declare class PrincipalControllerService {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<IResponse>;
    findAllInSchool(schoolId: string): Promise<IResponse>;
    findById(id: string): Promise<IResponse>;
    findByIdAndRole(id: string): Promise<IResponse>;
    createOne(user: IUser): Promise<IResponse>;
    updateOne(id: string, user: IUser): Promise<IResponse>;
    deleteOne(id: string): Promise<IResponse>;
}

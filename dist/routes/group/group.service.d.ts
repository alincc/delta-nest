import { IResponse } from "src/interfaces/response.interface";
import { GroupService } from "src/services/group.service";
import { IGroup } from "src/interfaces/group.interface";
export declare class GroupControllerService {
    private readonly groupService;
    constructor(groupService: GroupService);
    findAll(): Promise<IResponse>;
    findAllInSchool(schoolId: string): Promise<IResponse>;
    findById(id: string): Promise<IResponse>;
    createOne(group: IGroup): Promise<IResponse>;
    updateOne(id: string, group: IGroup): Promise<IResponse>;
    addMember(id: string, studentId: string): Promise<IResponse>;
    removeMember(id: string, studentId: string): Promise<IResponse>;
    deleteOne(id: string): Promise<IResponse>;
}

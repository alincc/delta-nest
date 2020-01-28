import { ReceiveGroupDto } from "src/dtos/receive-group.dto";
import { GroupControllerService } from "./group.service";
import { Response } from "express";
export declare class GroupController {
    private readonly groupControllerService;
    constructor(groupControllerService: GroupControllerService);
    findAll(response: Response): Promise<Response>;
    findById(param: any, response: Response): Promise<Response>;
    createOne(group: ReceiveGroupDto, response: Response): Promise<Response>;
    updateOne(param: any, group: ReceiveGroupDto, response: Response): void;
    deleteOne(param: any, response: Response): Promise<Response>;
    findAllInSchool(param: any, response: Response): Promise<Response>;
    addMember(param: any, response: Response): void;
    removeMember(param: any, response: Response): void;
}

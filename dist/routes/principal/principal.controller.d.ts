import { Response } from "express";
import { PrincipalControllerService } from "./principal.service";
import { ReceiveUserDto } from "src/dtos/receive-user.dto";
export declare class PrincipalController {
    private readonly principalControllerService;
    constructor(principalControllerService: PrincipalControllerService);
    findAll(response: Response): Promise<Response>;
    findById(param: any, response: Response): Promise<Response>;
    createOne(principal: ReceiveUserDto, response: Response): Promise<Response>;
    updateOne(param: any, principal: ReceiveUserDto, response: Response): void;
    deleteOne(param: any, response: Response): Promise<Response>;
    findAllInSchool(param: any, response: Response): Promise<Response>;
}

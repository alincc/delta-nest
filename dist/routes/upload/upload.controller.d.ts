import { Response } from "express";
import { UploadControllerService } from "./upload.service";
export declare class UploadController {
    private readonly uploadControllerService;
    constructor(uploadControllerService: UploadControllerService);
    updateAvatar(file: any, param: any, response: Response): Promise<Response>;
    serveAvatar(params: any, response: Response): Promise<any>;
}

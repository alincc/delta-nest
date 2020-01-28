import { MaintenanceControllerService } from "./maintenance.service";
import { Response } from "express";
export declare class MaintenanceController {
    private readonly maintenanceControllerService;
    constructor(maintenanceControllerService: MaintenanceControllerService);
    getCurrentState(response: Response): void;
    resetDatabase(response: Response): void;
}

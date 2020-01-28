import { AuthService } from "src/auth/auth.service";
import { ReceiveUserDto } from "src/dtos/receive-user.dto";
import { Response } from "express";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(request: any, response: any): Promise<any>;
    signUp(user: ReceiveUserDto, response: any): Promise<any>;
    checkUsername(param: any, response: Response): Promise<void>;
}

import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/services/user.service";
import { IUser } from "src/interfaces/user.interface";
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validate(username: string, password: string): Promise<any>;
    login(user: IUser): Promise<any>;
    signUp(user: IUser): Promise<any>;
    checkUsername(username: string): Promise<{
        errors: boolean;
        statusCode: number;
        message: string;
        data: Pick<any, string | number | symbol>;
    }>;
}

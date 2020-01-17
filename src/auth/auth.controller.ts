import {
  Controller,
  UseGuards,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Req,
  Res
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "src/auth/auth.service";
import { ReceiveUserDto } from "src/dtos/receive-user.dto";
import { IUser } from "src/interfaces/user.interface";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard("local"))
  @Post("login")
  async login(@Req() request, @Res() response) {
    const user = request.user;
    return this.authService
      .login(user as IUser)
      .then(success => {
        return response.status(200).json(success);
      })
      .catch(error => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: "Student Login Failed Something is Wrong"
          },
          500
        );
      });
  }

  @Post("signUp")
  async signUp(@Body() user: ReceiveUserDto, @Res() response) {
    return this.authService
      .signUp((user as unknown) as IUser)
      .then(success => {
        return response.status(201).json(success);
      })
      .catch(error => {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: "Student Already Exists, Use student login instead"
          },
          400
        );
      });
  }
}

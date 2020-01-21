import {
  Controller,
  UseGuards,
  Post,
  Body,
  HttpStatus,
  Req,
  Res,
  Get,
  Param
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "src/auth/auth.service";
import { ReceiveUserDto } from "src/dtos/receive-user.dto";
import { IUser } from "src/interfaces/user.interface";
import { Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  ////////////////////////////////////////
  //          POST FUNCTIONS
  ////////////////////////////////////////

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
        return response.status(500).json({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: "Student Login Failed Something is Wrong"
        });
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
        return response.status(500).json({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: "Student Login Failed Something is Wrong"
        });
      });
  }

  ////////////////////////////////////////
  //          GET VALIDATION FUNCTIONS
  ////////////////////////////////////////

  @Get(":username")
  async checkUsername(@Param() param, @Res() response: Response) {
    this.authService
      .checkUsername(param.username)
      .then(success => {
        return response.status(200).json(success);
      })
      .catch(() => {
        return response.status(404).json({
          status: HttpStatus.NOT_FOUND,
          error: "Student Not Found"
        });
      });
  }
}

import {
  Controller,
  UseGuards,
  Post,
  Body,
  HttpException,
  HttpStatus
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthStudentService } from "src/auth/auth-student.service";
import { ReceivePrincipalDto } from "src/dtos/receive-principal";
import { ReceiveStudentDto } from "src/dtos/receive-student.dto";
import { IStudent } from "src/interfaces/student.iterface";
import { IPrincipal } from "src/interfaces/principal.interface";
import { AuthPrincipalService } from "./auth-principal.service";

@Controller()
export class AuthController {
  constructor(
    private readonly authStudentService: AuthStudentService,
    private readonly authPrincipalService: AuthPrincipalService
  ) {}

  @UseGuards(AuthGuard("local-student"))
  @Post("login/student")
  async loginStudent(@Body() student: ReceiveStudentDto) {
    return this.authStudentService
      .loginStudent(student as IStudent)
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

  @UseGuards(AuthGuard("jwt-principal"))
  @Post("signUp/student")
  async signUpwStudent(@Body() student: ReceiveStudentDto) {
    return this.authStudentService
      .signUpStudent(student as IStudent)
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

  @UseGuards(AuthGuard("local-principal"))
  @Post("login/principal")
  async loginPrincipal(@Body() principal: ReceivePrincipalDto) {
    return this.authPrincipalService
      .loginPrincipal(principal as IPrincipal)
      .catch(error => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: "Principal Login Failed Something is Wrong"
          },
          500
        );
      });
  }

  @Post("signUp/principal")
  async signUpPrincipal(@Body() principal: ReceivePrincipalDto) {
    return this.authPrincipalService
      .signUpPrincipal(principal as IPrincipal)
      .catch(error => {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: "Principal Already Exists, Use principal login instead"
          },
          400
        );
      });
  }
}

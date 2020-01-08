import {
  Controller,
  UseGuards,
  Post,
  Body,
  HttpException,
  HttpStatus
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthStudentService } from "src/auth/student/auth-student.service";
import { ReceiveStudentDto } from "src/dtos/receive-student.dto";
import { IStudent } from "src/interfaces/student.iterface";

@Controller("student")
export class AuthStudentController {
  constructor(private readonly authStudentService: AuthStudentService) {}

  @UseGuards(AuthGuard("local-student"))
  @Post("login")
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
  @Post("signUp")
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
}

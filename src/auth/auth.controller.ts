import { Controller, UseGuards, Post, Body } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "src/auth/auth.service";
import { ReceivePrincipalDto } from "src/dtos/receive-principal";
import { ReceiveStudentDto } from "src/dtos/receive-student.dto";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard("local-student"))
  @Post("login/student")
  async loginStudent(@Body() student: ReceiveStudentDto) {
    return this.authService.loginStudent(student);
  }

  @UseGuards(AuthGuard("local-principal"))
  @Post("login/principal")
  async loginPrincipal(@Body() principal: ReceivePrincipalDto) {
    return this.authService.loginPrincipal(principal);
  }

  @Post("login/principal")
  async signUpPrincipal(@Body() principal: ReceivePrincipalDto) {
    return this.authService.loginPrincipal(principal);
  }
}

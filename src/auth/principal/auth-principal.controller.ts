import {
  Controller,
  UseGuards,
  Post,
  Body,
  HttpException,
  HttpStatus
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ReceivePrincipalDto } from "src/dtos/receive-principal";
import { IPrincipal } from "src/interfaces/principal.interface";
import { AuthPrincipalService } from "./auth-principal.service";

@Controller("principal")
export class AuthPrincipalController {
  constructor(private readonly authPrincipalService: AuthPrincipalService) {}

  @UseGuards(AuthGuard("local-principal"))
  @Post("login")
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

  @Post("signUp")
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

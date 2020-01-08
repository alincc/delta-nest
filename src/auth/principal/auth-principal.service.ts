import { Injectable } from "@nestjs/common";
import { StudentService } from "../../services/student.service";
import { JwtService } from "@nestjs/jwt";
import { PrincipalService } from "src/services/principal.service";
import { IStudent } from "src/interfaces/student.iterface";
import { IPrincipal } from "src/interfaces/principal.interface";
import { Principal } from "src/database/models/principal.model";
import { access } from "fs";

@Injectable()
export class AuthPrincipalService {
  constructor(
    private readonly principalService: PrincipalService,
    private readonly jwtService: JwtService
  ) {}

  async validatePrincipal(username: string, password: string): Promise<any> {
    const user = await this.principalService.findOne(username);
    if (user && user.password == password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginPrincipal(principal: IPrincipal): Promise<any> {
    const payload = { username: principal.username, sub: principal._id };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  async signUpPrincipal(principal: IPrincipal): Promise<any> {
    this.principalService
      .findOrCreate(principal)
      .then(([document, created]: [Principal, boolean]) => {
        if (!created) {
          return this.loginPrincipal(document as IPrincipal);
        }
        return new Error();
      });
  }
}

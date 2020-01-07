import { Injectable } from "@nestjs/common";
import { StudentService } from "../services/student.service";
import { JwtService } from "@nestjs/jwt";
import { PrincipalService } from "src/services/principal.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly studentService: StudentService,
    private readonly principalService: PrincipalService,
    private readonly jwtService: JwtService
  ) {}

  async validateStudent(username: string, password: string): Promise<any> {
    const user = await this.studentService.findOne(username);
    if (user && user.password == password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validatePrincipal(username: string, password: string): Promise<any> {
    const user = await this.principalService.findOne(username);
    if (user && user.password == password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginStudent(student: any) {
    const payload = { username: student.username, sub: student._id };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  async loginPrincipal(principal: any) {
    const payload = { username: principal.username, sub: principal._id };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}

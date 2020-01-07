import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class LocalStudentStrategy extends PassportStrategy(
  Strategy,
  "local-student"
) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const student = await this.authService.validateStudent(username, password);
    if (!student) {
      throw new UnauthorizedException();
    }
    return student;
  }
}

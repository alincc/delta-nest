import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthStudentService } from "../auth/auth-student.service";

@Injectable()
export class LocalStudentStrategy extends PassportStrategy(
  Strategy,
  "local-student"
) {
  constructor(private readonly authStudentService: AuthStudentService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const student = await this.authStudentService.validateStudent(
      username,
      password
    );
    if (!student) {
      throw new UnauthorizedException();
    }
    return student;
  }
}

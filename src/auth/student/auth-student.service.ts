import { Injectable } from "@nestjs/common";
import { StudentService } from "../../services/student.service";
import { JwtService } from "@nestjs/jwt";
import { IStudent } from "src/interfaces/student.iterface";
import { Student } from "src/database/models/student.model";

@Injectable()
export class AuthStudentService {
  constructor(
    private readonly studentService: StudentService,
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

  async loginStudent(student: IStudent): Promise<any> {
    const payload = { username: student.username, sub: student._id };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  async signUpStudent(student: IStudent): Promise<any> {
    this.studentService
      .findOrCreate(student)
      .then(([document, created]: [Student, boolean]) => {
        if (!created) {
          return this.loginStudent(document as IStudent);
        }
        return new Error();
      });
  }
}

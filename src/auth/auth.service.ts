import { Injectable } from '@nestjs/common';
import { StudentService } from '../services/student.service';
import { JwtService } from '@nestjs/jwt';
import { PrincipalService } from 'src/services/principal.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly studentService: StudentService,
    private readonly principalService: PrincipalService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.studentService.findOne(username);
    if (user && user.password == password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateSchool(username: string, password: string): Promise<any> {
    const user = await this.principalService.findOne(username);
    if (user && user.password == password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginUser(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async loginSchool(school: any) {
    const payload = { username: school.username, sub: school.schoolId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUpSchool(school: any) {
    const payload = { username: school.username, sub: school.schoolId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

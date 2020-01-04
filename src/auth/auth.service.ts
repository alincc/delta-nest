import { Injectable } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { SchoolsService } from 'src/services/schools.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly schoolsService: SchoolsService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password == password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateSchool(username: string, password: string): Promise<any> {
    const user = await this.schoolsService.findOne(username);
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
}

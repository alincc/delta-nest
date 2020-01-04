import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LocalSchoolStrategy extends PassportStrategy(
  Strategy,
  'local-school',
) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const school = await this.authService.validateSchool(username, password);
    if (!school) {
      throw new UnauthorizedException();
    }
    return school;
  }
}

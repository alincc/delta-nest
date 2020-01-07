import { Controller, UseGuards, Post, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local-user'))
  @Post('login/user')
  async loginUser(@Request() req) {
    return this.authService.loginUser(req.user);
  }

  @UseGuards(AuthGuard('local-school'))
  @Post('login/school')
  async loginSchool(@Request() req) {
    return this.authService.loginSchool(req.user);
  }

  @Post('/signup/school')
  async signUpSchool(@Request() req) {
    return this.authService.loginSchool(req.user);
  }
}

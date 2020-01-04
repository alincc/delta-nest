import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/services/services.module';
import { PassportModule } from '@nestjs/passport';
import { LocalUserStrategy } from '../guards/local-user.strategy';
import { JwtUserStrategy } from '../guards/jwt-user.strategy';
import { AuthService } from 'src/auth/auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LocalSchoolStrategy } from '../guards/local-school.strategy';
import { JwtSchoolStrategy } from '../guards/jwt-school.strategy';

@Module({
  imports: [
    ServicesModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    AuthService,
    LocalUserStrategy,
    JwtUserStrategy,
    LocalSchoolStrategy,
    JwtSchoolStrategy,
  ],
  exports: [
    AuthService,
    LocalUserStrategy,
    JwtUserStrategy,
    LocalSchoolStrategy,
    JwtSchoolStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}

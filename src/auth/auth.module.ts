import { Module } from "@nestjs/common";
import { ServicesModule } from "src/services/services.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";

import { AuthPrincipalController } from "./principal/auth-principal.controller";
import { AuthStudentController } from "./student/auth-student.controller";

import { LocalStudentStrategy } from "src/guards/local-student.strategy";
import { JwtStudentStrategy } from "src/guards/jwt-student.strategy";
import { JwtPrincipalStrategy } from "src/guards/jwt-principal.strategy";
import { LocalPrincipalStrategy } from "src/guards/local-principal.strategy";

import { AuthStudentService } from "./student/auth-student.service";
import { AuthPrincipalService } from "./principal/auth-principal.service";

@Module({
  imports: [
    ServicesModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "1d" }
    })
  ],
  providers: [
    AuthStudentService,
    AuthPrincipalService,
    LocalStudentStrategy,
    JwtStudentStrategy,
    LocalPrincipalStrategy,
    JwtPrincipalStrategy
  ],
  exports: [
    AuthStudentService,
    AuthPrincipalService,
    LocalStudentStrategy,
    JwtStudentStrategy,
    LocalPrincipalStrategy,
    JwtPrincipalStrategy
  ],
  controllers: [AuthPrincipalController, AuthStudentController]
})
export class AuthModule {}

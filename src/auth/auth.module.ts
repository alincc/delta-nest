import { Module } from "@nestjs/common";
import { ServicesModule } from "src/services/services.module";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "src/auth/auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { LocalStudentStrategy } from "src/guards/local-student.strategy";
import { JwtStudentStrategy } from "src/guards/jwt-student.strategy";
import { JwtPrincipalStrategy } from "src/guards/jwt-principal.strategy";
import { LocalPrincipalStrategy } from "src/guards/local-principal.strategy";

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
    AuthService,
    LocalStudentStrategy,
    JwtStudentStrategy,
    LocalPrincipalStrategy,
    JwtPrincipalStrategy
  ],
  exports: [
    AuthService,
    LocalStudentStrategy,
    JwtStudentStrategy,
    LocalPrincipalStrategy,
    JwtPrincipalStrategy
  ],
  controllers: [AuthController]
})
export class AuthModule {}

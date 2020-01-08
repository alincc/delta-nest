import { Module } from "@nestjs/common";
import { ServicesModule } from "src/services/services.module";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { LocalStudentStrategy } from "src/guards/local-student.strategy";
import { JwtStudentStrategy } from "src/guards/jwt-student.strategy";
import { JwtPrincipalStrategy } from "src/guards/jwt-principal.strategy";
import { LocalPrincipalStrategy } from "src/guards/local-principal.strategy";
import { AuthStudentService } from "./auth-student.service";
import { AuthPrincipalService } from "./auth-principal.service";

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
  controllers: [AuthController]
})
export class AuthModule {}

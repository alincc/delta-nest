import { Module } from "@nestjs/common";
import { ServicesModule } from "src/services/services.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";

import { AuthController } from "./auth.controller";

import { JwtStrategy } from "src/guards/jwt.strategy";
import { LocalStrategy } from "src/guards/local.strategy";

import { AuthService } from "./auth.service";

@Module({
  imports: [
    ServicesModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "1d" }
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}

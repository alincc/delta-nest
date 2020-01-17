import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { jwtConstants } from "../auth/constants";
import { UserService } from "src/services/user.service";
import { IUser } from "src/interfaces/user.interface";

import * as _ from "lodash";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret
    });
  }

  async validate(payload: any) {
    return this.userService.findById(payload.sub).then((document: IUser) => {
      return _.omit(document.toObject(), "password");
    });
  }
}

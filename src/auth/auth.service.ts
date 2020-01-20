import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/services/user.service";
import { IUser } from "src/interfaces/user.interface";

import * as _ from "lodash";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validate(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && user.password == password) {
      let data = _.omit(user.toObject(), "password");
      return data;
    }
    return null;
  }

  async login(user: IUser): Promise<any> {
    const payload = { username: user.username, sub: user._id };
    return {
      errors: false,
      statusCode: 200,
      message: "User Logged In",
      data: {
        access_token: this.jwtService.sign(payload),
        ...user
      }
    };
  }

  async signUp(user: IUser): Promise<any> {
    return this.userService.createOneOrMany(user).then((document: IUser) => {
      let data = _.omit(document.toObject(), "password");
      return {
        errors: false,
        statusCode: 201,
        message: "User created",
        data
      };
    });
  }

  async checkUsername(username: string) {
    return this.userService.findByUsername(username).then((document: IUser) => {
      let data = _.omit(document.toObject(), "password");

      return {
        errors: false,
        statusCode: 201,
        message: "User Found",
        data
      };
    });
  }
}

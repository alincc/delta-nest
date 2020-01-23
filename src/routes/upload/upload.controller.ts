import {
  Controller,
  UseInterceptors,
  UploadedFile,
  Post,
  Res,
  Param,
  UseGuards,
  HttpException,
  HttpStatus,
  Get
} from "@nestjs/common";
import { diskStorage } from "multer";
import { extname } from "path";

import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";
import { Roles } from "src/guards/roles.decorator";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "src/guards/roles.guard";
import { SERVER_URL } from "./constants";
import { UploadControllerService } from "./upload.service";
import { IResponse } from "src/interfaces/response.interface";

@Controller("uploads")
export class UploadController {
  constructor(
    private readonly uploadControllerService: UploadControllerService
  ) {}

  @Roles("PRINCIPAL_ROLE")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Post("avatar/:parent/:id")
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./uploads/avatar",
        filename: (req, file, next) => {
          const name = req.params.id;
          return next(null, `${name}${extname(file.originalname)}`);
        }
      })
    })
  )
  async updateAvatar(
    @UploadedFile() file,
    @Param() param,
    @Res() response: Response
  ) {
    const avatarUrl = {
      avatarUrl: `${SERVER_URL}${file.path}`.replace(/\\/g, "/")
    };
    return this.uploadControllerService
      .updateAvatarUrl(param, avatarUrl)
      .then((success: IResponse) => {
        return response.status(201).json(success);
      })
      .catch(error => {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error
          },
          400
        );
      });
  }

  @Get("avatar/:file")
  async serveAvatar(@Param() params, @Res() response: Response): Promise<any> {
    const file = params.file;
    response.sendFile(file, { root: "uploads/avatar" });
  }
}

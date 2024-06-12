import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AiApplicationService } from "./aiapplication.service";
import { VideoDto } from "../aiApplication/VideoDto";
import { DetectedFaceDto } from "../aiApplication/DetectedFaceDto";
import { RecognizedFaceDto } from "../aiApplication/RecognizedFaceDto";
import { ImageDto } from "../aiApplication/ImageDto";

@swagger.ApiTags("aiApplications")
@common.Controller("aiApplications")
export class AiApplicationController {
  constructor(protected readonly service: AiApplicationService) {}

  @common.Post("/detect-faces-image")
  @swagger.ApiOkResponse({
    type: DetectedFaceDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DetectFacesInImage(
    @common.Body()
    body: VideoDto
  ): Promise<DetectedFaceDto[]> {
        return this.service.DetectFacesInImage(body);
      }

  @common.Post("/detect-faces-video")
  @swagger.ApiOkResponse({
    type: DetectedFaceDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DetectFacesInVideo(
    @common.Body()
    body: VideoDto
  ): Promise<DetectedFaceDto[]> {
        return this.service.DetectFacesInVideo(body);
      }

  @common.Post("/recognize-faces")
  @swagger.ApiOkResponse({
    type: RecognizedFaceDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RecognizeFaces(
    @common.Body()
    body: VideoDto
  ): Promise<RecognizedFaceDto[]> {
        return this.service.RecognizeFaces(body);
      }

  @common.Post("/upload-image")
  @swagger.ApiOkResponse({
    type: ImageDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadImage(
    @common.Body()
    body: VideoDto
  ): Promise<ImageDto> {
        return this.service.UploadImage(body);
      }

  @common.Post("/upload-video")
  @swagger.ApiOkResponse({
    type: VideoDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadVideo(
    @common.Body()
    body: VideoDto
  ): Promise<VideoDto> {
        return this.service.UploadVideo(body);
      }
}

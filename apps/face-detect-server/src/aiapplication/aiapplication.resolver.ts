import * as graphql from "@nestjs/graphql";
import { DetectedFaceDto } from "../aiApplication/DetectedFaceDto";
import { RecognizedFaceDto } from "../aiApplication/RecognizedFaceDto";
import { ImageDto } from "../aiApplication/ImageDto";
import { VideoDto } from "../aiApplication/VideoDto";
import { AiApplicationService } from "./aiapplication.service";

export class AiApplicationResolver {
  constructor(protected readonly service: AiApplicationService) {}

  @graphql.Mutation(() => [DetectedFaceDto])
  async DetectFacesInImage(
    @graphql.Args("args")
    args: string
  ): Promise<DetectedFaceDto[]> {
    return this.service.DetectFacesInImage(args);
  }

  @graphql.Mutation(() => [DetectedFaceDto])
  async DetectFacesInVideo(
    @graphql.Args("args")
    args: string
  ): Promise<DetectedFaceDto[]> {
    return this.service.DetectFacesInVideo(args);
  }

  @graphql.Mutation(() => [RecognizedFaceDto])
  async RecognizeFaces(
    @graphql.Args("args")
    args: string
  ): Promise<RecognizedFaceDto[]> {
    return this.service.RecognizeFaces(args);
  }

  @graphql.Mutation(() => ImageDto)
  async UploadImage(
    @graphql.Args()
    args: ImageDto
  ): Promise<ImageDto> {
    return this.service.UploadImage(args);
  }

  @graphql.Mutation(() => VideoDto)
  async UploadVideo(
    @graphql.Args()
    args: VideoDto
  ): Promise<VideoDto> {
    return this.service.UploadVideo(args);
  }
}

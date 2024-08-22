import { Injectable } from "@nestjs/common";
import { DetectedFaceDto } from "../aiApplication/DetectedFaceDto";
import { RecognizedFaceDto } from "../aiApplication/RecognizedFaceDto";
import { ImageDto } from "../aiApplication/ImageDto";
import { VideoDto } from "../aiApplication/VideoDto";

@Injectable()
export class AiApplicationService {
  constructor() {}
  async DetectFacesInImage(args: string): Promise<DetectedFaceDto[]> {
    throw new Error("Not implemented");
  }
  async DetectFacesInVideo(args: string): Promise<DetectedFaceDto[]> {
    throw new Error("Not implemented");
  }
  async RecognizeFaces(args: string): Promise<RecognizedFaceDto[]> {
    throw new Error("Not implemented");
  }
  async UploadImage(args: ImageDto): Promise<ImageDto> {
    throw new Error("Not implemented");
  }
  async UploadVideo(args: VideoDto): Promise<VideoDto> {
    throw new Error("Not implemented");
  }
}

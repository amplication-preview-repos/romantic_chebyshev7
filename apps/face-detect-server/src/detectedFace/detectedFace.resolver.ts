import * as graphql from "@nestjs/graphql";
import { DetectedFaceResolverBase } from "./base/detectedFace.resolver.base";
import { DetectedFace } from "./base/DetectedFace";
import { DetectedFaceService } from "./detectedFace.service";

@graphql.Resolver(() => DetectedFace)
export class DetectedFaceResolver extends DetectedFaceResolverBase {
  constructor(protected readonly service: DetectedFaceService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { RecognizedFaceResolverBase } from "./base/recognizedFace.resolver.base";
import { RecognizedFace } from "./base/RecognizedFace";
import { RecognizedFaceService } from "./recognizedFace.service";

@graphql.Resolver(() => RecognizedFace)
export class RecognizedFaceResolver extends RecognizedFaceResolverBase {
  constructor(protected readonly service: RecognizedFaceService) {
    super(service);
  }
}

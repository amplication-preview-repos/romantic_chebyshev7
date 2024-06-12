import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DetectedFaceService } from "./detectedFace.service";
import { DetectedFaceControllerBase } from "./base/detectedFace.controller.base";

@swagger.ApiTags("detectedFaces")
@common.Controller("detectedFaces")
export class DetectedFaceController extends DetectedFaceControllerBase {
  constructor(protected readonly service: DetectedFaceService) {
    super(service);
  }
}

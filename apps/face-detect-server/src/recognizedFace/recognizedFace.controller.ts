import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecognizedFaceService } from "./recognizedFace.service";
import { RecognizedFaceControllerBase } from "./base/recognizedFace.controller.base";

@swagger.ApiTags("recognizedFaces")
@common.Controller("recognizedFaces")
export class RecognizedFaceController extends RecognizedFaceControllerBase {
  constructor(protected readonly service: RecognizedFaceService) {
    super(service);
  }
}

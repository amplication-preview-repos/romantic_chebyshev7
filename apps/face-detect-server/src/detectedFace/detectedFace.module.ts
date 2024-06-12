import { Module } from "@nestjs/common";
import { DetectedFaceModuleBase } from "./base/detectedFace.module.base";
import { DetectedFaceService } from "./detectedFace.service";
import { DetectedFaceController } from "./detectedFace.controller";
import { DetectedFaceResolver } from "./detectedFace.resolver";

@Module({
  imports: [DetectedFaceModuleBase],
  controllers: [DetectedFaceController],
  providers: [DetectedFaceService, DetectedFaceResolver],
  exports: [DetectedFaceService],
})
export class DetectedFaceModule {}

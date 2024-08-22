import { Module } from "@nestjs/common";
import { RecognizedFaceModuleBase } from "./base/recognizedFace.module.base";
import { RecognizedFaceService } from "./recognizedFace.service";
import { RecognizedFaceController } from "./recognizedFace.controller";
import { RecognizedFaceResolver } from "./recognizedFace.resolver";

@Module({
  imports: [RecognizedFaceModuleBase],
  controllers: [RecognizedFaceController],
  providers: [RecognizedFaceService, RecognizedFaceResolver],
  exports: [RecognizedFaceService],
})
export class RecognizedFaceModule {}

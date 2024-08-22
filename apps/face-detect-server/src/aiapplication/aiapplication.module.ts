import { Module } from "@nestjs/common";
import { AiApplicationService } from "./aiapplication.service";
import { AiApplicationController } from "./aiapplication.controller";
import { AiApplicationResolver } from "./aiapplication.resolver";

@Module({
  controllers: [AiApplicationController],
  providers: [AiApplicationService, AiApplicationResolver],
  exports: [AiApplicationService],
})
export class AiApplicationModule {}

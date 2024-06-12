import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DetectedFaceServiceBase } from "./base/detectedFace.service.base";

@Injectable()
export class DetectedFaceService extends DetectedFaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecognizedFaceServiceBase } from "./base/recognizedFace.service.base";

@Injectable()
export class RecognizedFaceService extends RecognizedFaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

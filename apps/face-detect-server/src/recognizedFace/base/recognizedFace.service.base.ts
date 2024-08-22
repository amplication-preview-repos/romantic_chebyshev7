/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  RecognizedFace as PrismaRecognizedFace,
  DetectedFace as PrismaDetectedFace,
} from "@prisma/client";

export class RecognizedFaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RecognizedFaceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.recognizedFace.count(args);
  }

  async recognizedFaces(
    args: Prisma.RecognizedFaceFindManyArgs
  ): Promise<PrismaRecognizedFace[]> {
    return this.prisma.recognizedFace.findMany(args);
  }
  async recognizedFace(
    args: Prisma.RecognizedFaceFindUniqueArgs
  ): Promise<PrismaRecognizedFace | null> {
    return this.prisma.recognizedFace.findUnique(args);
  }
  async createRecognizedFace(
    args: Prisma.RecognizedFaceCreateArgs
  ): Promise<PrismaRecognizedFace> {
    return this.prisma.recognizedFace.create(args);
  }
  async updateRecognizedFace(
    args: Prisma.RecognizedFaceUpdateArgs
  ): Promise<PrismaRecognizedFace> {
    return this.prisma.recognizedFace.update(args);
  }
  async deleteRecognizedFace(
    args: Prisma.RecognizedFaceDeleteArgs
  ): Promise<PrismaRecognizedFace> {
    return this.prisma.recognizedFace.delete(args);
  }

  async getDetectedFace(parentId: string): Promise<PrismaDetectedFace | null> {
    return this.prisma.recognizedFace
      .findUnique({
        where: { id: parentId },
      })
      .detectedFace();
  }
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RecognizedFaceService } from "../recognizedFace.service";
import { RecognizedFaceCreateInput } from "./RecognizedFaceCreateInput";
import { RecognizedFace } from "./RecognizedFace";
import { RecognizedFaceFindManyArgs } from "./RecognizedFaceFindManyArgs";
import { RecognizedFaceWhereUniqueInput } from "./RecognizedFaceWhereUniqueInput";
import { RecognizedFaceUpdateInput } from "./RecognizedFaceUpdateInput";

export class RecognizedFaceControllerBase {
  constructor(protected readonly service: RecognizedFaceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RecognizedFace })
  async createRecognizedFace(
    @common.Body() data: RecognizedFaceCreateInput
  ): Promise<RecognizedFace> {
    return await this.service.createRecognizedFace({
      data: {
        ...data,

        detectedFace: data.detectedFace
          ? {
              connect: data.detectedFace,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        detectedFace: {
          select: {
            id: true,
          },
        },

        id: true,
        personId: true,
        recognitionDate: true,
        recognitionScore: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [RecognizedFace] })
  @ApiNestedQuery(RecognizedFaceFindManyArgs)
  async recognizedFaces(
    @common.Req() request: Request
  ): Promise<RecognizedFace[]> {
    const args = plainToClass(RecognizedFaceFindManyArgs, request.query);
    return this.service.recognizedFaces({
      ...args,
      select: {
        createdAt: true,

        detectedFace: {
          select: {
            id: true,
          },
        },

        id: true,
        personId: true,
        recognitionDate: true,
        recognitionScore: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RecognizedFace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async recognizedFace(
    @common.Param() params: RecognizedFaceWhereUniqueInput
  ): Promise<RecognizedFace | null> {
    const result = await this.service.recognizedFace({
      where: params,
      select: {
        createdAt: true,

        detectedFace: {
          select: {
            id: true,
          },
        },

        id: true,
        personId: true,
        recognitionDate: true,
        recognitionScore: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RecognizedFace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRecognizedFace(
    @common.Param() params: RecognizedFaceWhereUniqueInput,
    @common.Body() data: RecognizedFaceUpdateInput
  ): Promise<RecognizedFace | null> {
    try {
      return await this.service.updateRecognizedFace({
        where: params,
        data: {
          ...data,

          detectedFace: data.detectedFace
            ? {
                connect: data.detectedFace,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          detectedFace: {
            select: {
              id: true,
            },
          },

          id: true,
          personId: true,
          recognitionDate: true,
          recognitionScore: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: RecognizedFace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRecognizedFace(
    @common.Param() params: RecognizedFaceWhereUniqueInput
  ): Promise<RecognizedFace | null> {
    try {
      return await this.service.deleteRecognizedFace({
        where: params,
        select: {
          createdAt: true,

          detectedFace: {
            select: {
              id: true,
            },
          },

          id: true,
          personId: true,
          recognitionDate: true,
          recognitionScore: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
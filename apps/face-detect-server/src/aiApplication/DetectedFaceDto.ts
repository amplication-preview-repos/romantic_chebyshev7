import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("DetectedFaceDtoObject")
class DetectedFaceDto {
    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    image?: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    video?: string;

    @Field(() => GraphQLJSON)
    boundingBox!: InputJsonValue;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    detectionDate?: Date;
}

export { DetectedFaceDto as DetectedFaceDto };
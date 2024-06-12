import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("RecognizedFaceDtoObject")
class RecognizedFaceDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    detectedFace!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    personId!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    recognitionScore!: number;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    recognitionDate?: Date;
}

export { RecognizedFaceDto as RecognizedFaceDto };
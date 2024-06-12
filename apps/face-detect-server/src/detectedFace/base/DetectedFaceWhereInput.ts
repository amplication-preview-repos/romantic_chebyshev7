/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JsonFilter } from "../../util/JsonFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../../image/base/ImageWhereUniqueInput";
import { RecognizedFaceListRelationFilter } from "../../recognizedFace/base/RecognizedFaceListRelationFilter";
import { VideoWhereUniqueInput } from "../../video/base/VideoWhereUniqueInput";

@InputType()
class DetectedFaceWhereInput {
  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  boundingBox?: JsonFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  detectionDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ImageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImageWhereUniqueInput)
  @IsOptional()
  @Field(() => ImageWhereUniqueInput, {
    nullable: true,
  })
  image?: ImageWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => RecognizedFaceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RecognizedFaceListRelationFilter)
  @IsOptional()
  @Field(() => RecognizedFaceListRelationFilter, {
    nullable: true,
  })
  recognizedFaces?: RecognizedFaceListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => VideoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VideoWhereUniqueInput)
  @IsOptional()
  @Field(() => VideoWhereUniqueInput, {
    nullable: true,
  })
  video?: VideoWhereUniqueInput;
}

export { DetectedFaceWhereInput as DetectedFaceWhereInput };
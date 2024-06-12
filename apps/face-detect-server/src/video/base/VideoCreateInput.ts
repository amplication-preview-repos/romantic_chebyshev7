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
import { DetectedFaceCreateNestedManyWithoutVideosInput } from "./DetectedFaceCreateNestedManyWithoutVideosInput";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class VideoCreateInput {
  @ApiProperty({
    required: false,
    type: () => DetectedFaceCreateNestedManyWithoutVideosInput,
  })
  @ValidateNested()
  @Type(() => DetectedFaceCreateNestedManyWithoutVideosInput)
  @IsOptional()
  @Field(() => DetectedFaceCreateNestedManyWithoutVideosInput, {
    nullable: true,
  })
  detectedFaces?: DetectedFaceCreateNestedManyWithoutVideosInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  file?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fileName?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  uploadDate?: Date | null;
}

export { VideoCreateInput as VideoCreateInput };

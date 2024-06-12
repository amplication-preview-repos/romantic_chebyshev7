/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RecognizedFaceWhereInput } from "./RecognizedFaceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RecognizedFaceOrderByInput } from "./RecognizedFaceOrderByInput";

@ArgsType()
class RecognizedFaceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RecognizedFaceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RecognizedFaceWhereInput, { nullable: true })
  @Type(() => RecognizedFaceWhereInput)
  where?: RecognizedFaceWhereInput;

  @ApiProperty({
    required: false,
    type: [RecognizedFaceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RecognizedFaceOrderByInput], { nullable: true })
  @Type(() => RecognizedFaceOrderByInput)
  orderBy?: Array<RecognizedFaceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RecognizedFaceFindManyArgs as RecognizedFaceFindManyArgs };
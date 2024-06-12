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
import { DetectedFaceWhereUniqueInput } from "./DetectedFaceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DetectedFaceUpdateInput } from "./DetectedFaceUpdateInput";

@ArgsType()
class UpdateDetectedFaceArgs {
  @ApiProperty({
    required: true,
    type: () => DetectedFaceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DetectedFaceWhereUniqueInput)
  @Field(() => DetectedFaceWhereUniqueInput, { nullable: false })
  where!: DetectedFaceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DetectedFaceUpdateInput,
  })
  @ValidateNested()
  @Type(() => DetectedFaceUpdateInput)
  @Field(() => DetectedFaceUpdateInput, { nullable: false })
  data!: DetectedFaceUpdateInput;
}

export { UpdateDetectedFaceArgs as UpdateDetectedFaceArgs };

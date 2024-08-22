import { DetectedFaceWhereUniqueInput } from "../detectedFace/DetectedFaceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RecognizedFaceWhereInput = {
  detectedFace?: DetectedFaceWhereUniqueInput;
  id?: StringFilter;
  personId?: StringNullableFilter;
  recognitionDate?: DateTimeNullableFilter;
  recognitionScore?: FloatNullableFilter;
};

import { DetectedFaceListRelationFilter } from "../detectedFace/DetectedFaceListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type VideoWhereInput = {
  detectedFaces?: DetectedFaceListRelationFilter;
  file?: JsonFilter;
  fileName?: StringNullableFilter;
  id?: StringFilter;
  uploadDate?: DateTimeNullableFilter;
};

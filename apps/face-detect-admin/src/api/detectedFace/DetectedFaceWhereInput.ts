import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { RecognizedFaceListRelationFilter } from "../recognizedFace/RecognizedFaceListRelationFilter";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type DetectedFaceWhereInput = {
  boundingBox?: JsonFilter;
  detectionDate?: DateTimeNullableFilter;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  recognizedFaces?: RecognizedFaceListRelationFilter;
  video?: VideoWhereUniqueInput;
};

import { InputJsonValue } from "../../types";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { RecognizedFaceCreateNestedManyWithoutDetectedFacesInput } from "./RecognizedFaceCreateNestedManyWithoutDetectedFacesInput";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type DetectedFaceCreateInput = {
  boundingBox?: InputJsonValue;
  detectionDate?: Date | null;
  image?: ImageWhereUniqueInput | null;
  recognizedFaces?: RecognizedFaceCreateNestedManyWithoutDetectedFacesInput;
  video?: VideoWhereUniqueInput | null;
};

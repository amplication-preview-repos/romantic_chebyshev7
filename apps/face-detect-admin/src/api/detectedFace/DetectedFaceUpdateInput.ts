import { InputJsonValue } from "../../types";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { RecognizedFaceUpdateManyWithoutDetectedFacesInput } from "./RecognizedFaceUpdateManyWithoutDetectedFacesInput";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type DetectedFaceUpdateInput = {
  boundingBox?: InputJsonValue;
  detectionDate?: Date | null;
  image?: ImageWhereUniqueInput | null;
  recognizedFaces?: RecognizedFaceUpdateManyWithoutDetectedFacesInput;
  video?: VideoWhereUniqueInput | null;
};

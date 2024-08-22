import { DetectedFaceUpdateManyWithoutImagesInput } from "./DetectedFaceUpdateManyWithoutImagesInput";
import { InputJsonValue } from "../../types";

export type ImageUpdateInput = {
  detectedFaces?: DetectedFaceUpdateManyWithoutImagesInput;
  file?: InputJsonValue;
  fileName?: string | null;
  uploadDate?: Date | null;
};

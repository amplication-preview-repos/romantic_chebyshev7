import { DetectedFaceCreateNestedManyWithoutImagesInput } from "./DetectedFaceCreateNestedManyWithoutImagesInput";
import { InputJsonValue } from "../../types";

export type ImageCreateInput = {
  detectedFaces?: DetectedFaceCreateNestedManyWithoutImagesInput;
  file?: InputJsonValue;
  fileName?: string | null;
  uploadDate?: Date | null;
};

import { DetectedFaceUpdateManyWithoutVideosInput } from "./DetectedFaceUpdateManyWithoutVideosInput";
import { InputJsonValue } from "../../types";

export type VideoUpdateInput = {
  detectedFaces?: DetectedFaceUpdateManyWithoutVideosInput;
  file?: InputJsonValue;
  fileName?: string | null;
  uploadDate?: Date | null;
};

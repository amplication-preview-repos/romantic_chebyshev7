import { DetectedFaceCreateNestedManyWithoutVideosInput } from "./DetectedFaceCreateNestedManyWithoutVideosInput";
import { InputJsonValue } from "../../types";

export type VideoCreateInput = {
  detectedFaces?: DetectedFaceCreateNestedManyWithoutVideosInput;
  file?: InputJsonValue;
  fileName?: string | null;
  uploadDate?: Date | null;
};

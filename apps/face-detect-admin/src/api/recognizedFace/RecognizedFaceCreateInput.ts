import { DetectedFaceWhereUniqueInput } from "../detectedFace/DetectedFaceWhereUniqueInput";

export type RecognizedFaceCreateInput = {
  detectedFace?: DetectedFaceWhereUniqueInput | null;
  personId?: string | null;
  recognitionDate?: Date | null;
  recognitionScore?: number | null;
};

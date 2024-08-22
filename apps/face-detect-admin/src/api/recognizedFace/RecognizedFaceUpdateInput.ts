import { DetectedFaceWhereUniqueInput } from "../detectedFace/DetectedFaceWhereUniqueInput";

export type RecognizedFaceUpdateInput = {
  detectedFace?: DetectedFaceWhereUniqueInput | null;
  personId?: string | null;
  recognitionDate?: Date | null;
  recognitionScore?: number | null;
};

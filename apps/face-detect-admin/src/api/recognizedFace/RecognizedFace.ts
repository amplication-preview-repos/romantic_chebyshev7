import { DetectedFace } from "../detectedFace/DetectedFace";

export type RecognizedFace = {
  createdAt: Date;
  detectedFace?: DetectedFace | null;
  id: string;
  personId: string | null;
  recognitionDate: Date | null;
  recognitionScore: number | null;
  updatedAt: Date;
};

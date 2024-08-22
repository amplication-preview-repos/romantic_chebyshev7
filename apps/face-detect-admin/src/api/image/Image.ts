import { DetectedFace } from "../detectedFace/DetectedFace";
import { JsonValue } from "type-fest";

export type Image = {
  createdAt: Date;
  detectedFaces?: Array<DetectedFace>;
  file: JsonValue;
  fileName: string | null;
  id: string;
  updatedAt: Date;
  uploadDate: Date | null;
};

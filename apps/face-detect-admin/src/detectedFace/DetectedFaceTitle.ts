import { DetectedFace as TDetectedFace } from "../api/detectedFace/DetectedFace";

export const DETECTEDFACE_TITLE_FIELD = "id";

export const DetectedFaceTitle = (record: TDetectedFace): string => {
  return record.id?.toString() || String(record.id);
};

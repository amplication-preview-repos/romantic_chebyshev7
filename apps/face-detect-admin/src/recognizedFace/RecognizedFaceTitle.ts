import { RecognizedFace as TRecognizedFace } from "../api/recognizedFace/RecognizedFace";

export const RECOGNIZEDFACE_TITLE_FIELD = "personId";

export const RecognizedFaceTitle = (record: TRecognizedFace): string => {
  return record.personId?.toString() || String(record.id);
};

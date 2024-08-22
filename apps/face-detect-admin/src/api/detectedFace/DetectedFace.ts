import { JsonValue } from "type-fest";
import { Image } from "../image/Image";
import { RecognizedFace } from "../recognizedFace/RecognizedFace";
import { Video } from "../video/Video";

export type DetectedFace = {
  boundingBox: JsonValue;
  createdAt: Date;
  detectionDate: Date | null;
  id: string;
  image?: Image | null;
  recognizedFaces?: Array<RecognizedFace>;
  updatedAt: Date;
  video?: Video | null;
};

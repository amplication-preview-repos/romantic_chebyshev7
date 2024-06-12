import { SortOrder } from "../../util/SortOrder";

export type DetectedFaceOrderByInput = {
  boundingBox?: SortOrder;
  createdAt?: SortOrder;
  detectionDate?: SortOrder;
  id?: SortOrder;
  imageId?: SortOrder;
  updatedAt?: SortOrder;
  videoId?: SortOrder;
};

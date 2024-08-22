import { SortOrder } from "../../util/SortOrder";

export type RecognizedFaceOrderByInput = {
  createdAt?: SortOrder;
  detectedFaceId?: SortOrder;
  id?: SortOrder;
  personId?: SortOrder;
  recognitionDate?: SortOrder;
  recognitionScore?: SortOrder;
  updatedAt?: SortOrder;
};

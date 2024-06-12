import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  file?: SortOrder;
  fileName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
};

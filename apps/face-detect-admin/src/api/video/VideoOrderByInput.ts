import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  createdAt?: SortOrder;
  file?: SortOrder;
  fileName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
};

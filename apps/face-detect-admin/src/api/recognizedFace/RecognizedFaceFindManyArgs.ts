import { RecognizedFaceWhereInput } from "./RecognizedFaceWhereInput";
import { RecognizedFaceOrderByInput } from "./RecognizedFaceOrderByInput";

export type RecognizedFaceFindManyArgs = {
  where?: RecognizedFaceWhereInput;
  orderBy?: Array<RecognizedFaceOrderByInput>;
  skip?: number;
  take?: number;
};

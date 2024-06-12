import { DetectedFaceWhereInput } from "./DetectedFaceWhereInput";
import { DetectedFaceOrderByInput } from "./DetectedFaceOrderByInput";

export type DetectedFaceFindManyArgs = {
  where?: DetectedFaceWhereInput;
  orderBy?: Array<DetectedFaceOrderByInput>;
  skip?: number;
  take?: number;
};

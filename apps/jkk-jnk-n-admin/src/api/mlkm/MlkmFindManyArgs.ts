import { MlkmWhereInput } from "./MlkmWhereInput";
import { MlkmOrderByInput } from "./MlkmOrderByInput";

export type MlkmFindManyArgs = {
  where?: MlkmWhereInput;
  orderBy?: Array<MlkmOrderByInput>;
  skip?: number;
  take?: number;
};

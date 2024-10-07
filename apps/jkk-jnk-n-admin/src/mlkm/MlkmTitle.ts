import { Mlkm as TMlkm } from "../api/mlkm/Mlkm";

export const MLKM_TITLE_FIELD = "id";

export const MlkmTitle = (record: TMlkm): string => {
  return record.id?.toString() || String(record.id);
};

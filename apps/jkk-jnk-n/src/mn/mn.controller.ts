import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MnService } from "./mn.service";

@swagger.ApiTags("mns")
@common.Controller("mns")
export class MnController {
  constructor(protected readonly service: MnService) {}
}

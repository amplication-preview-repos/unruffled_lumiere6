import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MlkmService } from "./mlkm.service";
import { MlkmControllerBase } from "./base/mlkm.controller.base";

@swagger.ApiTags("mlkms")
@common.Controller("mlkms")
export class MlkmController extends MlkmControllerBase {
  constructor(
    protected readonly service: MlkmService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

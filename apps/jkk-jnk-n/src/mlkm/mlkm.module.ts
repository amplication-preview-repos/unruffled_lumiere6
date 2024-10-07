import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MlkmModuleBase } from "./base/mlkm.module.base";
import { MlkmService } from "./mlkm.service";
import { MlkmController } from "./mlkm.controller";
import { MlkmResolver } from "./mlkm.resolver";

@Module({
  imports: [MlkmModuleBase, forwardRef(() => AuthModule)],
  controllers: [MlkmController],
  providers: [MlkmService, MlkmResolver],
  exports: [MlkmService],
})
export class MlkmModule {}

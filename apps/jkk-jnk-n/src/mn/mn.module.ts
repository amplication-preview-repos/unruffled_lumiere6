import { Module } from "@nestjs/common";
import { MnService } from "./mn.service";
import { MnController } from "./mn.controller";
import { MnResolver } from "./mn.resolver";

@Module({
  controllers: [MnController],
  providers: [MnService, MnResolver],
  exports: [MnService],
})
export class MnModule {}

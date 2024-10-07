import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MlkmServiceBase } from "./base/mlkm.service.base";

@Injectable()
export class MlkmService extends MlkmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Mlkm as PrismaMlkm } from "@prisma/client";

export class MlkmServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MlkmCountArgs, "select">): Promise<number> {
    return this.prisma.mlkm.count(args);
  }

  async mlkms(args: Prisma.MlkmFindManyArgs): Promise<PrismaMlkm[]> {
    return this.prisma.mlkm.findMany(args);
  }
  async mlkm(args: Prisma.MlkmFindUniqueArgs): Promise<PrismaMlkm | null> {
    return this.prisma.mlkm.findUnique(args);
  }
  async createMlkm(args: Prisma.MlkmCreateArgs): Promise<PrismaMlkm> {
    return this.prisma.mlkm.create(args);
  }
  async updateMlkm(args: Prisma.MlkmUpdateArgs): Promise<PrismaMlkm> {
    return this.prisma.mlkm.update(args);
  }
  async deleteMlkm(args: Prisma.MlkmDeleteArgs): Promise<PrismaMlkm> {
    return this.prisma.mlkm.delete(args);
  }
}

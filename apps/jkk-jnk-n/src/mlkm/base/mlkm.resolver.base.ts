/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Mlkm } from "./Mlkm";
import { MlkmCountArgs } from "./MlkmCountArgs";
import { MlkmFindManyArgs } from "./MlkmFindManyArgs";
import { MlkmFindUniqueArgs } from "./MlkmFindUniqueArgs";
import { DeleteMlkmArgs } from "./DeleteMlkmArgs";
import { MlkmService } from "../mlkm.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Mlkm)
export class MlkmResolverBase {
  constructor(
    protected readonly service: MlkmService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Mlkm",
    action: "read",
    possession: "any",
  })
  async _mlkmsMeta(
    @graphql.Args() args: MlkmCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Mlkm])
  @nestAccessControl.UseRoles({
    resource: "Mlkm",
    action: "read",
    possession: "any",
  })
  async mlkms(@graphql.Args() args: MlkmFindManyArgs): Promise<Mlkm[]> {
    return this.service.mlkms(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Mlkm, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Mlkm",
    action: "read",
    possession: "own",
  })
  async mlkm(@graphql.Args() args: MlkmFindUniqueArgs): Promise<Mlkm | null> {
    const result = await this.service.mlkm(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Mlkm)
  @nestAccessControl.UseRoles({
    resource: "Mlkm",
    action: "delete",
    possession: "any",
  })
  async deleteMlkm(@graphql.Args() args: DeleteMlkmArgs): Promise<Mlkm | null> {
    try {
      return await this.service.deleteMlkm(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

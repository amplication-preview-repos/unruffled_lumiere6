import * as graphql from "@nestjs/graphql";
import { MnService } from "./mn.service";

export class MnResolver {
  constructor(protected readonly service: MnService) {}
}

// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListHostedZonesCommand,
  ListHostedZonesCommandInput,
  ListHostedZonesCommandOutput,
} from "../commands/ListHostedZonesCommand";
import { Route53Client } from "../Route53Client";
import { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Route53Client,
  input: ListHostedZonesCommandInput,
  ...args: any
): Promise<ListHostedZonesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHostedZonesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListHostedZones(
  config: Route53PaginationConfiguration,
  input: ListHostedZonesCommandInput,
  ...additionalArguments: any
): Paginator<ListHostedZonesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHostedZonesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof Route53Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53 | Route53Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

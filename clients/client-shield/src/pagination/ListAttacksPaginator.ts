// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListAttacksCommand, ListAttacksCommandInput, ListAttacksCommandOutput } from "../commands/ListAttacksCommand";
import { ShieldClient } from "../ShieldClient";
import { ShieldPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ShieldClient,
  input: ListAttacksCommandInput,
  ...args: any
): Promise<ListAttacksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttacksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAttacks(
  config: ShieldPaginationConfiguration,
  input: ListAttacksCommandInput,
  ...additionalArguments: any
): Paginator<ListAttacksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAttacksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ShieldClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Shield | ShieldClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

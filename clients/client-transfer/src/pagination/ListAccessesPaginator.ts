// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAccessesCommand,
  ListAccessesCommandInput,
  ListAccessesCommandOutput,
} from "../commands/ListAccessesCommand";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TransferClient,
  input: ListAccessesCommandInput,
  ...args: any
): Promise<ListAccessesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAccesses(
  config: TransferPaginationConfiguration,
  input: ListAccessesCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof TransferClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Transfer | TransferClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

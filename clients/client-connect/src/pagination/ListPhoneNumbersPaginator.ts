// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPhoneNumbersCommand,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput,
} from "../commands/ListPhoneNumbersCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListPhoneNumbersCommandInput,
  ...args: any
): Promise<ListPhoneNumbersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPhoneNumbersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPhoneNumbers(
  config: ConnectPaginationConfiguration,
  input: ListPhoneNumbersCommandInput,
  ...additionalArguments: any
): Paginator<ListPhoneNumbersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPhoneNumbersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

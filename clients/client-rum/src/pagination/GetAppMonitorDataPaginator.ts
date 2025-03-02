// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetAppMonitorDataCommand,
  GetAppMonitorDataCommandInput,
  GetAppMonitorDataCommandOutput,
} from "../commands/GetAppMonitorDataCommand";
import { RUMClient } from "../RUMClient";
import { RUMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RUMClient,
  input: GetAppMonitorDataCommandInput,
  ...args: any
): Promise<GetAppMonitorDataCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAppMonitorDataCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetAppMonitorData(
  config: RUMPaginationConfiguration,
  input: GetAppMonitorDataCommandInput,
  ...additionalArguments: any
): Paginator<GetAppMonitorDataCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetAppMonitorDataCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof RUMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RUM | RUMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

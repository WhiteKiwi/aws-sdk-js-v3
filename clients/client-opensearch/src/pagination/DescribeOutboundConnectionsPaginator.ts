// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeOutboundConnectionsCommand,
  DescribeOutboundConnectionsCommandInput,
  DescribeOutboundConnectionsCommandOutput,
} from "../commands/DescribeOutboundConnectionsCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OpenSearchClient,
  input: DescribeOutboundConnectionsCommandInput,
  ...args: any
): Promise<DescribeOutboundConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOutboundConnectionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeOutboundConnections(
  config: OpenSearchPaginationConfiguration,
  input: DescribeOutboundConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOutboundConnectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeOutboundConnectionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpenSearchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearch | OpenSearchClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListExperienceEntitiesCommand,
  ListExperienceEntitiesCommandInput,
  ListExperienceEntitiesCommandOutput,
} from "../commands/ListExperienceEntitiesCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KendraClient,
  input: ListExperienceEntitiesCommandInput,
  ...args: any
): Promise<ListExperienceEntitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExperienceEntitiesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListExperienceEntities(
  config: KendraPaginationConfiguration,
  input: ListExperienceEntitiesCommandInput,
  ...additionalArguments: any
): Paginator<ListExperienceEntitiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExperienceEntitiesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof KendraClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kendra | KendraClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

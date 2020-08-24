import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListEntitiesForPolicyCommand,
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput,
} from "../commands/ListEntitiesForPolicyCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IAMClient,
  input: ListEntitiesForPolicyCommandInput,
  ...args: any
): Promise<ListEntitiesForPolicyCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEntitiesForPolicyCommand(input, ...args));
};
const makePagedRequest = async (
  client: IAM,
  input: ListEntitiesForPolicyCommandInput,
  ...args: any
): Promise<ListEntitiesForPolicyCommandOutput> => {
  // @ts-ignore
  return await client.listEntitiesForPolicy(input, ...args);
};
export async function* listEntitiesForPolicyPaginate(
  config: IAMPaginationConfiguration,
  input: ListEntitiesForPolicyCommandInput,
  ...additionalArguments: any
): Paginator<ListEntitiesForPolicyCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListEntitiesForPolicyCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}

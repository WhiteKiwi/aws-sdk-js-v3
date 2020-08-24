import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListModelPackagesCommand,
  ListModelPackagesCommandInput,
  ListModelPackagesCommandOutput,
} from "../commands/ListModelPackagesCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListModelPackagesCommandInput,
  ...args: any
): Promise<ListModelPackagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListModelPackagesCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListModelPackagesCommandInput,
  ...args: any
): Promise<ListModelPackagesCommandOutput> => {
  // @ts-ignore
  return await client.listModelPackages(input, ...args);
};
export async function* listModelPackagesPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListModelPackagesCommandInput,
  ...additionalArguments: any
): Paginator<ListModelPackagesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListModelPackagesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}

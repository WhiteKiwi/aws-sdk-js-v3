// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  CreateSuiteDefinitionCommandInput,
  CreateSuiteDefinitionCommandOutput,
} from "./commands/CreateSuiteDefinitionCommand";
import {
  DeleteSuiteDefinitionCommandInput,
  DeleteSuiteDefinitionCommandOutput,
} from "./commands/DeleteSuiteDefinitionCommand";
import { GetEndpointCommandInput, GetEndpointCommandOutput } from "./commands/GetEndpointCommand";
import { GetSuiteDefinitionCommandInput, GetSuiteDefinitionCommandOutput } from "./commands/GetSuiteDefinitionCommand";
import { GetSuiteRunCommandInput, GetSuiteRunCommandOutput } from "./commands/GetSuiteRunCommand";
import { GetSuiteRunReportCommandInput, GetSuiteRunReportCommandOutput } from "./commands/GetSuiteRunReportCommand";
import {
  ListSuiteDefinitionsCommandInput,
  ListSuiteDefinitionsCommandOutput,
} from "./commands/ListSuiteDefinitionsCommand";
import { ListSuiteRunsCommandInput, ListSuiteRunsCommandOutput } from "./commands/ListSuiteRunsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartSuiteRunCommandInput, StartSuiteRunCommandOutput } from "./commands/StartSuiteRunCommand";
import { StopSuiteRunCommandInput, StopSuiteRunCommandOutput } from "./commands/StopSuiteRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateSuiteDefinitionCommandInput,
  UpdateSuiteDefinitionCommandOutput,
} from "./commands/UpdateSuiteDefinitionCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateSuiteDefinitionCommandInput
  | DeleteSuiteDefinitionCommandInput
  | GetEndpointCommandInput
  | GetSuiteDefinitionCommandInput
  | GetSuiteRunCommandInput
  | GetSuiteRunReportCommandInput
  | ListSuiteDefinitionsCommandInput
  | ListSuiteRunsCommandInput
  | ListTagsForResourceCommandInput
  | StartSuiteRunCommandInput
  | StopSuiteRunCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateSuiteDefinitionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateSuiteDefinitionCommandOutput
  | DeleteSuiteDefinitionCommandOutput
  | GetEndpointCommandOutput
  | GetSuiteDefinitionCommandOutput
  | GetSuiteRunCommandOutput
  | GetSuiteRunReportCommandOutput
  | ListSuiteDefinitionsCommandOutput
  | ListSuiteRunsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartSuiteRunCommandOutput
  | StopSuiteRunCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateSuiteDefinitionCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type IotDeviceAdvisorClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of IotDeviceAdvisorClient class constructor that set the region, credentials and other options.
 */
export interface IotDeviceAdvisorClientConfig extends IotDeviceAdvisorClientConfigType {}

/**
 * @public
 */
export type IotDeviceAdvisorClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of IotDeviceAdvisorClient class. This is resolved and normalized from the {@link IotDeviceAdvisorClientConfig | constructor configuration interface}.
 */
export interface IotDeviceAdvisorClientResolvedConfig extends IotDeviceAdvisorClientResolvedConfigType {}

/**
 * @public
 * <p>Amazon Web Services IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT
 *             devices during device software development. Device Advisor provides pre-built tests that you
 *             can use to validate IoT devices for reliable and secure connectivity with Amazon Web Services IoT Core
 *             before deploying devices to production. By using Device Advisor, you can confirm that your
 *             devices can connect to Amazon Web Services IoT Core, follow security best practices and, if applicable,
 *             receive software updates from IoT Device Management. You can also download signed
 *             qualification reports to submit to the Amazon Web Services Partner Network to get your device
 *             qualified for the Amazon Web Services Partner Device Catalog without the need to send your device in
 *             and wait for it to be tested.</p>
 */
export class IotDeviceAdvisorClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IotDeviceAdvisorClientResolvedConfig
> {
  /**
   * The resolved configuration of IotDeviceAdvisorClient class. This is resolved and normalized from the {@link IotDeviceAdvisorClientConfig | constructor configuration interface}.
   */
  readonly config: IotDeviceAdvisorClientResolvedConfig;

  constructor(configuration: IotDeviceAdvisorClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}

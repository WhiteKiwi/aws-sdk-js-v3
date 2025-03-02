import { Logger } from "@aws-sdk/types";

/**
 * @internal
 */
export const DEFAULT_TIMEOUT = 1000;

// The default in AWS SDK for Python and CLI (botocore) is no retry or one attempt
// https://github.com/boto/botocore/blob/646c61a7065933e75bab545b785e6098bc94c081/botocore/utils.py#L273
/**
 * @internal
 */
export const DEFAULT_MAX_RETRIES = 0;

/**
 * @internal
 */
export interface RemoteProviderConfig {
  /**
   * The connection timeout (in milliseconds)
   */
  timeout: number;

  /**
   * The maximum number of times the HTTP connection should be retried
   */
  maxRetries: number;
}

/**
 * @internal
 */
export interface RemoteProviderInit extends Partial<RemoteProviderConfig> {
  logger?: Logger;
}

/**
 * @internal
 */
export const providerConfigFromInit = ({
  maxRetries = DEFAULT_MAX_RETRIES,
  timeout = DEFAULT_TIMEOUT,
}: RemoteProviderInit): RemoteProviderConfig => ({ maxRetries, timeout });

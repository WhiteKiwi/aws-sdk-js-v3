// smithy-typescript generated code
import { NoOpLogger } from "@smithy/smithy-client";
import { parseUrl } from "@smithy/url-parser";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { sdkStreamMixin } from "@smithy/util-stream";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MediaLiveClientConfig } from "./MediaLiveClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaLiveClientConfig) => ({
  apiVersion: "2017-10-14",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? new NoOpLogger(),
  sdkStreamMixin: config?.sdkStreamMixin ?? sdkStreamMixin,
  serviceId: config?.serviceId ?? "MediaLive",
  urlParser: config?.urlParser ?? parseUrl,
  utf8Decoder: config?.utf8Decoder ?? fromUtf8,
  utf8Encoder: config?.utf8Encoder ?? toUtf8,
});

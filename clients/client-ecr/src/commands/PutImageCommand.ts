// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import {
  PutImageRequest,
  PutImageRequestFilterSensitiveLog,
  PutImageResponse,
  PutImageResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1PutImageCommand, serializeAws_json1_1PutImageCommand } from "../protocols/Aws_json1_1";

/**
 * The input for {@link PutImageCommand}.
 */
export interface PutImageCommandInput extends PutImageRequest {}
/**
 * The output of {@link PutImageCommand}.
 */
export interface PutImageCommandOutput extends PutImageResponse, __MetadataBearer {}

/**
 * <p>Creates or updates the image manifest and tags associated with an image.</p>
 *         <p>When an image is pushed and all new image layers have been uploaded, the PutImage API
 *             is called once to create or update the image manifest and the tags associated with the
 *             image.</p>
 *
 *         <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutImageCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutImageCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutImageCommandInput} for command's `input` shape.
 * @see {@link PutImageCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link ImageAlreadyExistsException} (client fault)
 *  <p>The specified image has already been pushed, and there were no changes to the manifest
 *             or image tag after the last push.</p>
 *
 * @throws {@link ImageDigestDoesNotMatchException} (client fault)
 *  <p>The specified image digest does not match the digest that Amazon ECR calculated for the
 *             image.</p>
 *
 * @throws {@link ImageTagAlreadyExistsException} (client fault)
 *  <p>The specified image is tagged with a tag that already exists. The repository is
 *             configured for tag immutability.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link KmsException} (client fault)
 *  <p>The operation failed due to a KMS exception.</p>
 *
 * @throws {@link LayersNotFoundException} (client fault)
 *  <p>The specified layers could not be found, or the specified layer is not valid for this
 *             repository.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation did not succeed because it would have exceeded a service limit for your
 *             account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR service quotas</a> in
 *             the Amazon Elastic Container Registry User Guide.</p>
 *
 * @throws {@link ReferencedImagesNotFoundException} (client fault)
 *  <p>The manifest list is referencing an image that does not exist.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 *
 */
export class PutImageCommand extends $Command<PutImageCommandInput, PutImageCommandOutput, ECRClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: PutImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutImageCommandInput, PutImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutImageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "PutImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutImageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutImageResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutImageCommandOutput> {
    return deserializeAws_json1_1PutImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

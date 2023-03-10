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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import {
  PutWebhookInput,
  PutWebhookInputFilterSensitiveLog,
  PutWebhookOutput,
  PutWebhookOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutWebhookCommand,
  serializeAws_json1_1PutWebhookCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link PutWebhookCommand}.
 */
export interface PutWebhookCommandInput extends PutWebhookInput {}
/**
 * The output of {@link PutWebhookCommand}.
 */
export interface PutWebhookCommandOutput extends PutWebhookOutput, __MetadataBearer {}

/**
 * <p>Defines a webhook and returns a unique webhook URL generated by CodePipeline. This
 *             URL can be supplied to third party source hosting providers to call every time there's a
 *             code change. When CodePipeline receives a POST request on this URL, the pipeline defined
 *             in the webhook is started as long as the POST request satisfied the authentication and
 *             filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty
 *             and DeregisterWebhookWithThirdParty APIs can be used to automatically configure
 *             supported third parties to call the generated webhook URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutWebhookCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutWebhookCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutWebhookCommandInput} for command's `input` shape.
 * @see {@link PutWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Unable to modify the tag due to a simultaneous update request.</p>
 *
 * @throws {@link InvalidTagsException} (client fault)
 *  <p>The specified resource tags are invalid.</p>
 *
 * @throws {@link InvalidWebhookAuthenticationParametersException} (client fault)
 *  <p>The specified authentication type is in an invalid format.</p>
 *
 * @throws {@link InvalidWebhookFilterPatternException} (client fault)
 *  <p>The specified event filter rule is in an invalid format.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The number of pipelines associated with the AWS account has exceeded the limit
 *             allowed for the account.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The tags limit for a resource has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 *
 */
export class PutWebhookCommand extends $Command<
  PutWebhookCommandInput,
  PutWebhookCommandOutput,
  CodePipelineClientResolvedConfig
> {
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

  constructor(readonly input: PutWebhookCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutWebhookCommandInput, PutWebhookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutWebhookCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PutWebhookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutWebhookInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutWebhookOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutWebhookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutWebhookCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutWebhookCommandOutput> {
    return deserializeAws_json1_1PutWebhookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

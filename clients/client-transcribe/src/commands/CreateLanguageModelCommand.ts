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

import {
  CreateLanguageModelRequest,
  CreateLanguageModelRequestFilterSensitiveLog,
  CreateLanguageModelResponse,
  CreateLanguageModelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateLanguageModelCommand,
  serializeAws_json1_1CreateLanguageModelCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * The input for {@link CreateLanguageModelCommand}.
 */
export interface CreateLanguageModelCommandInput extends CreateLanguageModelRequest {}
/**
 * The output of {@link CreateLanguageModelCommand}.
 */
export interface CreateLanguageModelCommandOutput extends CreateLanguageModelResponse, __MetadataBearer {}

/**
 * <p>Creates a new custom language model.</p>
 *          <p>When creating a new custom language model, you must specify:</p>
 *          <ul>
 *             <li>
 *                <p>If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband
 *                     (audio sample rates under 16,000 Hz) base model</p>
 *             </li>
 *             <li>
 *                <p>The location of your training and tuning files (this must be an Amazon S3 URI)</p>
 *             </li>
 *             <li>
 *                <p>The language of your model</p>
 *             </li>
 *             <li>
 *                <p>A unique name for your model</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, CreateLanguageModelCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, CreateLanguageModelCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new CreateLanguageModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLanguageModelCommandInput} for command's `input` shape.
 * @see {@link CreateLanguageModelCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource already exists with this name. Resource names must be unique within an
 *                 Amazon Web Services account.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 *
 */
export class CreateLanguageModelCommand extends $Command<
  CreateLanguageModelCommandInput,
  CreateLanguageModelCommandOutput,
  TranscribeClientResolvedConfig
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

  constructor(readonly input: CreateLanguageModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLanguageModelCommandInput, CreateLanguageModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLanguageModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "CreateLanguageModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLanguageModelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLanguageModelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLanguageModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLanguageModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLanguageModelCommandOutput> {
    return deserializeAws_json1_1CreateLanguageModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

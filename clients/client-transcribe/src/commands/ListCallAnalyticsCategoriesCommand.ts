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
  ListCallAnalyticsCategoriesRequest,
  ListCallAnalyticsCategoriesRequestFilterSensitiveLog,
  ListCallAnalyticsCategoriesResponse,
  ListCallAnalyticsCategoriesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListCallAnalyticsCategoriesCommand,
  serializeAws_json1_1ListCallAnalyticsCategoriesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * The input for {@link ListCallAnalyticsCategoriesCommand}.
 */
export interface ListCallAnalyticsCategoriesCommandInput extends ListCallAnalyticsCategoriesRequest {}
/**
 * The output of {@link ListCallAnalyticsCategoriesCommand}.
 */
export interface ListCallAnalyticsCategoriesCommandOutput
  extends ListCallAnalyticsCategoriesResponse,
    __MetadataBearer {}

/**
 * <p>Provides a list of Call Analytics categories, including all rules that make up each
 *             category.</p>
 *          <p>To get detailed information about a specific Call Analytics category, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListCallAnalyticsCategoriesCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListCallAnalyticsCategoriesCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListCallAnalyticsCategoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCallAnalyticsCategoriesCommandInput} for command's `input` shape.
 * @see {@link ListCallAnalyticsCategoriesCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
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
export class ListCallAnalyticsCategoriesCommand extends $Command<
  ListCallAnalyticsCategoriesCommandInput,
  ListCallAnalyticsCategoriesCommandOutput,
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

  constructor(readonly input: ListCallAnalyticsCategoriesCommandInput) {
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
  ): Handler<ListCallAnalyticsCategoriesCommandInput, ListCallAnalyticsCategoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCallAnalyticsCategoriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListCallAnalyticsCategoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCallAnalyticsCategoriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCallAnalyticsCategoriesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCallAnalyticsCategoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCallAnalyticsCategoriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCallAnalyticsCategoriesCommandOutput> {
    return deserializeAws_json1_1ListCallAnalyticsCategoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

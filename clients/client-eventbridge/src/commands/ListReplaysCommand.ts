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

import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import {
  ListReplaysRequest,
  ListReplaysRequestFilterSensitiveLog,
  ListReplaysResponse,
  ListReplaysResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListReplaysCommand,
  serializeAws_json1_1ListReplaysCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link ListReplaysCommand}.
 */
export interface ListReplaysCommandInput extends ListReplaysRequest {}
/**
 * The output of {@link ListReplaysCommand}.
 */
export interface ListReplaysCommandOutput extends ListReplaysResponse, __MetadataBearer {}

/**
 * <p>Lists your replays. You can either list all the replays or you can provide a prefix to
 *       match to the replay names. Filter parameters are exclusive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListReplaysCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListReplaysCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new ListReplaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReplaysCommandInput} for command's `input` shape.
 * @see {@link ListReplaysCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 *
 */
export class ListReplaysCommand extends $Command<
  ListReplaysCommandInput,
  ListReplaysCommandOutput,
  EventBridgeClientResolvedConfig
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

  constructor(readonly input: ListReplaysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReplaysCommandInput, ListReplaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListReplaysCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "ListReplaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReplaysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListReplaysResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReplaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListReplaysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReplaysCommandOutput> {
    return deserializeAws_json1_1ListReplaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

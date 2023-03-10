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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  GetDataflowGraphRequest,
  GetDataflowGraphRequestFilterSensitiveLog,
  GetDataflowGraphResponse,
  GetDataflowGraphResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetDataflowGraphCommand,
  serializeAws_json1_1GetDataflowGraphCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link GetDataflowGraphCommand}.
 */
export interface GetDataflowGraphCommandInput extends GetDataflowGraphRequest {}
/**
 * The output of {@link GetDataflowGraphCommand}.
 */
export interface GetDataflowGraphCommandOutput extends GetDataflowGraphResponse, __MetadataBearer {}

/**
 * <p>Transforms a Python script into a directed acyclic graph (DAG). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataflowGraphCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataflowGraphCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetDataflowGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataflowGraphCommandInput} for command's `input` shape.
 * @see {@link GetDataflowGraphCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 *
 */
export class GetDataflowGraphCommand extends $Command<
  GetDataflowGraphCommandInput,
  GetDataflowGraphCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: GetDataflowGraphCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataflowGraphCommandInput, GetDataflowGraphCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataflowGraphCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetDataflowGraphCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDataflowGraphRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDataflowGraphResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDataflowGraphCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDataflowGraphCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataflowGraphCommandOutput> {
    return deserializeAws_json1_1GetDataflowGraphCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

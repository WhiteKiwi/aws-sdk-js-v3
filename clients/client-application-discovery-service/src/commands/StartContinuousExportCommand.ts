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
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import {
  StartContinuousExportRequest,
  StartContinuousExportRequestFilterSensitiveLog,
  StartContinuousExportResponse,
  StartContinuousExportResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartContinuousExportCommand,
  serializeAws_json1_1StartContinuousExportCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link StartContinuousExportCommand}.
 */
export interface StartContinuousExportCommandInput extends StartContinuousExportRequest {}
/**
 * The output of {@link StartContinuousExportCommand}.
 */
export interface StartContinuousExportCommandOutput extends StartContinuousExportResponse, __MetadataBearer {}

/**
 * <p>Start the continuous flow of agent's discovered data into Amazon Athena.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StartContinuousExportCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StartContinuousExportCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new StartContinuousExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartContinuousExportCommandInput} for command's `input` shape.
 * @see {@link StartContinuousExportCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *       policy associated with this account.</p>
 *
 * @throws {@link ConflictErrorException} (client fault)
 *  <p></p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home region is not set. Set the home region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not permitted.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>This issue occurs when the same <code>clientRequestToken</code> is used with the
 *         <code>StartImportTask</code> action, but with different parameters. For example, you use the
 *       same request token but have two different import URLs, you can encounter this issue. If the
 *       import tasks are meant to be different, use a different <code>clientRequestToken</code>, and
 *       try again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 *
 */
export class StartContinuousExportCommand extends $Command<
  StartContinuousExportCommandInput,
  StartContinuousExportCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
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

  constructor(readonly input: StartContinuousExportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartContinuousExportCommandInput, StartContinuousExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartContinuousExportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "StartContinuousExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartContinuousExportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartContinuousExportResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartContinuousExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartContinuousExportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartContinuousExportCommandOutput> {
    return deserializeAws_json1_1StartContinuousExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

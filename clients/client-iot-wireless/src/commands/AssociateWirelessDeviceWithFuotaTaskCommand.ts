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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  AssociateWirelessDeviceWithFuotaTaskRequest,
  AssociateWirelessDeviceWithFuotaTaskRequestFilterSensitiveLog,
  AssociateWirelessDeviceWithFuotaTaskResponse,
  AssociateWirelessDeviceWithFuotaTaskResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateWirelessDeviceWithFuotaTaskCommand,
  serializeAws_restJson1AssociateWirelessDeviceWithFuotaTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link AssociateWirelessDeviceWithFuotaTaskCommand}.
 */
export interface AssociateWirelessDeviceWithFuotaTaskCommandInput extends AssociateWirelessDeviceWithFuotaTaskRequest {}
/**
 * The output of {@link AssociateWirelessDeviceWithFuotaTaskCommand}.
 */
export interface AssociateWirelessDeviceWithFuotaTaskCommandOutput
  extends AssociateWirelessDeviceWithFuotaTaskResponse,
    __MetadataBearer {}

/**
 * <p>Associate a wireless device with a FUOTA task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, AssociateWirelessDeviceWithFuotaTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, AssociateWirelessDeviceWithFuotaTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new AssociateWirelessDeviceWithFuotaTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateWirelessDeviceWithFuotaTaskCommandInput} for command's `input` shape.
 * @see {@link AssociateWirelessDeviceWithFuotaTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 *
 */
export class AssociateWirelessDeviceWithFuotaTaskCommand extends $Command<
  AssociateWirelessDeviceWithFuotaTaskCommandInput,
  AssociateWirelessDeviceWithFuotaTaskCommandOutput,
  IoTWirelessClientResolvedConfig
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

  constructor(readonly input: AssociateWirelessDeviceWithFuotaTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateWirelessDeviceWithFuotaTaskCommandInput, AssociateWirelessDeviceWithFuotaTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateWirelessDeviceWithFuotaTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "AssociateWirelessDeviceWithFuotaTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateWirelessDeviceWithFuotaTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateWirelessDeviceWithFuotaTaskResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateWirelessDeviceWithFuotaTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateWirelessDeviceWithFuotaTaskCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateWirelessDeviceWithFuotaTaskCommandOutput> {
    return deserializeAws_restJson1AssociateWirelessDeviceWithFuotaTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

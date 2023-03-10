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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DisableAddressTransferRequest,
  DisableAddressTransferRequestFilterSensitiveLog,
  DisableAddressTransferResult,
  DisableAddressTransferResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2DisableAddressTransferCommand,
  serializeAws_ec2DisableAddressTransferCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link DisableAddressTransferCommand}.
 */
export interface DisableAddressTransferCommandInput extends DisableAddressTransferRequest {}
/**
 * The output of {@link DisableAddressTransferCommand}.
 */
export interface DisableAddressTransferCommandOutput extends DisableAddressTransferResult, __MetadataBearer {}

/**
 * <p>Disables Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableAddressTransferCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableAddressTransferCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableAddressTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableAddressTransferCommandInput} for command's `input` shape.
 * @see {@link DisableAddressTransferCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DisableAddressTransferCommand extends $Command<
  DisableAddressTransferCommandInput,
  DisableAddressTransferCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: DisableAddressTransferCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableAddressTransferCommandInput, DisableAddressTransferCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableAddressTransferCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableAddressTransferCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableAddressTransferRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisableAddressTransferResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableAddressTransferCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DisableAddressTransferCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableAddressTransferCommandOutput> {
    return deserializeAws_ec2DisableAddressTransferCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

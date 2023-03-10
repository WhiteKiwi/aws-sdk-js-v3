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
  DeleteCoipPoolRequest,
  DeleteCoipPoolRequestFilterSensitiveLog,
  DeleteCoipPoolResult,
  DeleteCoipPoolResultFilterSensitiveLog,
} from "../models/models_2";
import { deserializeAws_ec2DeleteCoipPoolCommand, serializeAws_ec2DeleteCoipPoolCommand } from "../protocols/Aws_ec2";

/**
 * The input for {@link DeleteCoipPoolCommand}.
 */
export interface DeleteCoipPoolCommandInput extends DeleteCoipPoolRequest {}
/**
 * The output of {@link DeleteCoipPoolCommand}.
 */
export interface DeleteCoipPoolCommandOutput extends DeleteCoipPoolResult, __MetadataBearer {}

/**
 * <p>Deletes a pool of customer-owned IP (CoIP) addresses. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCoipPoolCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCoipPoolCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteCoipPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCoipPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteCoipPoolCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DeleteCoipPoolCommand extends $Command<
  DeleteCoipPoolCommandInput,
  DeleteCoipPoolCommandOutput,
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

  constructor(readonly input: DeleteCoipPoolCommandInput) {
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
  ): Handler<DeleteCoipPoolCommandInput, DeleteCoipPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCoipPoolCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteCoipPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCoipPoolRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteCoipPoolResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCoipPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteCoipPoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCoipPoolCommandOutput> {
    return deserializeAws_ec2DeleteCoipPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

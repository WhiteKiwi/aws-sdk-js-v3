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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { ExecutePolicyType, ExecutePolicyTypeFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryExecutePolicyCommand,
  serializeAws_queryExecutePolicyCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link ExecutePolicyCommand}.
 */
export interface ExecutePolicyCommandInput extends ExecutePolicyType {}
/**
 * The output of {@link ExecutePolicyCommand}.
 */
export interface ExecutePolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Executes the specified policy. This can be useful for testing the design of your
 *             scaling policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, ExecutePolicyCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, ExecutePolicyCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new ExecutePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecutePolicyCommandInput} for command's `input` shape.
 * @see {@link ExecutePolicyCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ScalingActivityInProgressFault} (client fault)
 *  <p>The operation can't be performed because there are scaling activities in
 *             progress.</p>
 *
 *
 * @example To execute a scaling policy
 * ```javascript
 * // This example executes the specified policy.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "BreachThreshold": 50,
 *   "MetricValue": 59,
 *   "PolicyName": "my-step-scale-out-policy"
 * };
 * const command = new ExecutePolicyCommand(input);
 * await client.send(command);
 * // example id: autoscaling-execute-policy-1
 * ```
 *
 */
export class ExecutePolicyCommand extends $Command<
  ExecutePolicyCommandInput,
  ExecutePolicyCommandOutput,
  AutoScalingClientResolvedConfig
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

  constructor(readonly input: ExecutePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecutePolicyCommandInput, ExecutePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ExecutePolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "ExecutePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecutePolicyTypeFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExecutePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryExecutePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecutePolicyCommandOutput> {
    return deserializeAws_queryExecutePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

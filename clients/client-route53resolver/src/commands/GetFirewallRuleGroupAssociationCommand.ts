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
  GetFirewallRuleGroupAssociationRequest,
  GetFirewallRuleGroupAssociationRequestFilterSensitiveLog,
  GetFirewallRuleGroupAssociationResponse,
  GetFirewallRuleGroupAssociationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetFirewallRuleGroupAssociationCommand,
  serializeAws_json1_1GetFirewallRuleGroupAssociationCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * The input for {@link GetFirewallRuleGroupAssociationCommand}.
 */
export interface GetFirewallRuleGroupAssociationCommandInput extends GetFirewallRuleGroupAssociationRequest {}
/**
 * The output of {@link GetFirewallRuleGroupAssociationCommand}.
 */
export interface GetFirewallRuleGroupAssociationCommandOutput
  extends GetFirewallRuleGroupAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetFirewallRuleGroupAssociationCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetFirewallRuleGroupAssociationCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetFirewallRuleGroupAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFirewallRuleGroupAssociationCommandInput} for command's `input` shape.
 * @see {@link GetFirewallRuleGroupAssociationCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 *
 */
export class GetFirewallRuleGroupAssociationCommand extends $Command<
  GetFirewallRuleGroupAssociationCommandInput,
  GetFirewallRuleGroupAssociationCommandOutput,
  Route53ResolverClientResolvedConfig
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

  constructor(readonly input: GetFirewallRuleGroupAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFirewallRuleGroupAssociationCommandInput, GetFirewallRuleGroupAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFirewallRuleGroupAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetFirewallRuleGroupAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFirewallRuleGroupAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetFirewallRuleGroupAssociationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetFirewallRuleGroupAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetFirewallRuleGroupAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFirewallRuleGroupAssociationCommandOutput> {
    return deserializeAws_json1_1GetFirewallRuleGroupAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

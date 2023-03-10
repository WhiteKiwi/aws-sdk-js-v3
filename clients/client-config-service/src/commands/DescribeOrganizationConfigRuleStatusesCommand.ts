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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeOrganizationConfigRuleStatusesRequest,
  DescribeOrganizationConfigRuleStatusesRequestFilterSensitiveLog,
  DescribeOrganizationConfigRuleStatusesResponse,
  DescribeOrganizationConfigRuleStatusesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand,
  serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeOrganizationConfigRuleStatusesCommand}.
 */
export interface DescribeOrganizationConfigRuleStatusesCommandInput
  extends DescribeOrganizationConfigRuleStatusesRequest {}
/**
 * The output of {@link DescribeOrganizationConfigRuleStatusesCommand}.
 */
export interface DescribeOrganizationConfigRuleStatusesCommandOutput
  extends DescribeOrganizationConfigRuleStatusesResponse,
    __MetadataBearer {}

/**
 * <p>Provides organization Config rule deployment status for an organization.</p>
 *
 * 		       <note>
 *             <p>The status is not considered successful until organization Config rule is successfully deployed in all the member
 * 			accounts with an exception of excluded accounts.</p>
 * 			         <p>When you specify the limit and the next token, you receive a paginated response.
 * 			Limit and next token are not applicable if you specify organization Config rule names.
 * 			It is only applicable, when you request all the organization Config rules.</p>
 * 			      </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConfigRuleStatusesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConfigRuleStatusesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeOrganizationConfigRuleStatusesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationConfigRuleStatusesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConfigRuleStatusesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is invalid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link NoSuchOrganizationConfigRuleException} (client fault)
 *  <p>The Config rule in the request is invalid. Verify that the rule is an organization Config Custom Policy rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 *
 * @throws {@link OrganizationAccessDeniedException} (client fault)
 *  <p>For <code>PutConfigurationAggregator</code> API, you can see this exception for the following reasons:</p>
 * 		       <ul>
 *             <li>
 *                <p>No permission to call <code>EnableAWSServiceAccess</code> API</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator cannot be updated because your Amazon Web Services Organization management account or the delegated administrator role changed.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator is associated with a previous Amazon Web Services Organization and Config cannot aggregate data with current Amazon Web Services Organization.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>You are not a registered delegated administrator for Config with permissions to call <code>ListDelegatedAdministrators</code> API.
 * 			Ensure that the management account registers delagated administrator for Config service principle name before the delegated administrator creates an aggregator.</p>
 *             </li>
 *          </ul>
 * 		       <p>For all <code>OrganizationConfigRule</code> and <code>OrganizationConformancePack</code> APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.</p>
 *
 *
 */
export class DescribeOrganizationConfigRuleStatusesCommand extends $Command<
  DescribeOrganizationConfigRuleStatusesCommandInput,
  DescribeOrganizationConfigRuleStatusesCommandOutput,
  ConfigServiceClientResolvedConfig
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

  constructor(readonly input: DescribeOrganizationConfigRuleStatusesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOrganizationConfigRuleStatusesCommandInput, DescribeOrganizationConfigRuleStatusesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOrganizationConfigRuleStatusesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeOrganizationConfigRuleStatusesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOrganizationConfigRuleStatusesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeOrganizationConfigRuleStatusesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeOrganizationConfigRuleStatusesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrganizationConfigRuleStatusesCommandOutput> {
    return deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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
  ListConfigurationsRequest,
  ListConfigurationsRequestFilterSensitiveLog,
  ListConfigurationsResponse,
  ListConfigurationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListConfigurationsCommand,
  serializeAws_json1_1ListConfigurationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link ListConfigurationsCommand}.
 */
export interface ListConfigurationsCommandInput extends ListConfigurationsRequest {}
/**
 * The output of {@link ListConfigurationsCommand}.
 */
export interface ListConfigurationsCommandOutput extends ListConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of configuration items as specified by the value passed to the
 *       required parameter <code>configurationType</code>. Optional filtering may be applied to refine
 *       search results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, ListConfigurationsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, ListConfigurationsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new ListConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *       policy associated with this account.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified configuration ID was not located. Verify the configuration ID and try
 *       again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 *
 */
export class ListConfigurationsCommand extends $Command<
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
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

  constructor(readonly input: ListConfigurationsCommandInput) {
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
  ): Handler<ListConfigurationsCommandInput, ListConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "ListConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConfigurationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListConfigurationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListConfigurationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListConfigurationsCommandOutput> {
    return deserializeAws_json1_1ListConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

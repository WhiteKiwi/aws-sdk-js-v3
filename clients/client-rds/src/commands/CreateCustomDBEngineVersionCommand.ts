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
  CreateCustomDBEngineVersionMessage,
  CreateCustomDBEngineVersionMessageFilterSensitiveLog,
  DBEngineVersion,
  DBEngineVersionFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateCustomDBEngineVersionCommand,
  serializeAws_queryCreateCustomDBEngineVersionCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * The input for {@link CreateCustomDBEngineVersionCommand}.
 */
export interface CreateCustomDBEngineVersionCommandInput extends CreateCustomDBEngineVersionMessage {}
/**
 * The output of {@link CreateCustomDBEngineVersionCommand}.
 */
export interface CreateCustomDBEngineVersionCommandOutput extends DBEngineVersion, __MetadataBearer {}

/**
 * <p>Creates a custom DB engine version (CEV).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateCustomDBEngineVersionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateCustomDBEngineVersionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateCustomDBEngineVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomDBEngineVersionCommandInput} for command's `input` shape.
 * @see {@link CreateCustomDBEngineVersionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link CustomDBEngineVersionAlreadyExistsFault} (client fault)
 *  <p>A CEV with the specified name already exists.</p>
 *
 * @throws {@link CustomDBEngineVersionQuotaExceededFault} (client fault)
 *  <p>You have exceeded your CEV quota.</p>
 *
 * @throws {@link Ec2ImagePropertiesNotSupportedFault} (client fault)
 *  <p>The AMI configuration prerequisite has not been met.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 *
 */
export class CreateCustomDBEngineVersionCommand extends $Command<
  CreateCustomDBEngineVersionCommandInput,
  CreateCustomDBEngineVersionCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: CreateCustomDBEngineVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCustomDBEngineVersionCommandInput, CreateCustomDBEngineVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomDBEngineVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateCustomDBEngineVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomDBEngineVersionMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBEngineVersionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCustomDBEngineVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateCustomDBEngineVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCustomDBEngineVersionCommandOutput> {
    return deserializeAws_queryCreateCustomDBEngineVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

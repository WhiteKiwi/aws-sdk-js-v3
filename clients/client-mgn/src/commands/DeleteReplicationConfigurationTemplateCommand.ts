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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  DeleteReplicationConfigurationTemplateRequest,
  DeleteReplicationConfigurationTemplateRequestFilterSensitiveLog,
  DeleteReplicationConfigurationTemplateResponse,
  DeleteReplicationConfigurationTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommand,
  serializeAws_restJson1DeleteReplicationConfigurationTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link DeleteReplicationConfigurationTemplateCommand}.
 */
export interface DeleteReplicationConfigurationTemplateCommandInput
  extends DeleteReplicationConfigurationTemplateRequest {}
/**
 * The output of {@link DeleteReplicationConfigurationTemplateCommand}.
 */
export interface DeleteReplicationConfigurationTemplateCommandOutput
  extends DeleteReplicationConfigurationTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a single Replication Configuration Template by ID</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteReplicationConfigurationTemplateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteReplicationConfigurationTemplateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DeleteReplicationConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 *
 */
export class DeleteReplicationConfigurationTemplateCommand extends $Command<
  DeleteReplicationConfigurationTemplateCommandInput,
  DeleteReplicationConfigurationTemplateCommandOutput,
  MgnClientResolvedConfig
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

  constructor(readonly input: DeleteReplicationConfigurationTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteReplicationConfigurationTemplateCommandInput, DeleteReplicationConfigurationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteReplicationConfigurationTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "DeleteReplicationConfigurationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteReplicationConfigurationTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteReplicationConfigurationTemplateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteReplicationConfigurationTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteReplicationConfigurationTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteReplicationConfigurationTemplateCommandOutput> {
    return deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

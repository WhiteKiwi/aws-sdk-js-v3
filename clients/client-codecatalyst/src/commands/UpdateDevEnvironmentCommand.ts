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

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import {
  UpdateDevEnvironmentRequest,
  UpdateDevEnvironmentRequestFilterSensitiveLog,
  UpdateDevEnvironmentResponse,
  UpdateDevEnvironmentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDevEnvironmentCommand,
  serializeAws_restJson1UpdateDevEnvironmentCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link UpdateDevEnvironmentCommand}.
 */
export interface UpdateDevEnvironmentCommandInput extends UpdateDevEnvironmentRequest {}
/**
 * The output of {@link UpdateDevEnvironmentCommand}.
 */
export interface UpdateDevEnvironmentCommandOutput extends UpdateDevEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, UpdateDevEnvironmentCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, UpdateDevEnvironmentCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const command = new UpdateDevEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDevEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateDevEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 *
 */
export class UpdateDevEnvironmentCommand extends $Command<
  UpdateDevEnvironmentCommandInput,
  UpdateDevEnvironmentCommandOutput,
  CodeCatalystClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  constructor(readonly input: UpdateDevEnvironmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCatalystClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDevEnvironmentCommandInput, UpdateDevEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDevEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "UpdateDevEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDevEnvironmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDevEnvironmentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDevEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDevEnvironmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDevEnvironmentCommandOutput> {
    return deserializeAws_restJson1UpdateDevEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

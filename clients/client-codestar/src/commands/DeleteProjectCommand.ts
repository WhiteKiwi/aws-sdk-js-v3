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

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import {
  DeleteProjectRequest,
  DeleteProjectRequestFilterSensitiveLog,
  DeleteProjectResult,
  DeleteProjectResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteProjectCommand,
  serializeAws_json1_1DeleteProjectCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DeleteProjectCommand}.
 */
export interface DeleteProjectCommandInput extends DeleteProjectRequest {}
/**
 * The output of {@link DeleteProjectCommand}.
 */
export interface DeleteProjectCommandOutput extends DeleteProjectResult, __MetadataBearer {}

/**
 * <p>Deletes a project, including project resources. Does not delete users associated with
 *       the project, but does delete the IAM roles that allowed access to the project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DeleteProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DeleteProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new DeleteProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProjectCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 *
 * @throws {@link InvalidServiceRoleException} (client fault)
 *  <p>The service role is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 *
 */
export class DeleteProjectCommand extends $Command<
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
  CodeStarClientResolvedConfig
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

  constructor(readonly input: DeleteProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteProjectCommandInput, DeleteProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteProjectCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "DeleteProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteProjectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteProjectResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteProjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteProjectCommandOutput> {
    return deserializeAws_json1_1DeleteProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

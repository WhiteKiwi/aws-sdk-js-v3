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
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import {
  TestRoleRequest,
  TestRoleRequestFilterSensitiveLog,
  TestRoleResponse,
  TestRoleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1TestRoleCommand,
  serializeAws_restJson1TestRoleCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link TestRoleCommand}.
 */
export interface TestRoleCommandInput extends TestRoleRequest {}
/**
 * The output of {@link TestRoleCommand}.
 */
export interface TestRoleCommandOutput extends TestRoleResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>The TestRole operation tests the IAM role used to create the pipeline.</p>
 *         <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using
 *             has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding
 *             process. The action attempts to assume the specified IAM role, checks read access to the
 *             input and output buckets, and tries to send a test notification to Amazon SNS topics
 *             that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, TestRoleCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, TestRoleCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new TestRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestRoleCommandInput} for command's `input` shape.
 * @see {@link TestRoleCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request was not signed correctly.</p>
 *
 * @throws {@link IncompatibleVersionException} (client fault)
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist or is not available. For example, the pipeline
 *             to which you're trying to add a job doesn't exist or is still being created.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more required parameter values were not provided in the request.</p>
 *
 *
 */
export class TestRoleCommand extends $Command<
  TestRoleCommandInput,
  TestRoleCommandOutput,
  ElasticTranscoderClientResolvedConfig
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

  constructor(readonly input: TestRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestRoleCommandInput, TestRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TestRoleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "TestRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestRoleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TestRoleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TestRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestRoleCommandOutput> {
    return deserializeAws_restJson1TestRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

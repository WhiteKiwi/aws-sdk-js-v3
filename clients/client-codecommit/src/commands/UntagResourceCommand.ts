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

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UntagResourceInput, UntagResourceInputFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_json1_1UntagResourceCommand,
  serializeAws_json1_1UntagResourceCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link UntagResourceCommand}.
 */
export interface UntagResourceCommandInput extends UntagResourceInput {}
/**
 * The output of {@link UntagResourceCommand}.
 */
export interface UntagResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS
 *             CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UntagResourceCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UntagResourceCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UntagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagResourceCommandInput} for command's `input` shape.
 * @see {@link UntagResourceCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *
 *         <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link InvalidResourceArnException} (client fault)
 *  <p>The value for the resource ARN is not valid. For more information about resources in AWS CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a>
 *             in the AWS CodeCommit User Guide.</p>
 *
 * @throws {@link InvalidSystemTagUsageException} (client fault)
 *  <p>The specified tag is not valid. Key names cannot be prefixed with aws:.</p>
 *
 * @throws {@link InvalidTagKeysListException} (client fault)
 *  <p>The list of tags is not valid.</p>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link ResourceArnRequiredException} (client fault)
 *  <p>A valid Amazon Resource Name (ARN) for an AWS CodeCommit resource is required. For a list of valid resources in AWS CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a>
 *             in the AWS CodeCommit User Guide.</p>
 *
 * @throws {@link TagKeysListRequiredException} (client fault)
 *  <p>A list of tag keys is required. The list cannot be empty or null.</p>
 *
 * @throws {@link TagPolicyException} (client fault)
 *  <p>The tag policy is not valid.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The maximum number of tags for an AWS CodeCommit resource has been exceeded.</p>
 *
 *
 */
export class UntagResourceCommand extends $Command<
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
  CodeCommitClientResolvedConfig
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

  constructor(readonly input: UntagResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagResourceCommandInput, UntagResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UntagResourceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UntagResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UntagResourceInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UntagResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UntagResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UntagResourceCommandOutput> {
    return deserializeAws_json1_1UntagResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

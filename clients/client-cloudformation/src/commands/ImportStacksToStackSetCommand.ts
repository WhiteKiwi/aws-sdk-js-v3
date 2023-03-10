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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import {
  ImportStacksToStackSetInput,
  ImportStacksToStackSetInputFilterSensitiveLog,
  ImportStacksToStackSetOutput,
  ImportStacksToStackSetOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryImportStacksToStackSetCommand,
  serializeAws_queryImportStacksToStackSetCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link ImportStacksToStackSetCommand}.
 */
export interface ImportStacksToStackSetCommandInput extends ImportStacksToStackSetInput {}
/**
 * The output of {@link ImportStacksToStackSetCommand}.
 */
export interface ImportStacksToStackSetCommandOutput extends ImportStacksToStackSetOutput, __MetadataBearer {}

/**
 * <p>Import existing stacks into a new stack sets. Use the stack import operation to import
 *          up to 10 stacks into a new stack set in the same account as the source stack or in a
 *          different administrator account and Region, by specifying the stack ID of the stack you
 *          intend to import.</p>
 *          <note>
 *             <p>
 *                <code>ImportStacksToStackSet</code> is only supported by self-managed
 *             permissions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ImportStacksToStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ImportStacksToStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ImportStacksToStackSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportStacksToStackSetCommandInput} for command's `input` shape.
 * @see {@link ImportStacksToStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The specified operation isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The quota for the resource has already been reached.</p>
 *          <p>For information about resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation
 *             quotas</a> in the <i>CloudFormation User Guide</i>.</p>
 *
 * @throws {@link OperationIdAlreadyExistsException} (client fault)
 *  <p>The specified operation ID already exists.</p>
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>Another operation is currently in progress for this stack set. Only one operation can be
 *          performed for a stack set at a given time.</p>
 *
 * @throws {@link StackNotFoundException} (client fault)
 *  <p>The specified stack ARN doesn't exist or stack doesn't exist corresponding to the ARN in
 *          input.</p>
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified stack set doesn't exist.</p>
 *
 * @throws {@link StaleRequestException} (client fault)
 *  <p>Another operation has been performed on this stack set since the specified operation was
 *          performed.</p>
 *
 *
 */
export class ImportStacksToStackSetCommand extends $Command<
  ImportStacksToStackSetCommandInput,
  ImportStacksToStackSetCommandOutput,
  CloudFormationClientResolvedConfig
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

  constructor(readonly input: ImportStacksToStackSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportStacksToStackSetCommandInput, ImportStacksToStackSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportStacksToStackSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ImportStacksToStackSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportStacksToStackSetInputFilterSensitiveLog,
      outputFilterSensitiveLog: ImportStacksToStackSetOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportStacksToStackSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryImportStacksToStackSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportStacksToStackSetCommandOutput> {
    return deserializeAws_queryImportStacksToStackSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

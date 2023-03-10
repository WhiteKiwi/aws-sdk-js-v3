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
  CreateDBSubnetGroupMessage,
  CreateDBSubnetGroupMessageFilterSensitiveLog,
  CreateDBSubnetGroupResult,
  CreateDBSubnetGroupResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateDBSubnetGroupCommand,
  serializeAws_queryCreateDBSubnetGroupCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * The input for {@link CreateDBSubnetGroupCommand}.
 */
export interface CreateDBSubnetGroupCommandInput extends CreateDBSubnetGroupMessage {}
/**
 * The output of {@link CreateDBSubnetGroupCommand}.
 */
export interface CreateDBSubnetGroupCommandOutput extends CreateDBSubnetGroupResult, __MetadataBearer {}

/**
 * <p>Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBSubnetGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBSubnetGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupAlreadyExistsFault} (client fault)
 *  <p>
 *             <code>DBSubnetGroupName</code> is already used by an existing DB subnet group.</p>
 *
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
 *
 * @throws {@link DBSubnetGroupQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB subnet
 *             groups.</p>
 *
 * @throws {@link DBSubnetQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of subnets in a
 *             DB subnet groups.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
 *
 *
 * @example To create a DB subnet group.
 * ```javascript
 * // This example creates a DB subnet group.
 * const input = {
 *   "DBSubnetGroupDescription": "My DB subnet group",
 *   "DBSubnetGroupName": "mydbsubnetgroup",
 *   "SubnetIds": [
 *     "subnet-1fab8a69",
 *     "subnet-d43a468c"
 *   ]
 * };
 * const command = new CreateDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBSubnetGroup": {}
 * }
 * *\/
 * // example id: create-db-subnet-group-c3d162c2-0ec4-4955-ba89-18967615fdb8
 * ```
 *
 */
export class CreateDBSubnetGroupCommand extends $Command<
  CreateDBSubnetGroupCommandInput,
  CreateDBSubnetGroupCommandOutput,
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

  constructor(readonly input: CreateDBSubnetGroupCommandInput) {
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
  ): Handler<CreateDBSubnetGroupCommandInput, CreateDBSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBSubnetGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDBSubnetGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBSubnetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBSubnetGroupCommandOutput> {
    return deserializeAws_queryCreateDBSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

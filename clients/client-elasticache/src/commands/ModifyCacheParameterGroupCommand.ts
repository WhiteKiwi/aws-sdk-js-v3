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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  CacheParameterGroupNameMessage,
  CacheParameterGroupNameMessageFilterSensitiveLog,
  ModifyCacheParameterGroupMessage,
  ModifyCacheParameterGroupMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryModifyCacheParameterGroupCommand,
  serializeAws_queryModifyCacheParameterGroupCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link ModifyCacheParameterGroupCommand}.
 */
export interface ModifyCacheParameterGroupCommandInput extends ModifyCacheParameterGroupMessage {}
/**
 * The output of {@link ModifyCacheParameterGroupCommand}.
 */
export interface ModifyCacheParameterGroupCommandOutput extends CacheParameterGroupNameMessage, __MetadataBearer {}

/**
 * <p>Modifies the parameters of a cache
 *             parameter group. You can modify up to 20 parameters in a single request by submitting a
 *             list parameter name and value pairs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyCacheParameterGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyCacheParameterGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCacheParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyCacheParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheParameterGroupNotFoundFault} (client fault)
 *  <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
 *
 * @throws {@link InvalidCacheParameterGroupStateFault} (client fault)
 *  <p>The current state of the cache parameter group does not allow the requested operation to occur.</p>
 *
 * @throws {@link InvalidGlobalReplicationGroupStateFault} (client fault)
 *  <p>The Global datastore is not available or in primary-only state.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 *
 * @example ModifyCacheParameterGroup
 * ```javascript
 * // Modifies one or more parameter values in the specified parameter group. You cannot modify any default parameter group.
 * const input = {
 *   "CacheParameterGroupName": "custom-mem1-4",
 *   "ParameterNameValues": [
 *     {
 *       "ParameterName": "binding_protocol",
 *       "ParameterValue": "ascii"
 *     },
 *     {
 *       "ParameterName": "chunk_size",
 *       "ParameterValue": "96"
 *     }
 *   ]
 * };
 * const command = new ModifyCacheParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CacheParameterGroupName": "custom-mem1-4"
 * }
 * *\/
 * // example id: modifycacheparametergroup-1482966746787
 * ```
 *
 */
export class ModifyCacheParameterGroupCommand extends $Command<
  ModifyCacheParameterGroupCommandInput,
  ModifyCacheParameterGroupCommandOutput,
  ElastiCacheClientResolvedConfig
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

  constructor(readonly input: ModifyCacheParameterGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyCacheParameterGroupCommandInput, ModifyCacheParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyCacheParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ModifyCacheParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyCacheParameterGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CacheParameterGroupNameMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyCacheParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyCacheParameterGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyCacheParameterGroupCommandOutput> {
    return deserializeAws_queryModifyCacheParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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
  UpdateContactChannelRequest,
  UpdateContactChannelRequestFilterSensitiveLog,
  UpdateContactChannelResult,
  UpdateContactChannelResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateContactChannelCommand,
  serializeAws_json1_1UpdateContactChannelCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * The input for {@link UpdateContactChannelCommand}.
 */
export interface UpdateContactChannelCommandInput extends UpdateContactChannelRequest {}
/**
 * The output of {@link UpdateContactChannelCommand}.
 */
export interface UpdateContactChannelCommandOutput extends UpdateContactChannelResult, __MetadataBearer {}

/**
 * <p>Updates a contact's contact channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, UpdateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, UpdateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new UpdateContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContactChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
 *
 * @throws {@link DataEncryptionException} (client fault)
 *  <p>The operation failed to due an encryption key error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while
 *          processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 *
 * @example To update a contact channel
 * ```javascript
 * // The following update-contact-channel example updates the name and delivery address of a contact channel.
 * const input = {
 *   "ContactChannelId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact-channel/akuam/49f3c24d-5f9f-4638-ae25-3f49e04229ad",
 *   "DeliveryAddress": {
 *     "SimpleAddress": "+15005550198"
 *   },
 *   "Name": "akuas voice channel"
 * };
 * const command = new UpdateContactChannelCommand(input);
 * await client.send(command);
 * // example id: to-update-a-contact-channel-1630437610256
 * ```
 *
 */
export class UpdateContactChannelCommand extends $Command<
  UpdateContactChannelCommandInput,
  UpdateContactChannelCommandOutput,
  SSMContactsClientResolvedConfig
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

  constructor(readonly input: UpdateContactChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateContactChannelCommandInput, UpdateContactChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateContactChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "UpdateContactChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateContactChannelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateContactChannelResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateContactChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateContactChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateContactChannelCommandOutput> {
    return deserializeAws_json1_1UpdateContactChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

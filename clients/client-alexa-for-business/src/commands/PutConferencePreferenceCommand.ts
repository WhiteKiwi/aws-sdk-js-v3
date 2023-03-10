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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import {
  PutConferencePreferenceRequest,
  PutConferencePreferenceRequestFilterSensitiveLog,
  PutConferencePreferenceResponse,
  PutConferencePreferenceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutConferencePreferenceCommand,
  serializeAws_json1_1PutConferencePreferenceCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link PutConferencePreferenceCommand}.
 */
export interface PutConferencePreferenceCommandInput extends PutConferencePreferenceRequest {}
/**
 * The output of {@link PutConferencePreferenceCommand}.
 */
export interface PutConferencePreferenceCommandOutput extends PutConferencePreferenceResponse, __MetadataBearer {}

/**
 * <p>Sets the conference preferences on a specific conference provider at the account
 *          level.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutConferencePreferenceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutConferencePreferenceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new PutConferencePreferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConferencePreferenceCommandInput} for command's `input` shape.
 * @see {@link PutConferencePreferenceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 *
 */
export class PutConferencePreferenceCommand extends $Command<
  PutConferencePreferenceCommandInput,
  PutConferencePreferenceCommandOutput,
  AlexaForBusinessClientResolvedConfig
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

  constructor(readonly input: PutConferencePreferenceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutConferencePreferenceCommandInput, PutConferencePreferenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutConferencePreferenceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "PutConferencePreferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutConferencePreferenceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutConferencePreferenceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutConferencePreferenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutConferencePreferenceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutConferencePreferenceCommandOutput> {
    return deserializeAws_json1_1PutConferencePreferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

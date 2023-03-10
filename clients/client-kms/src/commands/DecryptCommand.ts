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

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  DecryptRequest,
  DecryptRequestFilterSensitiveLog,
  DecryptResponse,
  DecryptResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1DecryptCommand, serializeAws_json1_1DecryptCommand } from "../protocols/Aws_json1_1";

/**
 * The input for {@link DecryptCommand}.
 */
export interface DecryptCommandInput extends DecryptRequest {}
/**
 * The output of {@link DecryptCommand}.
 */
export interface DecryptCommandOutput extends DecryptResponse, __MetadataBearer {}

/**
 * <p>Decrypts ciphertext that was encrypted by a KMS key using any of the following
 *       operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>Encrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyPair</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyWithoutPlaintext</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyPairWithoutPlaintext</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>You can use this operation to decrypt ciphertext that was encrypted under a symmetric
 *       encryption KMS key or an asymmetric encryption KMS key. When the KMS key is asymmetric, you
 *       must specify the KMS key and the encryption algorithm that was used to encrypt the ciphertext.
 *       For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The <code>Decrypt</code> operation also decrypts ciphertext that was encrypted outside of
 *       KMS by the public key in an KMS asymmetric KMS key. However, it cannot decrypt symmetric
 *       ciphertext produced by other libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">Amazon Web Services Encryption SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>.
 *       These libraries return a ciphertext format that is incompatible with KMS.</p>
 *          <p>If the ciphertext was encrypted under a symmetric encryption KMS key, the
 *         <code>KeyId</code> parameter is optional. KMS can get this information from metadata that
 *       it adds to the symmetric ciphertext blob. This feature adds durability to your implementation
 *       by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even
 *       if they've lost track of the key ID. However, specifying the KMS key is always recommended as
 *       a best practice. When you use the <code>KeyId</code> parameter to specify a KMS key, KMS
 *       only uses the KMS key you specify. If the ciphertext was encrypted under a different KMS key,
 *       the <code>Decrypt</code> operation fails. This practice ensures that you use the KMS key that
 *       you intend.</p>
 *          <p>Whenever possible, use key policies to give users permission to call the
 *         <code>Decrypt</code> operation on a particular KMS key, instead of using &IAM; policies.
 *       Otherwise, you might create an &IAM; policy that gives the user <code>Decrypt</code>
 *       permission on all KMS keys. This user could decrypt ciphertext that was encrypted by KMS keys
 *       in other accounts if the key policy for the cross-account KMS key permits it. If you must use
 *       an IAM policy for <code>Decrypt</code> permissions, limit the user to particular KMS keys or
 *       particular trusted accounts. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html#iam-policies-best-practices">Best practices for IAM
 *         policies</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>Applications in Amazon Web Services Nitro Enclaves can call this operation by using the <a href="https://github.com/aws/aws-nitro-enclaves-sdk-c">Amazon Web Services Nitro Enclaves Development Kit</a>. For information about the supporting parameters, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves use KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. If you use the <code>KeyId</code>
 *       parameter to identify a KMS key in a different Amazon Web Services account, specify the key ARN or the alias
 *       ARN of the KMS key.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Decrypt</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>Encrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyPair</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ReEncrypt</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DecryptCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DecryptCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new DecryptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DecryptCommandInput} for command's `input` shape.
 * @see {@link DecryptCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link DisabledException} (client fault)
 *  <p>The request was rejected because the specified KMS key is not enabled.</p>
 *
 * @throws {@link IncorrectKeyException} (client fault)
 *  <p>The request was rejected because the specified KMS key cannot decrypt the data. The
 *         <code>KeyId</code> in a <a>Decrypt</a> request and the <code>SourceKeyId</code>
 *       in a <a>ReEncrypt</a> request must identify the same KMS key that was used to
 *       encrypt the ciphertext.</p>
 *
 * @throws {@link InvalidCiphertextException} (client fault)
 *  <p>From the <a>Decrypt</a> or <a>ReEncrypt</a> operation, the request
 *       was rejected because the specified ciphertext, or additional authenticated data incorporated
 *       into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise
 *       invalid.</p>
 *          <p>From the <a>ImportKeyMaterial</a> operation, the request was rejected because
 *       KMS could not decrypt the encrypted (wrapped) key material. </p>
 *
 * @throws {@link InvalidGrantTokenException} (client fault)
 *  <p>The request was rejected because the specified grant token is not valid.</p>
 *
 * @throws {@link InvalidKeyUsageException} (client fault)
 *  <p>The request was rejected for one of the following reasons: </p>
 *          <ul>
 *             <li>
 *                <p>The <code>KeyUsage</code> value of the KMS key is incompatible with the API
 *           operation.</p>
 *             </li>
 *             <li>
 *                <p>The encryption algorithm or signing algorithm specified for the operation is
 *           incompatible with the type of key material in the KMS key <code>(KeySpec</code>).</p>
 *             </li>
 *          </ul>
 *          <p>For encrypting, decrypting, re-encrypting, and generating data keys, the
 *         <code>KeyUsage</code> must be <code>ENCRYPT_DECRYPT</code>. For signing and verifying
 *       messages, the <code>KeyUsage</code> must be <code>SIGN_VERIFY</code>. For generating and
 *       verifying message authentication codes (MACs), the <code>KeyUsage</code> must be
 *         <code>GENERATE_VERIFY_MAC</code>. To find the <code>KeyUsage</code> of a KMS key, use the
 *         <a>DescribeKey</a> operation.</p>
 *          <p>To find the encryption or signing algorithms supported for a particular KMS key, use the
 *         <a>DescribeKey</a> operation.</p>
 *
 * @throws {@link KeyUnavailableException} (server fault)
 *  <p>The request was rejected because the specified KMS key was not available. You can retry
 *       the request.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource is not valid for this
 *       request.</p>
 *          <p>This exceptions means one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The key state of the KMS key is not compatible with the operation. </p>
 *                <p>To find the key state, use the <a>DescribeKey</a> operation. For more
 *           information about which key states are compatible with each KMS operation, see
 *           <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For cryptographic operations on KMS keys in custom key stores, this exception represents a general failure with many possible causes. To identify the cause, see the error message that accompanies the exception.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 *
 * @example To decrypt data
 * ```javascript
 * // The following example decrypts data that was encrypted with a KMS key.
 * const input = {
 *   "CiphertextBlob": "<binary data>",
 *   "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new DecryptCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "Plaintext": "<binary data>"
 * }
 * *\/
 * // example id: to-decrypt-data-1478281622886
 * ```
 *
 */
export class DecryptCommand extends $Command<DecryptCommandInput, DecryptCommandOutput, KMSClientResolvedConfig> {
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

  constructor(readonly input: DecryptCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DecryptCommandInput, DecryptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DecryptCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "DecryptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DecryptRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DecryptResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DecryptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DecryptCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DecryptCommandOutput> {
    return deserializeAws_json1_1DecryptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IoTServiceException as __BaseException } from "./IoTServiceException";
import {
  AbortConfig,
  Action,
  ActiveViolation,
  AggregationType,
  AlertTarget,
  AuditCheckConfiguration,
  AuditCheckDetails,
  AuditFinding,
  AuditFrequency,
  AuditMitigationActionExecutionMetadata,
  AuditMitigationActionsExecutionStatus,
  AuditMitigationActionsTaskMetadata,
  AuditMitigationActionsTaskStatus,
  AuditMitigationActionsTaskTarget,
  AuditNotificationTarget,
  AuditSuppression,
  AuditTaskMetadata,
  AuditTaskStatus,
  AuditTaskType,
  AuthorizerConfig,
  AuthorizerDescription,
  AuthorizerStatus,
  AuthorizerSummary,
  AutoRegistrationStatus,
  AwsJobExecutionsRolloutConfig,
  AwsJobPresignedUrlConfig,
  Behavior,
  BillingGroupProperties,
  CustomMetricType,
  DayOfWeek,
  DimensionType,
  DimensionValueOperator,
  FleetMetricUnit,
  JobExecutionsRetryConfig,
  JobExecutionsRolloutConfig,
  LogLevel,
  MaintenanceWindow,
  MetricToRetain,
  MetricValue,
  MitigationActionParams,
  OTAUpdateFile,
  OTAUpdateStatus,
  PackageVersionStatus,
  Policy,
  PresignedUrlConfig,
  Protocol,
  ProvisioningHook,
  ResourceIdentifier,
  SchedulingConfig,
  ServiceType,
  StreamFile,
  TargetSelection,
  TaskStatisticsForAuditCheck,
  TemplateType,
  ThingGroupProperties,
  ThingTypeProperties,
  TimeoutConfig,
  TlsConfig,
  TopicRuleDestination,
  VerificationState,
} from "./models_0";

/**
 * @public
 */
export interface DeleteFleetMetricRequest {
  /**
   * <p>The name of the fleet metric to delete.</p>
   */
  metricName: string | undefined;

  /**
   * <p>The expected version of the fleet metric to delete.</p>
   */
  expectedVersion?: number;
}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * <p>The ID of the job to be deleted.</p>
   *          <p>After a job deletion is completed, you may reuse this jobId when you create a new job.
   *         However, this is not recommended, and you must ensure that your devices are not using the
   *         jobId to refer to the deleted job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>(Optional) When true, you can delete a job which is "IN_PROGRESS". Otherwise, you can
   *         only delete a job which is in a terminal state ("COMPLETED" or "CANCELED") or an exception
   *         will occur. The default is false.</p>
   *          <note>
   *             <p>Deleting a job which is "IN_PROGRESS", will cause a device which is executing
   *         the job to be unable to access job information or update the job execution status.
   *         Use caution and ensure that each device executing a job which is deleted is able to recover to
   *         a valid state.</p>
   *          </note>
   */
  force?: boolean;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *          <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *          <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *          <note>
   *             <p>The <code>namespaceId</code> feature is in public preview.</p>
   *          </note>
   */
  namespaceId?: string;
}

/**
 * @public
 */
export interface DeleteJobExecutionRequest {
  /**
   * <p>The ID of the job whose execution on a particular device will be deleted.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing whose job execution will be deleted.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The ID of the job execution to be deleted. The <code>executionNumber</code> refers to the
   *         execution of a particular job on a particular device.</p>
   *          <p>Note that once a job execution is deleted, the <code>executionNumber</code> may be reused
   *         by IoT, so be sure you get and use the correct value here.</p>
   */
  executionNumber: number | undefined;

  /**
   * <p>(Optional) When true, you can delete a job execution which is "IN_PROGRESS". Otherwise,
   *         you can only delete a job execution which is in a terminal state ("SUCCEEDED", "FAILED",
   *         "REJECTED", "REMOVED" or "CANCELED") or an exception will occur. The default is false.</p>
   *          <note>
   *             <p>Deleting a job execution which is "IN_PROGRESS", will cause the device
   *         to be unable to access job information or update the job execution status.
   *         Use caution and ensure that the device is able to recover to a valid state.</p>
   *          </note>
   */
  force?: boolean;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *          <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *          <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *          <note>
   *             <p>The <code>namespaceId</code> feature is in public preview.</p>
   *          </note>
   */
  namespaceId?: string;
}

/**
 * @public
 */
export interface DeleteJobTemplateRequest {
  /**
   * <p>The unique identifier of the job template to delete.</p>
   */
  jobTemplateId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMitigationActionRequest {
  /**
   * <p>The name of the mitigation action that you want to delete.</p>
   */
  actionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMitigationActionResponse {}

/**
 * @public
 */
export interface DeleteOTAUpdateRequest {
  /**
   * <p>The ID of the OTA update to delete.</p>
   */
  otaUpdateId: string | undefined;

  /**
   * <p>When true, the stream created by the OTAUpdate process is deleted when the OTA update is deleted.
   *             Ignored if the stream specified in the OTAUpdate is supplied by the user.</p>
   */
  deleteStream?: boolean;

  /**
   * <p>When true, deletes the IoT job created by the OTAUpdate process even if it is "IN_PROGRESS". Otherwise, if the
   *             job is not in a terminal state ("COMPLETED" or "CANCELED") an exception will occur. The default is false.</p>
   */
  forceDeleteAWSJob?: boolean;
}

/**
 * @public
 */
export interface DeleteOTAUpdateResponse {}

/**
 * @public
 */
export interface DeletePackageRequest {
  /**
   * <p>The name of the target package.</p>
   */
  packageName: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeletePackageResponse {}

/**
 * @public
 */
export interface DeletePackageVersionRequest {
  /**
   * <p>The name of the associated package.</p>
   */
  packageName: string | undefined;

  /**
   * <p>The name of the target package version.</p>
   */
  versionName: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeletePackageVersionResponse {}

/**
 * @public
 * <p>The input for the DeletePolicy operation.</p>
 */
export interface DeletePolicyRequest {
  /**
   * <p>The name of the policy to delete.</p>
   */
  policyName: string | undefined;
}

/**
 * @public
 * <p>The input for the DeletePolicyVersion operation.</p>
 */
export interface DeletePolicyVersionRequest {
  /**
   * <p>The name of the policy.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisioningTemplateRequest {
  /**
   * <p>The name of the fleet provision template to delete.</p>
   */
  templateName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisioningTemplateResponse {}

/**
 * @public
 */
export interface DeleteProvisioningTemplateVersionRequest {
  /**
   * <p>The name of the provisioning template version to delete.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The provisioning template version ID to delete.</p>
   */
  versionId: number | undefined;
}

/**
 * @public
 */
export interface DeleteProvisioningTemplateVersionResponse {}

/**
 * @public
 * <p>The input for the DeleteRegistrationCode operation.</p>
 */
export interface DeleteRegistrationCodeRequest {}

/**
 * @public
 * <p>The output for the DeleteRegistrationCode operation.</p>
 */
export interface DeleteRegistrationCodeResponse {}

/**
 * @public
 */
export interface DeleteRoleAliasRequest {
  /**
   * <p>The role alias to delete.</p>
   */
  roleAlias: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoleAliasResponse {}

/**
 * @public
 */
export interface DeleteScheduledAuditRequest {
  /**
   * <p>The name of the scheduled audit you want to delete.</p>
   */
  scheduledAuditName: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduledAuditResponse {}

/**
 * @public
 */
export interface DeleteSecurityProfileRequest {
  /**
   * <p>The name of the security profile to be deleted.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>The expected version of the security profile. A new version is generated whenever
   *         the security profile is updated. If you specify a value that is different from the actual
   *         version, a <code>VersionConflictException</code> is thrown.</p>
   */
  expectedVersion?: number;
}

/**
 * @public
 */
export interface DeleteSecurityProfileResponse {}

/**
 * @public
 */
export interface DeleteStreamRequest {
  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStreamResponse {}

/**
 * @public
 * <p>The input for the DeleteThing operation.</p>
 */
export interface DeleteThingRequest {
  /**
   * <p>The name of the thing to delete.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The expected version of the thing record in the registry. If the version of the
   * 			record in the registry does not match the expected version specified in the request, the
   * 				<code>DeleteThing</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   */
  expectedVersion?: number;
}

/**
 * @public
 * <p>The output of the DeleteThing operation.</p>
 */
export interface DeleteThingResponse {}

/**
 * @public
 */
export interface DeleteThingGroupRequest {
  /**
   * <p>The name of the thing group to delete.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The expected version of the thing group to delete.</p>
   */
  expectedVersion?: number;
}

/**
 * @public
 */
export interface DeleteThingGroupResponse {}

/**
 * @public
 * <p>The input for the DeleteThingType operation.</p>
 */
export interface DeleteThingTypeRequest {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName: string | undefined;
}

/**
 * @public
 * <p>The output for the DeleteThingType operation.</p>
 */
export interface DeleteThingTypeResponse {}

/**
 * @public
 * <p>The input for the DeleteTopicRule operation.</p>
 */
export interface DeleteTopicRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicRuleDestinationRequest {
  /**
   * <p>The ARN of the topic rule destination to delete.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicRuleDestinationResponse {}

/**
 * @public
 * @enum
 */
export const LogTargetType = {
  CLIENT_ID: "CLIENT_ID",
  DEFAULT: "DEFAULT",
  PRINCIPAL_ID: "PRINCIPAL_ID",
  SOURCE_IP: "SOURCE_IP",
  THING_GROUP: "THING_GROUP",
} as const;

/**
 * @public
 */
export type LogTargetType = (typeof LogTargetType)[keyof typeof LogTargetType];

/**
 * @public
 */
export interface DeleteV2LoggingLevelRequest {
  /**
   * <p>The type of resource for which you are configuring logging. Must be
   *             <code>THING_Group</code>.</p>
   */
  targetType: LogTargetType | string | undefined;

  /**
   * <p>The name of the resource for which you are configuring logging.</p>
   */
  targetName: string | undefined;
}

/**
 * @public
 * <p>The input for the DeprecateThingType operation.</p>
 */
export interface DeprecateThingTypeRequest {
  /**
   * <p>The name of the thing type to deprecate.</p>
   */
  thingTypeName: string | undefined;

  /**
   * <p>Whether to undeprecate a deprecated thing type. If <b>true</b>, the thing type will not be deprecated anymore and you can
   * 			associate it with things.</p>
   */
  undoDeprecate?: boolean;
}

/**
 * @public
 * <p>The output for the DeprecateThingType operation.</p>
 */
export interface DeprecateThingTypeResponse {}

/**
 * @public
 */
export interface DescribeAccountAuditConfigurationRequest {}

/**
 * @public
 */
export interface DescribeAccountAuditConfigurationResponse {
  /**
   * <p>The ARN of the role that grants permission to IoT to access information
   *             about your devices, policies, certificates, and other items as required when
   *             performing an audit.</p>
   *          <p>On the first call to <code>UpdateAccountAuditConfiguration</code>,
   *             this parameter is required.</p>
   */
  roleArn?: string;

  /**
   * <p>Information about the targets to which audit notifications are sent for
   *             this account.</p>
   */
  auditNotificationTargetConfigurations?: Record<string, AuditNotificationTarget>;

  /**
   * <p>Which audit checks are enabled and disabled for this account.</p>
   */
  auditCheckConfigurations?: Record<string, AuditCheckConfiguration>;
}

/**
 * @public
 */
export interface DescribeAuditFindingRequest {
  /**
   * <p>A unique identifier for a single audit finding. You can use this identifier to apply mitigation actions to the finding.</p>
   */
  findingId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAuditFindingResponse {
  /**
   * <p>The findings (results) of the audit.</p>
   */
  finding?: AuditFinding;
}

/**
 * @public
 */
export interface DescribeAuditMitigationActionsTaskRequest {
  /**
   * <p>The unique identifier for the audit mitigation task.</p>
   */
  taskId: string | undefined;
}

/**
 * @public
 * <p>Describes which changes should be applied as part of a mitigation action.</p>
 */
export interface MitigationAction {
  /**
   * <p>A user-friendly name for the mitigation action.</p>
   */
  name?: string;

  /**
   * <p>A unique identifier for the mitigation action.</p>
   */
  id?: string;

  /**
   * <p>The IAM role ARN used to apply this mitigation action.</p>
   */
  roleArn?: string;

  /**
   * <p>The set of parameters for this mitigation action. The parameters vary, depending on the kind of action you apply.</p>
   */
  actionParams?: MitigationActionParams;
}

/**
 * @public
 */
export interface DescribeAuditMitigationActionsTaskResponse {
  /**
   * <p>The current status of the task.</p>
   */
  taskStatus?: AuditMitigationActionsTaskStatus | string;

  /**
   * <p>The date and time when the task was started.</p>
   */
  startTime?: Date;

  /**
   * <p>The date and time when the task was completed or canceled.</p>
   */
  endTime?: Date;

  /**
   * <p>Aggregate counts of the results when the mitigation tasks were applied to the findings for this audit mitigation actions task.</p>
   */
  taskStatistics?: Record<string, TaskStatisticsForAuditCheck>;

  /**
   * <p>Identifies the findings to which the mitigation actions are applied. This can be by audit checks, by audit task, or a set of findings.</p>
   */
  target?: AuditMitigationActionsTaskTarget;

  /**
   * <p>Specifies the mitigation actions that should be applied to specific audit checks.</p>
   */
  auditCheckToActionsMapping?: Record<string, string[]>;

  /**
   * <p>Specifies the mitigation actions and their parameters that are applied as part of this task.</p>
   */
  actionsDefinition?: MitigationAction[];
}

/**
 * @public
 */
export interface DescribeAuditSuppressionRequest {
  /**
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   */
  checkName: string | undefined;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier: ResourceIdentifier | undefined;
}

/**
 * @public
 */
export interface DescribeAuditSuppressionResponse {
  /**
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   */
  checkName?: string;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>
   *       The epoch timestamp in seconds at which this suppression expires.
   *     </p>
   */
  expirationDate?: Date;

  /**
   * <p>
   *       Indicates whether a suppression should exist indefinitely or not.
   *     </p>
   */
  suppressIndefinitely?: boolean;

  /**
   * <p>
   *       The description of the audit suppression.
   *     </p>
   */
  description?: string;
}

/**
 * @public
 */
export interface DescribeAuditTaskRequest {
  /**
   * <p>The ID of the audit whose information you want to get.</p>
   */
  taskId: string | undefined;
}

/**
 * @public
 * <p>Statistics for the checks performed during the audit.</p>
 */
export interface TaskStatistics {
  /**
   * <p>The number of checks in this audit.</p>
   */
  totalChecks?: number;

  /**
   * <p>The number of checks in progress.</p>
   */
  inProgressChecks?: number;

  /**
   * <p>The number of checks waiting for data collection.</p>
   */
  waitingForDataCollectionChecks?: number;

  /**
   * <p>The number of checks that found compliant resources.</p>
   */
  compliantChecks?: number;

  /**
   * <p>The number of checks that found noncompliant resources.</p>
   */
  nonCompliantChecks?: number;

  /**
   * <p>The number of checks.</p>
   */
  failedChecks?: number;

  /**
   * <p>The number of checks that did not run because the audit was canceled.</p>
   */
  canceledChecks?: number;
}

/**
 * @public
 */
export interface DescribeAuditTaskResponse {
  /**
   * <p>The status of the audit: one of "IN_PROGRESS", "COMPLETED",
   *             "FAILED", or "CANCELED".</p>
   */
  taskStatus?: AuditTaskStatus | string;

  /**
   * <p>The type of audit: "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK".</p>
   */
  taskType?: AuditTaskType | string;

  /**
   * <p>The time the audit started.</p>
   */
  taskStartTime?: Date;

  /**
   * <p>Statistical information about the audit.</p>
   */
  taskStatistics?: TaskStatistics;

  /**
   * <p>The name of the scheduled audit (only if the audit was a scheduled audit).</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>Detailed information about each check performed during this audit.</p>
   */
  auditDetails?: Record<string, AuditCheckDetails>;
}

/**
 * @public
 */
export interface DescribeAuthorizerRequest {
  /**
   * <p>The name of the authorizer to describe.</p>
   */
  authorizerName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAuthorizerResponse {
  /**
   * <p>The authorizer description.</p>
   */
  authorizerDescription?: AuthorizerDescription;
}

/**
 * @public
 */
export interface DescribeBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;
}

/**
 * @public
 * <p>Additional information about the billing group.</p>
 */
export interface BillingGroupMetadata {
  /**
   * <p>The date the billing group was created.</p>
   */
  creationDate?: Date;
}

/**
 * @public
 */
export interface DescribeBillingGroupResponse {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The ID of the billing group.</p>
   */
  billingGroupId?: string;

  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The version of the billing group.</p>
   */
  version?: number;

  /**
   * <p>The properties of the billing group.</p>
   */
  billingGroupProperties?: BillingGroupProperties;

  /**
   * <p>Additional information about the billing group.</p>
   */
  billingGroupMetadata?: BillingGroupMetadata;
}

/**
 * @public
 * <p>The input for the DescribeCACertificate operation.</p>
 */
export interface DescribeCACertificateRequest {
  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CertificateMode = {
  DEFAULT: "DEFAULT",
  SNI_ONLY: "SNI_ONLY",
} as const;

/**
 * @public
 */
export type CertificateMode = (typeof CertificateMode)[keyof typeof CertificateMode];

/**
 * @public
 * @enum
 */
export const CACertificateStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type CACertificateStatus = (typeof CACertificateStatus)[keyof typeof CACertificateStatus];

/**
 * @public
 * <p>When the certificate is valid.</p>
 */
export interface CertificateValidity {
  /**
   * <p>The certificate is not valid before this date.</p>
   */
  notBefore?: Date;

  /**
   * <p>The certificate is not valid after this date.</p>
   */
  notAfter?: Date;
}

/**
 * @public
 * <p>Describes a CA certificate.</p>
 */
export interface CACertificateDescription {
  /**
   * <p>The CA certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The CA certificate ID.</p>
   */
  certificateId?: string;

  /**
   * <p>The status of a CA certificate.</p>
   */
  status?: CACertificateStatus | string;

  /**
   * <p>The CA certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The owner of the CA certificate.</p>
   */
  ownedBy?: string;

  /**
   * <p>The date the CA certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>Whether the CA certificate configured for auto registration of device certificates.
   *          Valid values are "ENABLE" and "DISABLE"</p>
   */
  autoRegistrationStatus?: AutoRegistrationStatus | string;

  /**
   * <p>The date the CA certificate was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The customer version of the CA certificate.</p>
   */
  customerVersion?: number;

  /**
   * <p>The generation ID of the CA certificate.</p>
   */
  generationId?: string;

  /**
   * <p>When the CA certificate is valid.</p>
   */
  validity?: CertificateValidity;

  /**
   * <p>The mode of the CA. </p>
   *          <p>All the device certificates that are registered using this CA will be registered
   *          in the same mode as the CA. For more information about certificate mode for device certificates, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode">certificate mode</a>.</p>
   */
  certificateMode?: CertificateMode | string;
}

/**
 * @public
 * <p>The registration configuration.</p>
 */
export interface RegistrationConfig {
  /**
   * <p>The template body.</p>
   */
  templateBody?: string;

  /**
   * <p>The ARN of the role.</p>
   */
  roleArn?: string;

  /**
   * <p>The name of the provisioning template.</p>
   */
  templateName?: string;
}

/**
 * @public
 * <p>The output from the DescribeCACertificate operation.</p>
 */
export interface DescribeCACertificateResponse {
  /**
   * <p>The CA certificate description.</p>
   */
  certificateDescription?: CACertificateDescription;

  /**
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: RegistrationConfig;
}

/**
 * @public
 * <p>The input for the DescribeCertificate operation.</p>
 */
export interface DescribeCertificateRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CertificateStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING_ACTIVATION: "PENDING_ACTIVATION",
  PENDING_TRANSFER: "PENDING_TRANSFER",
  REGISTER_INACTIVE: "REGISTER_INACTIVE",
  REVOKED: "REVOKED",
} as const;

/**
 * @public
 */
export type CertificateStatus = (typeof CertificateStatus)[keyof typeof CertificateStatus];

/**
 * @public
 * <p>Data used to transfer a certificate to an Amazon Web Services account.</p>
 */
export interface TransferData {
  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;

  /**
   * <p>The reason why the transfer was rejected.</p>
   */
  rejectReason?: string;

  /**
   * <p>The date the transfer took place.</p>
   */
  transferDate?: Date;

  /**
   * <p>The date the transfer was accepted.</p>
   */
  acceptDate?: Date;

  /**
   * <p>The date the transfer was rejected.</p>
   */
  rejectDate?: Date;
}

/**
 * @public
 * <p>Describes a certificate.</p>
 */
export interface CertificateDescription {
  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The certificate ID of the CA certificate used to sign this certificate.</p>
   */
  caCertificateId?: string;

  /**
   * <p>The status of the certificate.</p>
   */
  status?: CertificateStatus | string;

  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the certificate.</p>
   */
  ownedBy?: string;

  /**
   * <p>The ID of the Amazon Web Services account of the previous owner of the certificate.</p>
   */
  previousOwnedBy?: string;

  /**
   * <p>The date and time the certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date and time the certificate was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The customer version of the certificate.</p>
   */
  customerVersion?: number;

  /**
   * <p>The transfer data.</p>
   */
  transferData?: TransferData;

  /**
   * <p>The generation ID of the certificate.</p>
   */
  generationId?: string;

  /**
   * <p>When the certificate is valid.</p>
   */
  validity?: CertificateValidity;

  /**
   * <p>The mode of the certificate.</p>
   *          <p>
   *             <code>DEFAULT</code>: A certificate in <code>DEFAULT</code> mode is either generated by
   *          Amazon Web Services IoT Core or registered with an issuer certificate authority (CA) in <code>DEFAULT</code> mode. Devices with
   *          certificates in <code>DEFAULT</code> mode aren't required to send the Server Name
   *          Indication (SNI) extension when connecting to Amazon Web Services IoT Core. However, to use features such as
   *          custom domains and VPC endpoints, we recommend that you use the SNI extension when
   *          connecting to Amazon Web Services IoT Core.</p>
   *          <p>
   *             <code>SNI_ONLY</code>: A certificate in <code>SNI_ONLY</code> mode is registered without an issuer CA. Devices with certificates
   *          in <code>SNI_ONLY</code> mode must send the SNI extension when connecting to Amazon Web Services IoT Core. </p>
   *          <p>For more information about the value for SNI extension, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/transport-security.html">Transport security in IoT</a>.</p>
   */
  certificateMode?: CertificateMode | string;
}

/**
 * @public
 * <p>The output of the DescribeCertificate operation.</p>
 */
export interface DescribeCertificateResponse {
  /**
   * <p>The description of the certificate.</p>
   */
  certificateDescription?: CertificateDescription;
}

/**
 * @public
 */
export interface DescribeCustomMetricRequest {
  /**
   * <p>
   *       The name of the custom metric.
   *     </p>
   */
  metricName: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomMetricResponse {
  /**
   * <p>
   *       The name of the custom metric.
   *     </p>
   */
  metricName?: string;

  /**
   * <p>
   *       The Amazon Resource Number (ARN) of the custom metric.
   *     </p>
   */
  metricArn?: string;

  /**
   * <p> The type of the custom metric. </p>
   *          <important>
   *             <p>The type <code>number</code> only takes a single metric value as an input, but while submitting the metrics value in the DeviceMetrics report, it must be passed as an array with a single value.</p>
   *          </important>
   */
  metricType?: CustomMetricType | string;

  /**
   * <p>
   *       Field represents a friendly name in the console for the custom metric; doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated.
   *     </p>
   */
  displayName?: string;

  /**
   * <p>
   *       The creation date of the custom metric in milliseconds since epoch.
   *     </p>
   */
  creationDate?: Date;

  /**
   * <p>
   *       The time the custom metric was last modified in milliseconds since epoch.
   *     </p>
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface DescribeDefaultAuthorizerRequest {}

/**
 * @public
 */
export interface DescribeDefaultAuthorizerResponse {
  /**
   * <p>The default authorizer's description.</p>
   */
  authorizerDescription?: AuthorizerDescription;
}

/**
 * @public
 */
export interface DescribeDetectMitigationActionsTaskRequest {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   */
  taskId: string | undefined;
}

/**
 * @public
 * <p>
 *             The target of a mitigation action task.
 *         </p>
 */
export interface DetectMitigationActionsTaskTarget {
  /**
   * <p>
   *             The unique identifiers of the violations.
   *         </p>
   */
  violationIds?: string[];

  /**
   * <p>
   *             The name of the security profile.
   *         </p>
   */
  securityProfileName?: string;

  /**
   * <p>
   *             The name of the behavior.
   *         </p>
   */
  behaviorName?: string;
}

/**
 * @public
 * <p>
 *             The statistics of a mitigation action task.
 *         </p>
 */
export interface DetectMitigationActionsTaskStatistics {
  /**
   * <p>
   *             The actions that were performed.
   *         </p>
   */
  actionsExecuted?: number;

  /**
   * <p>
   *             The actions that were skipped.
   *         </p>
   */
  actionsSkipped?: number;

  /**
   * <p>
   *             The actions that failed.
   *         </p>
   */
  actionsFailed?: number;
}

/**
 * @public
 * @enum
 */
export const DetectMitigationActionsTaskStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESSFUL: "SUCCESSFUL",
} as const;

/**
 * @public
 */
export type DetectMitigationActionsTaskStatus =
  (typeof DetectMitigationActionsTaskStatus)[keyof typeof DetectMitigationActionsTaskStatus];

/**
 * @public
 * <p>
 *             Specifies the time period of which violation events occurred between.
 *         </p>
 */
export interface ViolationEventOccurrenceRange {
  /**
   * <p>
   *             The start date and time of a time period in which violation events occurred.
   *         </p>
   */
  startTime: Date | undefined;

  /**
   * <p>
   *             The end date and time of a time period in which violation events occurred.
   *         </p>
   */
  endTime: Date | undefined;
}

/**
 * @public
 * <p>
 *             The summary of the mitigation action tasks.
 *         </p>
 */
export interface DetectMitigationActionsTaskSummary {
  /**
   * <p>
   *             The unique identifier of the task.
   *         </p>
   */
  taskId?: string;

  /**
   * <p>
   *             The status of the task.
   *         </p>
   */
  taskStatus?: DetectMitigationActionsTaskStatus | string;

  /**
   * <p>
   *             The date the task started.
   *         </p>
   */
  taskStartTime?: Date;

  /**
   * <p>
   *             The date the task ended.
   *         </p>
   */
  taskEndTime?: Date;

  /**
   * <p>
   *             Specifies the ML Detect findings to which the mitigation actions are applied.
   *         </p>
   */
  target?: DetectMitigationActionsTaskTarget;

  /**
   * <p>
   *             Specifies the time period of which violation events occurred between.
   *         </p>
   */
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange;

  /**
   * <p>
   *             Includes only active violations.
   *         </p>
   */
  onlyActiveViolationsIncluded?: boolean;

  /**
   * <p>
   *             Includes suppressed alerts.
   *         </p>
   */
  suppressedAlertsIncluded?: boolean;

  /**
   * <p>
   *             The definition of the actions.
   *         </p>
   */
  actionsDefinition?: MitigationAction[];

  /**
   * <p>
   *             The statistics of a mitigation action task.
   *         </p>
   */
  taskStatistics?: DetectMitigationActionsTaskStatistics;
}

/**
 * @public
 */
export interface DescribeDetectMitigationActionsTaskResponse {
  /**
   * <p>
   *       The description of a task.
   *     </p>
   */
  taskSummary?: DetectMitigationActionsTaskSummary;
}

/**
 * @public
 */
export interface DescribeDimensionRequest {
  /**
   * <p>The unique identifier for the dimension.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DescribeDimensionResponse {
  /**
   * <p>The unique identifier for the dimension.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name
   *       (ARN)
   *       for
   *       the dimension.</p>
   */
  arn?: string;

  /**
   * <p>The type of the dimension.</p>
   */
  type?: DimensionType | string;

  /**
   * <p>The value or list of values used to scope the dimension. For example, for topic filters, this is the pattern used to match the MQTT topic name.</p>
   */
  stringValues?: string[];

  /**
   * <p>The date the dimension was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the dimension was last modified.</p>
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface DescribeDomainConfigurationRequest {
  /**
   * <p>The name of the domain configuration.</p>
   */
  domainConfigurationName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainConfigurationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DomainConfigurationStatus = (typeof DomainConfigurationStatus)[keyof typeof DomainConfigurationStatus];

/**
 * @public
 * @enum
 */
export const DomainType = {
  AWS_MANAGED: "AWS_MANAGED",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
  ENDPOINT: "ENDPOINT",
} as const;

/**
 * @public
 */
export type DomainType = (typeof DomainType)[keyof typeof DomainType];

/**
 * @public
 * @enum
 */
export const ServerCertificateStatus = {
  INVALID: "INVALID",
  VALID: "VALID",
} as const;

/**
 * @public
 */
export type ServerCertificateStatus = (typeof ServerCertificateStatus)[keyof typeof ServerCertificateStatus];

/**
 * @public
 * <p>An object that contains information about a server certificate.</p>
 */
export interface ServerCertificateSummary {
  /**
   * <p>The ARN of the server certificate.</p>
   */
  serverCertificateArn?: string;

  /**
   * <p>The status of the server certificate.</p>
   */
  serverCertificateStatus?: ServerCertificateStatus | string;

  /**
   * <p>Details that explain the status of the server certificate.</p>
   */
  serverCertificateStatusDetail?: string;
}

/**
 * @public
 */
export interface DescribeDomainConfigurationResponse {
  /**
   * <p>The name of the domain configuration.</p>
   */
  domainConfigurationName?: string;

  /**
   * <p>The ARN of the domain configuration.</p>
   */
  domainConfigurationArn?: string;

  /**
   * <p>The name of the domain.</p>
   */
  domainName?: string;

  /**
   * <p>A list containing summary information about the server certificate included in the domain configuration.</p>
   */
  serverCertificates?: ServerCertificateSummary[];

  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * <p>A Boolean value that specifies the current state of the domain configuration.</p>
   */
  domainConfigurationStatus?: DomainConfigurationStatus | string;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;

  /**
   * <p>The type of the domain.</p>
   */
  domainType?: DomainType | string;

  /**
   * <p>The date and time the domain configuration's status was last changed.</p>
   */
  lastStatusChangeDate?: Date;

  /**
   * <p>An object that specifies the TLS configuration for a domain.</p>
   */
  tlsConfig?: TlsConfig;
}

/**
 * @public
 * <p>The input for the DescribeEndpoint operation.</p>
 */
export interface DescribeEndpointRequest {
  /**
   * <p>The endpoint type. Valid endpoint types include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:Data</code> - Returns a VeriSign signed data endpoint.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:Data-ATS</code> - Returns an ATS signed data endpoint.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:CredentialProvider</code> - Returns an IoT credentials provider API
   *                endpoint.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:Jobs</code> - Returns an IoT device management Jobs API
   *                endpoint.</p>
   *             </li>
   *          </ul>
   *          <p>We strongly recommend that customers use the newer <code>iot:Data-ATS</code> endpoint type to avoid
   *          issues related to the widespread distrust of Symantec certificate authorities.</p>
   */
  endpointType?: string;
}

/**
 * @public
 * <p>The output from the DescribeEndpoint operation.</p>
 */
export interface DescribeEndpointResponse {
  /**
   * <p>The endpoint. The format of the endpoint is as follows:
   *             <i>identifier</i>.iot.<i>region</i>.amazonaws.com.</p>
   */
  endpointAddress?: string;
}

/**
 * @public
 */
export interface DescribeEventConfigurationsRequest {}

/**
 * @public
 * @enum
 */
export const EventType = {
  CA_CERTIFICATE: "CA_CERTIFICATE",
  CERTIFICATE: "CERTIFICATE",
  JOB: "JOB",
  JOB_EXECUTION: "JOB_EXECUTION",
  POLICY: "POLICY",
  THING: "THING",
  THING_GROUP: "THING_GROUP",
  THING_GROUP_HIERARCHY: "THING_GROUP_HIERARCHY",
  THING_GROUP_MEMBERSHIP: "THING_GROUP_MEMBERSHIP",
  THING_TYPE: "THING_TYPE",
  THING_TYPE_ASSOCIATION: "THING_TYPE_ASSOCIATION",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * <p>Configuration.</p>
 */
export interface Configuration {
  /**
   * <p>True to enable the configuration.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 */
export interface DescribeEventConfigurationsResponse {
  /**
   * <p>The event configurations.</p>
   */
  eventConfigurations?: Record<string, Configuration>;

  /**
   * <p>The creation date of the event configuration.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the event configurations were last modified.</p>
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface DescribeFleetMetricRequest {
  /**
   * <p>The name of the fleet metric to describe.</p>
   */
  metricName: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetMetricResponse {
  /**
   * <p>The name of the fleet metric to describe.</p>
   */
  metricName?: string;

  /**
   * <p>The search query string.</p>
   */
  queryString?: string;

  /**
   * <p>The type of the aggregation query.</p>
   */
  aggregationType?: AggregationType;

  /**
   * <p>The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.</p>
   */
  period?: number;

  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField?: string;

  /**
   * <p>The fleet metric description.</p>
   */
  description?: string;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;

  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>The date when the fleet metric is created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the fleet metric is last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>Used to support unit transformation such as milliseconds to seconds. The unit must be
   *       supported by <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>.</p>
   */
  unit?: FleetMetricUnit | string;

  /**
   * <p>The version of the fleet metric.</p>
   */
  version?: number;

  /**
   * <p>The ARN of the fleet metric to describe.</p>
   */
  metricArn?: string;
}

/**
 * @public
 */
export interface DescribeIndexRequest {
  /**
   * <p>The index name.</p>
   */
  indexName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IndexStatus = {
  ACTIVE: "ACTIVE",
  BUILDING: "BUILDING",
  REBUILDING: "REBUILDING",
} as const;

/**
 * @public
 */
export type IndexStatus = (typeof IndexStatus)[keyof typeof IndexStatus];

/**
 * @public
 */
export interface DescribeIndexResponse {
  /**
   * <p>The index name.</p>
   */
  indexName?: string;

  /**
   * <p>The index status.</p>
   */
  indexStatus?: IndexStatus | string;

  /**
   * <p>Contains a value that specifies the type of indexing performed. Valid values
   *       are:</p>
   *          <ul>
   *             <li>
   *                <p>REGISTRY – Your thing index contains only registry data.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_SHADOW - Your thing index contains registry data and shadow data.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_CONNECTIVITY_STATUS - Your thing index contains registry data and
   *           thing connectivity status data.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_SHADOW_AND_CONNECTIVITY_STATUS - Your thing index contains registry
   *           data, shadow data, and thing connectivity status data.</p>
   *             </li>
   *             <li>
   *                <p>MULTI_INDEXING_MODE - Your thing index contains multiple data sources. For more information, see
   *           <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_GetIndexingConfiguration.html">GetIndexingConfiguration</a>.</p>
   *             </li>
   *          </ul>
   */
  schema?: string;
}

/**
 * @public
 */
export interface DescribeJobRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * <p>The job process details.</p>
 */
export interface JobProcessDetails {
  /**
   * <p>The target devices to which the job execution is being rolled out. This value will be null after the job execution has finished rolling out to all the target devices.</p>
   */
  processingTargets?: string[];

  /**
   * <p>The number of things that cancelled the job.</p>
   */
  numberOfCanceledThings?: number;

  /**
   * <p>The number of things which successfully completed the job.</p>
   */
  numberOfSucceededThings?: number;

  /**
   * <p>The number of things that failed executing the job.</p>
   */
  numberOfFailedThings?: number;

  /**
   * <p>The number of things that rejected the job.</p>
   */
  numberOfRejectedThings?: number;

  /**
   * <p>The number of things that are awaiting execution of the job.</p>
   */
  numberOfQueuedThings?: number;

  /**
   * <p>The number of things currently executing the job.</p>
   */
  numberOfInProgressThings?: number;

  /**
   * <p>The number of things that are no longer scheduled to execute the job because they have been deleted or
   *             have been removed from the group that was a target of the job.</p>
   */
  numberOfRemovedThings?: number;

  /**
   * <p>The number of things whose job execution status is <code>TIMED_OUT</code>.</p>
   */
  numberOfTimedOutThings?: number;
}

/**
 * @public
 * <p>Displays the next seven maintenance window occurrences and their start times.</p>
 */
export interface ScheduledJobRollout {
  /**
   * <p>Displays the start times of the next seven maintenance window occurrences.</p>
   */
  startTime?: string;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  DELETION_IN_PROGRESS: "DELETION_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  SCHEDULED: "SCHEDULED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * <p>The <code>Job</code> object contains details about a job.</p>
 */
export interface Job {
  /**
   * <p>An ARN identifying the job with format "arn:aws:iot:region:account:job/jobId".</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a device when the thing representing
   *             the device is added to a target group, even after the job was completed by all things originally in the
   *             group. </p>
   *          <note>
   *             <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets.
   *                 By using continuous jobs, devices that join the group receive the job execution even after the job has
   *                 been created.</p>
   *          </note>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The status of the job, one of <code>IN_PROGRESS</code>, <code>CANCELED</code>,
   *             <code>DELETION_IN_PROGRESS</code> or <code>COMPLETED</code>. </p>
   */
  status?: JobStatus | string;

  /**
   * <p>Will be <code>true</code> if the job was canceled with the optional <code>force</code> parameter set to
   *           <code>true</code>.</p>
   */
  forceCanceled?: boolean;

  /**
   * <p>If the job was updated, provides the reason code for the update.</p>
   */
  reasonCode?: string;

  /**
   * <p>If the job was updated, describes the reason for the update.</p>
   */
  comment?: string;

  /**
   * <p>A list of IoT things and thing groups to which the job should be sent.</p>
   */
  targets?: string[];

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>Configuration for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Allows you to create a staged rollout of a job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>Configuration for criteria to abort the job.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was completed.</p>
   */
  completedAt?: Date;

  /**
   * <p>Details about the job process.</p>
   */
  jobProcessDetails?: JobProcessDetails;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer
   *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
   *            execution status is not set to another terminal state before the timer expires, it will
   *            be automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *          <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *          <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *          <note>
   *             <p>The <code>namespaceId</code> feature is in public preview.</p>
   *          </note>
   */
  namespaceId?: string;

  /**
   * <p>The ARN of the job template used to create the job.</p>
   */
  jobTemplateArn?: string;

  /**
   * <p>The configuration for the criteria to retry the job.</p>
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;

  /**
   * <p>A key-value map that pairs the patterns that need to be replaced in a managed
   *             template job document schema. You can use the description of each key as a guidance
   *             to specify the inputs during runtime when creating a job.</p>
   *          <note>
   *             <p>
   *                <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services
   *                 managed templates. This parameter can't be used with custom job templates or to
   *                 create jobs from them.</p>
   *          </note>
   */
  documentParameters?: Record<string, string>;

  /**
   * <p>Indicates whether a job is concurrent. Will be true when a job is
   *             rolling out new job executions or canceling previously created executions,
   *             otherwise false.</p>
   */
  isConcurrent?: boolean;

  /**
   * <p>The configuration that allows you to schedule a job for a future date and time in
   *             addition to specifying the end behavior for each job execution.</p>
   */
  schedulingConfig?: SchedulingConfig;

  /**
   * <p>Displays the next seven maintenance window occurrences and their start times.</p>
   */
  scheduledJobRollouts?: ScheduledJobRollout[];

  /**
   * <p>The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes. </p>
   *          <p>
   *             <b>Note:</b>The following Length Constraints relates to a single string.
   *         Up to five strings are allowed.</p>
   */
  destinationPackageVersions?: string[];
}

/**
 * @public
 */
export interface DescribeJobResponse {
  /**
   * <p>An S3 link to the job document.</p>
   */
  documentSource?: string;

  /**
   * <p>Information about the job.</p>
   */
  job?: Job;
}

/**
 * @public
 */
export interface DescribeJobExecutionRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing on which the job execution is running.</p>
   */
  thingName: string | undefined;

  /**
   * <p>A string (consisting of the digits "0" through "9" which is used to specify a particular job execution
   *             on a particular device.</p>
   */
  executionNumber?: number;
}

/**
 * @public
 * @enum
 */
export const JobExecutionStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  REJECTED: "REJECTED",
  REMOVED: "REMOVED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type JobExecutionStatus = (typeof JobExecutionStatus)[keyof typeof JobExecutionStatus];

/**
 * @public
 * <p>Details of the job execution status.</p>
 */
export interface JobExecutionStatusDetails {
  /**
   * <p>The job execution status.</p>
   */
  detailsMap?: Record<string, string>;
}

/**
 * @public
 * <p>The job execution object represents the execution of a job on a particular device.</p>
 */
export interface JobExecution {
  /**
   * <p>The unique identifier you assigned to the job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The status of the job execution (IN_PROGRESS, QUEUED, FAILED, SUCCEEDED, TIMED_OUT,
   *             CANCELED, or REJECTED).</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>Will be <code>true</code> if the job execution was canceled with the optional <code>force</code>
   *           parameter set to <code>true</code>.</p>
   */
  forceCanceled?: boolean;

  /**
   * <p>A collection of name/value pairs that describe the status of the job execution.</p>
   */
  statusDetails?: JobExecutionStatusDetails;

  /**
   * <p>The ARN of the thing on which the job execution is running.</p>
   */
  thingArn?: string;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was queued.</p>
   */
  queuedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution started.</p>
   */
  startedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>A string (consisting of the digits "0" through "9") which identifies this particular job execution on
   *             this particular device. It can be used in commands which return or update job execution information.
   *         </p>
   */
  executionNumber?: number;

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time they are updated
   *       by a device.</p>
   */
  versionNumber?: number;

  /**
   * <p>The estimated number of seconds that remain before the job execution status will be
   *            changed to <code>TIMED_OUT</code>. The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes).
   *            The actual job execution timeout can occur up to 60 seconds later than the estimated duration.
   *        This value will not be included if the job execution has reached a terminal status.</p>
   */
  approximateSecondsBeforeTimedOut?: number;
}

/**
 * @public
 */
export interface DescribeJobExecutionResponse {
  /**
   * <p>Information about the job execution.</p>
   */
  execution?: JobExecution;
}

/**
 * @public
 */
export interface DescribeJobTemplateRequest {
  /**
   * <p>The unique identifier of the job template.</p>
   */
  jobTemplateId: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobTemplateResponse {
  /**
   * <p>The ARN of the job template.</p>
   */
  jobTemplateArn?: string;

  /**
   * <p>The unique identifier of the job template.</p>
   */
  jobTemplateId?: string;

  /**
   * <p>A description of the job template.</p>
   */
  description?: string;

  /**
   * <p>An S3 link to the job document.</p>
   */
  documentSource?: string;

  /**
   * <p>The job document.</p>
   */
  document?: string;

  /**
   * <p>The time, in seconds since the epoch, when the job template was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Configuration for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Allows you to create a staged rollout of a job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>The criteria that determine when and how a job abort takes place.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer
   *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
   *            execution status is not set to another terminal state before the timer expires, it will
   *            be automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>The configuration that determines how many retries are allowed for each failure type
   *             for a job.</p>
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;

  /**
   * <p>Allows you to configure an optional maintenance window for the rollout of a job document to all devices in the target group for a job.</p>
   */
  maintenanceWindows?: MaintenanceWindow[];

  /**
   * <p>The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes. </p>
   *          <p>
   *             <b>Note:</b>The following Length Constraints relates to a single string.
   *         Up to five strings are allowed.</p>
   */
  destinationPackageVersions?: string[];
}

/**
 * @public
 */
export interface DescribeManagedJobTemplateRequest {
  /**
   * <p>The unique name of a managed job template, which is required.</p>
   */
  templateName: string | undefined;

  /**
   * <p>An optional parameter to specify version of a managed template. If not specified, the
   *             pre-defined default version is returned.</p>
   */
  templateVersion?: string;
}

/**
 * @public
 * <p>A map of key-value pairs containing the patterns that need to be replaced in a managed
 *             template job document schema. You can use the description of each key as a guidance to specify
 *             the inputs during runtime when creating a job.</p>
 *          <note>
 *             <p>
 *                <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services
 *                 managed templates. This parameter can't be used with custom job templates or to
 *                 create jobs from them.</p>
 *          </note>
 */
export interface DocumentParameter {
  /**
   * <p>Key of the map field containing the patterns that need to be replaced in a managed
   *             template job document schema.</p>
   */
  key?: string;

  /**
   * <p>Description of the map field containing the patterns that need to be replaced in a
   *             managed template job document schema.</p>
   */
  description?: string;

  /**
   * <p>A regular expression of the patterns that need to be replaced in a managed template
   *             job document schema.</p>
   */
  regex?: string;

  /**
   * <p>An example illustrating a pattern that need to be replaced in a managed template
   *             job document schema.</p>
   */
  example?: string;

  /**
   * <p>Specifies whether a pattern that needs to be replaced in a managed template job document
   *             schema is optional or required.</p>
   */
  optional?: boolean;
}

/**
 * @public
 */
export interface DescribeManagedJobTemplateResponse {
  /**
   * <p>The unique name of a managed template, such as <code>AWS-Reboot</code>.</p>
   */
  templateName?: string;

  /**
   * <p>The unique Amazon Resource Name (ARN) of the managed template.</p>
   */
  templateArn?: string;

  /**
   * <p>The unique description of a managed template.</p>
   */
  description?: string;

  /**
   * <p>The version for a managed template.</p>
   */
  templateVersion?: string;

  /**
   * <p>A list of environments that are supported with the managed job template.</p>
   */
  environments?: string[];

  /**
   * <p>A map of key-value pairs that you can use as guidance to specify the inputs for creating
   *             a job from a managed template.</p>
   *          <note>
   *             <p>
   *                <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services
   *                 managed templates. This parameter can't be used with custom job templates or to
   *                 create jobs from them.</p>
   *          </note>
   */
  documentParameters?: DocumentParameter[];

  /**
   * <p>The document schema for a managed job template.</p>
   */
  document?: string;
}

/**
 * @public
 */
export interface DescribeMitigationActionRequest {
  /**
   * <p>The friendly name that uniquely identifies the mitigation action.</p>
   */
  actionName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MitigationActionType = {
  ADD_THINGS_TO_THING_GROUP: "ADD_THINGS_TO_THING_GROUP",
  ENABLE_IOT_LOGGING: "ENABLE_IOT_LOGGING",
  PUBLISH_FINDING_TO_SNS: "PUBLISH_FINDING_TO_SNS",
  REPLACE_DEFAULT_POLICY_VERSION: "REPLACE_DEFAULT_POLICY_VERSION",
  UPDATE_CA_CERTIFICATE: "UPDATE_CA_CERTIFICATE",
  UPDATE_DEVICE_CERTIFICATE: "UPDATE_DEVICE_CERTIFICATE",
} as const;

/**
 * @public
 */
export type MitigationActionType = (typeof MitigationActionType)[keyof typeof MitigationActionType];

/**
 * @public
 */
export interface DescribeMitigationActionResponse {
  /**
   * <p>The friendly name that uniquely identifies the mitigation action.</p>
   */
  actionName?: string;

  /**
   * <p>The type of mitigation action.</p>
   */
  actionType?: MitigationActionType | string;

  /**
   * <p>The ARN that identifies this migration action.</p>
   */
  actionArn?: string;

  /**
   * <p>A unique identifier for this action.</p>
   */
  actionId?: string;

  /**
   * <p>The ARN of the IAM role used to apply this action.</p>
   */
  roleArn?: string;

  /**
   * <p>Parameters that control how the mitigation action is applied, specific to the type of mitigation action.</p>
   */
  actionParams?: MitigationActionParams;

  /**
   * <p>The date and time when the mitigation action was added to your Amazon Web Services accounts.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date and time when the mitigation action was last changed.</p>
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface DescribeProvisioningTemplateRequest {
  /**
   * <p>The name of the provisioning template.</p>
   */
  templateName: string | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningTemplateResponse {
  /**
   * <p>The ARN of the provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the provisioning template.</p>
   */
  templateName?: string;

  /**
   * <p>The description of the provisioning template.</p>
   */
  description?: string;

  /**
   * <p>The date when the provisioning template was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the provisioning template was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The default fleet template version ID.</p>
   */
  defaultVersionId?: number;

  /**
   * <p>The JSON formatted contents of the provisioning template.</p>
   */
  templateBody?: string;

  /**
   * <p>True if the provisioning template is enabled, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>The ARN of the role associated with the provisioning template. This IoT role grants
   *          permission to provision a device.</p>
   */
  provisioningRoleArn?: string;

  /**
   * <p>Gets information about a pre-provisioned hook.</p>
   */
  preProvisioningHook?: ProvisioningHook;

  /**
   * <p>The type you define in a provisioning template. You can create a template with only one type.
   *          You can't change the template type after its creation. The default value is <code>FLEET_PROVISIONING</code>.
   *          For more information about provisioning template, see: <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning template</a>.
   *       </p>
   */
  type?: TemplateType | string;
}

/**
 * @public
 */
export interface DescribeProvisioningTemplateVersionRequest {
  /**
   * <p>The template name.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The provisioning template version ID.</p>
   */
  versionId: number | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningTemplateVersionResponse {
  /**
   * <p>The provisioning template version ID.</p>
   */
  versionId?: number;

  /**
   * <p>The date when the provisioning template version was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The JSON formatted contents of the provisioning template version.</p>
   */
  templateBody?: string;

  /**
   * <p>True if the provisioning template version is the default version.</p>
   */
  isDefaultVersion?: boolean;
}

/**
 * @public
 */
export interface DescribeRoleAliasRequest {
  /**
   * <p>The role alias to describe.</p>
   */
  roleAlias: string | undefined;
}

/**
 * @public
 * <p>Role alias description.</p>
 */
export interface RoleAliasDescription {
  /**
   * <p>The role alias.</p>
   */
  roleAlias?: string;

  /**
   * <p>The ARN of the role alias.</p>
   */
  roleAliasArn?: string;

  /**
   * <p>The role ARN.</p>
   */
  roleArn?: string;

  /**
   * <p>The role alias owner.</p>
   */
  owner?: string;

  /**
   * <p>The number of seconds for which the credential is valid.</p>
   */
  credentialDurationSeconds?: number;

  /**
   * <p>The UNIX timestamp of when the role alias was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The UNIX timestamp of when the role alias was last modified.</p>
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface DescribeRoleAliasResponse {
  /**
   * <p>The role alias description.</p>
   */
  roleAliasDescription?: RoleAliasDescription;
}

/**
 * @public
 */
export interface DescribeScheduledAuditRequest {
  /**
   * <p>The name of the scheduled audit whose information you want to get.</p>
   */
  scheduledAuditName: string | undefined;
}

/**
 * @public
 */
export interface DescribeScheduledAuditResponse {
  /**
   * <p>How often the scheduled audit takes
   *       place, either
   *       one of <code>DAILY</code>,
   *             <code>WEEKLY</code>, <code>BIWEEKLY</code>, or <code>MONTHLY</code>. The start time of each audit is determined by the
   *       system.</p>
   */
  frequency?: AuditFrequency | string;

  /**
   * <p>The day of the month on which the scheduled audit takes place.
   *       This is
   *       will be <code>1</code>
   *             through <code>31</code> or <code>LAST</code>. If days
   *       <code>29</code>-<code>31</code>
   *       are specified, and the month does not have that many days, the audit takes place on the <code>LAST</code>
   *       day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes
   *       place,
   *       either one of
   *             <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>.</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be
   *             enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   */
  targetCheckNames?: string[];

  /**
   * <p>The name of the scheduled audit.</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;
}

/**
 * @public
 */
export interface DescribeSecurityProfileRequest {
  /**
   * <p>The name of the security profile
   *       whose information you want to get.</p>
   */
  securityProfileName: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityProfileResponse {
  /**
   * <p>The name of the security profile.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The ARN of the security profile.</p>
   */
  securityProfileArn?: string;

  /**
   * <p>A description of the security profile (associated with the security profile
   *         when it was created or updated).</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: Record<string, AlertTarget>;

  /**
   * @deprecated
   *
   * <p>
   *             <i>Please use
   *           <a>DescribeSecurityProfileResponse$additionalMetricsToRetainV2</a>
   *         instead.</i>
   *          </p>
   *          <p>A list of metrics
   *       whose data is retained (stored). By default, data is retained for any metric
   *       used in the profile's <code>behaviors</code>, but
   *       it is
   *       also retained for any metric specified here.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any
   *       metric used in the profile's behaviors, but
   *       it is
   *       also retained for any metric specified here.</p>
   */
  additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * <p>The version of the security profile. A new version is generated whenever the
   *         security profile is updated.</p>
   */
  version?: number;

  /**
   * <p>The time the security profile was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The time the security profile was last modified.</p>
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface DescribeStreamRequest {
  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;
}

/**
 * @public
 * <p>Information about a stream.</p>
 */
export interface StreamInfo {
  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;

  /**
   * <p>The description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The files to stream.</p>
   */
  files?: StreamFile[];

  /**
   * <p>The date when the stream was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The date when the stream was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>An IAM role IoT assumes to access your S3 files.</p>
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface DescribeStreamResponse {
  /**
   * <p>Information about the stream.</p>
   */
  streamInfo?: StreamInfo;
}

/**
 * @public
 * <p>The input for the DescribeThing operation.</p>
 */
export interface DescribeThingRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

/**
 * @public
 * <p>The output from the DescribeThing operation.</p>
 */
export interface DescribeThingResponse {
  /**
   * <p>The default MQTT client ID. For a typical device, the thing name is also used as the default MQTT client ID.
   * 			Although we don’t require a mapping between a thing's registry name and its use of MQTT client IDs, certificates, or
   * 			shadow state, we recommend that you choose a thing name and use it as the MQTT client ID for the registry and the Device Shadow service.</p>
   *          <p>This lets you better organize your IoT fleet without removing the flexibility of the underlying device certificate model or shadows.</p>
   */
  defaultClientId?: string;

  /**
   * <p>The name of the thing.</p>
   */
  thingName?: string;

  /**
   * <p>The ID of the thing to describe.</p>
   */
  thingId?: string;

  /**
   * <p>The ARN of the thing to describe.</p>
   */
  thingArn?: string;

  /**
   * <p>The thing type name.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing attributes.</p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>The current version of the thing record in the registry.</p>
   *          <note>
   *             <p>To avoid unintentional changes to the information in the registry, you can pass
   * 				the version information in the <code>expectedVersion</code> parameter of the
   * 					<code>UpdateThing</code> and <code>DeleteThing</code> calls.</p>
   *          </note>
   */
  version?: number;

  /**
   * <p>The name of the billing group the thing belongs to.</p>
   */
  billingGroupName?: string;
}

/**
 * @public
 */
export interface DescribeThingGroupRequest {
  /**
   * <p>The name of the thing group.</p>
   */
  thingGroupName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DynamicGroupStatus = {
  ACTIVE: "ACTIVE",
  BUILDING: "BUILDING",
  REBUILDING: "REBUILDING",
} as const;

/**
 * @public
 */
export type DynamicGroupStatus = (typeof DynamicGroupStatus)[keyof typeof DynamicGroupStatus];

/**
 * @public
 * <p>The name and ARN of a group.</p>
 */
export interface GroupNameAndArn {
  /**
   * <p>The group name.</p>
   */
  groupName?: string;

  /**
   * <p>The group ARN.</p>
   */
  groupArn?: string;
}

/**
 * @public
 * <p>Thing group metadata.</p>
 */
export interface ThingGroupMetadata {
  /**
   * <p>The parent thing group name.</p>
   */
  parentGroupName?: string;

  /**
   * <p>The root parent thing group.</p>
   */
  rootToParentThingGroups?: GroupNameAndArn[];

  /**
   * <p>The UNIX timestamp of when the thing group was created.</p>
   */
  creationDate?: Date;
}

/**
 * @public
 */
export interface DescribeThingGroupResponse {
  /**
   * <p>The name of the thing group.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The version of the thing group.</p>
   */
  version?: number;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties?: ThingGroupProperties;

  /**
   * <p>Thing group metadata.</p>
   */
  thingGroupMetadata?: ThingGroupMetadata;

  /**
   * <p>The dynamic thing group index name.</p>
   */
  indexName?: string;

  /**
   * <p>The dynamic thing group search query string.</p>
   */
  queryString?: string;

  /**
   * <p>The dynamic thing group query version.</p>
   */
  queryVersion?: string;

  /**
   * <p>The dynamic thing group status.</p>
   */
  status?: DynamicGroupStatus | string;
}

/**
 * @public
 */
export interface DescribeThingRegistrationTaskRequest {
  /**
   * <p>The task ID.</p>
   */
  taskId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  Cancelled: "Cancelled",
  Cancelling: "Cancelling",
  Completed: "Completed",
  Failed: "Failed",
  InProgress: "InProgress",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface DescribeThingRegistrationTaskResponse {
  /**
   * <p>The task ID.</p>
   */
  taskId?: string;

  /**
   * <p>The task creation date.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the task was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The task's template.</p>
   */
  templateBody?: string;

  /**
   * <p>The S3 bucket that contains the input file.</p>
   */
  inputFileBucket?: string;

  /**
   * <p>The input file key.</p>
   */
  inputFileKey?: string;

  /**
   * <p>The role ARN that grants access to the input file bucket.</p>
   */
  roleArn?: string;

  /**
   * <p>The status of the bulk thing provisioning task.</p>
   */
  status?: Status | string;

  /**
   * <p>The message.</p>
   */
  message?: string;

  /**
   * <p>The number of things successfully provisioned.</p>
   */
  successCount?: number;

  /**
   * <p>The number of things that failed to be provisioned.</p>
   */
  failureCount?: number;

  /**
   * <p>The progress of the bulk provisioning task expressed as a percentage.</p>
   */
  percentageProgress?: number;
}

/**
 * @public
 * <p>The input for the DescribeThingType operation.</p>
 */
export interface DescribeThingTypeRequest {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName: string | undefined;
}

/**
 * @public
 * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
 * 			time, a value indicating whether the thing type is deprecated, and a date and time when time was
 * 			deprecated.</p>
 */
export interface ThingTypeMetadata {
  /**
   * <p>Whether the thing type is deprecated. If <b>true</b>, no new things could be
   * 			associated with this type.</p>
   */
  deprecated?: boolean;

  /**
   * <p>The date and time when the thing type was deprecated.</p>
   */
  deprecationDate?: Date;

  /**
   * <p>The date and time when the thing type was created.</p>
   */
  creationDate?: Date;
}

/**
 * @public
 * <p>The output for the DescribeThingType operation.</p>
 */
export interface DescribeThingTypeResponse {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing type ID.</p>
   */
  thingTypeId?: string;

  /**
   * <p>The thing type ARN.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The ThingTypeProperties contains information about the thing type including
   * 			description, and a list of searchable thing attribute names.</p>
   */
  thingTypeProperties?: ThingTypeProperties;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type
   * 			including: creation date and time, a value indicating whether the thing type is
   * 			deprecated, and a date and time when it was deprecated.</p>
   */
  thingTypeMetadata?: ThingTypeMetadata;
}

/**
 * @public
 */
export interface DetachPolicyRequest {
  /**
   * <p>The policy to detach.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The target from which the policy will be detached.</p>
   */
  target: string | undefined;
}

/**
 * @public
 * <p>The input for the DetachPrincipalPolicy operation.</p>
 */
export interface DetachPrincipalPolicyRequest {
  /**
   * <p>The name of the policy to detach.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The principal.</p>
   *          <p>Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  principal: string | undefined;
}

/**
 * @public
 */
export interface DetachSecurityProfileRequest {
  /**
   * <p>The security profile that is detached.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>The ARN of the thing group from which the security profile is detached.</p>
   */
  securityProfileTargetArn: string | undefined;
}

/**
 * @public
 */
export interface DetachSecurityProfileResponse {}

/**
 * @public
 * <p>The input for the DetachThingPrincipal operation.</p>
 */
export interface DetachThingPrincipalRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>If the principal is a certificate, this value must be ARN of the certificate. If
   * 			the principal is an Amazon Cognito identity, this value must be the ID of the Amazon
   * 			Cognito identity.</p>
   */
  principal: string | undefined;
}

/**
 * @public
 * <p>The output from the DetachThingPrincipal operation.</p>
 */
export interface DetachThingPrincipalResponse {}

/**
 * @public
 * <p>The input for the DisableTopicRuleRequest operation.</p>
 */
export interface DisableTopicRuleRequest {
  /**
   * <p>The name of the rule to disable.</p>
   */
  ruleName: string | undefined;
}

/**
 * @public
 * <p>The input for the EnableTopicRuleRequest operation.</p>
 */
export interface EnableTopicRuleRequest {
  /**
   * <p>The name of the topic rule to enable.</p>
   */
  ruleName: string | undefined;
}

/**
 * @public
 */
export interface GetBehaviorModelTrainingSummariesRequest {
  /**
   * <p>
   *       The name of the security profile.
   *     </p>
   */
  securityProfileName?: string;

  /**
   * <p>
   *       The maximum number of results to return at one time. The default is 10.
   *     </p>
   */
  maxResults?: number;

  /**
   * <p>
   *       The token for the next set of results.
   *     </p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ModelStatus = {
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
  PENDING_BUILD: "PENDING_BUILD",
} as const;

/**
 * @public
 */
export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus];

/**
 * @public
 * <p>
 *             The summary of an ML Detect behavior model.
 *         </p>
 */
export interface BehaviorModelTrainingSummary {
  /**
   * <p>
   *             The name of the security profile.
   *         </p>
   */
  securityProfileName?: string;

  /**
   * <p>
   *             The name of the behavior.
   *         </p>
   */
  behaviorName?: string;

  /**
   * <p>
   *             The date a training model started collecting data.
   *         </p>
   */
  trainingDataCollectionStartDate?: Date;

  /**
   * <p>
   *             The status of the behavior model.
   *         </p>
   */
  modelStatus?: ModelStatus | string;

  /**
   * <p>
   *             The percentage of datapoints collected.
   *         </p>
   */
  datapointsCollectionPercentage?: number;

  /**
   * <p>
   *             The date the model was last refreshed.
   *         </p>
   */
  lastModelRefreshDate?: Date;
}

/**
 * @public
 */
export interface GetBehaviorModelTrainingSummariesResponse {
  /**
   * <p>
   *       A list of all ML Detect behaviors and their model status for a given Security Profile.
   *     </p>
   */
  summaries?: BehaviorModelTrainingSummary[];

  /**
   * <p>
   *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
   *     </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Performs an aggregation that will return a list of buckets. The list of buckets is a ranked list of the number of occurrences of an aggregation field value.</p>
 */
export interface TermsAggregation {
  /**
   * <p>The number of buckets to return in the response. Default to 10.</p>
   */
  maxBuckets?: number;
}

/**
 * @public
 * <p>The type of bucketed aggregation performed.</p>
 */
export interface BucketsAggregationType {
  /**
   * <p>Performs an aggregation that will return a list of buckets. The list of buckets is a ranked list of the number of occurrences of an aggregation field value.</p>
   */
  termsAggregation?: TermsAggregation;
}

/**
 * @public
 */
export interface GetBucketsAggregationRequest {
  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>The search query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The aggregation field.</p>
   */
  aggregationField: string | undefined;

  /**
   * <p>The version of the query.</p>
   */
  queryVersion?: string;

  /**
   * <p>The basic control of the response shape and the bucket aggregation type to perform. </p>
   */
  bucketsAggregationType: BucketsAggregationType | undefined;
}

/**
 * @public
 * <p>A count of documents that meets a specific aggregation criteria.</p>
 */
export interface Bucket {
  /**
   * <p>The value counted for the particular bucket.</p>
   */
  keyValue?: string;

  /**
   * <p>The number of documents that have the value counted for the particular bucket.</p>
   */
  count?: number;
}

/**
 * @public
 */
export interface GetBucketsAggregationResponse {
  /**
   * <p>The total number of things that fit the query string criteria.</p>
   */
  totalCount?: number;

  /**
   * <p>The main part of the response with a list of buckets. Each bucket contains a <code>keyValue</code> and a <code>count</code>.</p>
   *          <p>
   *             <code>keyValue</code>: The aggregation field value counted for the particular bucket.</p>
   *          <p>
   *             <code>count</code>: The number of documents that have that value.</p>
   */
  buckets?: Bucket[];
}

/**
 * @public
 */
export interface GetCardinalityRequest {
  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>The search query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField?: string;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;
}

/**
 * @public
 */
export interface GetCardinalityResponse {
  /**
   * <p>The approximate count of unique values that match the query.</p>
   */
  cardinality?: number;
}

/**
 * @public
 */
export interface GetEffectivePoliciesRequest {
  /**
   * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  principal?: string;

  /**
   * <p>The Cognito identity pool ID.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>The thing name.</p>
   */
  thingName?: string;
}

/**
 * @public
 * <p>The policy that has the effect on the authorization results.</p>
 */
export interface EffectivePolicy {
  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The IAM policy document.</p>
   */
  policyDocument?: string;
}

/**
 * @public
 */
export interface GetEffectivePoliciesResponse {
  /**
   * <p>The effective policies.</p>
   */
  effectivePolicies?: EffectivePolicy[];
}

/**
 * @public
 */
export interface GetIndexingConfigurationRequest {}

/**
 * @public
 * @enum
 */
export const FieldType = {
  BOOLEAN: "Boolean",
  NUMBER: "Number",
  STRING: "String",
} as const;

/**
 * @public
 */
export type FieldType = (typeof FieldType)[keyof typeof FieldType];

/**
 * @public
 * <p>Describes the name and data type at a field.</p>
 */
export interface Field {
  /**
   * <p>The name of the field.</p>
   */
  name?: string;

  /**
   * <p>The data type of the field.</p>
   */
  type?: FieldType | string;
}

/**
 * @public
 * @enum
 */
export const ThingGroupIndexingMode = {
  OFF: "OFF",
  ON: "ON",
} as const;

/**
 * @public
 */
export type ThingGroupIndexingMode = (typeof ThingGroupIndexingMode)[keyof typeof ThingGroupIndexingMode];

/**
 * @public
 * <p>Thing group indexing configuration.</p>
 */
export interface ThingGroupIndexingConfiguration {
  /**
   * <p>Thing group indexing mode.</p>
   */
  thingGroupIndexingMode: ThingGroupIndexingMode | string | undefined;

  /**
   * <p>Contains fields that are indexed and whose types are already known by the Fleet Indexing
   *       service. This is an optional field. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-fleet-index.html#managed-field">Managed fields</a> in the <i>Amazon Web Services IoT Core Developer Guide</i>.</p>
   */
  managedFields?: Field[];

  /**
   * <p>A list of thing group fields to index. This list cannot contain any managed fields. Use
   *       the GetIndexingConfiguration API to get a list of managed fields.</p>
   *          <p>Contains custom field names and their data type.</p>
   */
  customFields?: Field[];
}

/**
 * @public
 * @enum
 */
export const DeviceDefenderIndexingMode = {
  OFF: "OFF",
  VIOLATIONS: "VIOLATIONS",
} as const;

/**
 * @public
 */
export type DeviceDefenderIndexingMode = (typeof DeviceDefenderIndexingMode)[keyof typeof DeviceDefenderIndexingMode];

/**
 * @public
 * <p>Provides additional filters for specific data sources. Named shadow is the only data source that currently supports and requires a filter.
 *       To add named shadows to your fleet indexing configuration, set <code>namedShadowIndexingMode</code> to be <code>ON</code> and
 *       specify your shadow names in <code>filter</code>.</p>
 */
export interface IndexingFilter {
  /**
   * <p>The shadow names that you select to index. The default maximum number of shadow names for indexing is 10. To increase
   *       the limit, see <a href="https://docs.aws.amazon.com/general/latest/gr/iot_device_management.html#fleet-indexing-limits">Amazon Web Services IoT Device Management
   *         Quotas</a> in the <i>Amazon Web Services General Reference</i>.
   *     </p>
   */
  namedShadowNames?: string[];
}

/**
 * @public
 * @enum
 */
export const NamedShadowIndexingMode = {
  OFF: "OFF",
  ON: "ON",
} as const;

/**
 * @public
 */
export type NamedShadowIndexingMode = (typeof NamedShadowIndexingMode)[keyof typeof NamedShadowIndexingMode];

/**
 * @public
 * @enum
 */
export const ThingConnectivityIndexingMode = {
  OFF: "OFF",
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type ThingConnectivityIndexingMode =
  (typeof ThingConnectivityIndexingMode)[keyof typeof ThingConnectivityIndexingMode];

/**
 * @public
 * @enum
 */
export const ThingIndexingMode = {
  OFF: "OFF",
  REGISTRY: "REGISTRY",
  REGISTRY_AND_SHADOW: "REGISTRY_AND_SHADOW",
} as const;

/**
 * @public
 */
export type ThingIndexingMode = (typeof ThingIndexingMode)[keyof typeof ThingIndexingMode];

/**
 * @public
 * <p>The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing
 *         Thing Indexing</a>.</p>
 */
export interface ThingIndexingConfiguration {
  /**
   * <p>Thing indexing mode. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>REGISTRY – Your thing index contains registry data only.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_SHADOW - Your thing index contains registry and shadow data.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Thing indexing is disabled.</p>
   *             </li>
   *          </ul>
   */
  thingIndexingMode: ThingIndexingMode | string | undefined;

  /**
   * <p>Thing connectivity indexing mode. Valid values are: </p>
   *          <ul>
   *             <li>
   *                <p>STATUS – Your thing index contains connectivity status. To enable thing
   *           connectivity indexing, <i>thingIndexMode</i> must not be set to
   *           OFF.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Thing connectivity status indexing is disabled.</p>
   *             </li>
   *          </ul>
   */
  thingConnectivityIndexingMode?: ThingConnectivityIndexingMode | string;

  /**
   * <p>Device Defender indexing mode. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>VIOLATIONS – Your thing index contains Device Defender violations. To enable Device
   *           Defender indexing, <i>deviceDefenderIndexingMode</i> must not be set to
   *           OFF.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Device Defender indexing is disabled.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about Device Defender violations, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html">Device Defender Detect.</a>
   *          </p>
   */
  deviceDefenderIndexingMode?: DeviceDefenderIndexingMode | string;

  /**
   * <p>Named shadow indexing mode. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>ON – Your thing index contains named shadow. To enable thing
   *           named shadow indexing, <i>namedShadowIndexingMode</i> must not be set to
   *           OFF.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Named shadow indexing is disabled.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about Shadows, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html">IoT Device Shadow service.</a>
   *          </p>
   */
  namedShadowIndexingMode?: NamedShadowIndexingMode | string;

  /**
   * <p>Contains fields that are indexed and whose types are already known by the Fleet Indexing
   *       service.</p>
   */
  managedFields?: Field[];

  /**
   * <p>Contains custom field names and their data type.</p>
   */
  customFields?: Field[];

  /**
   * <p>Provides additional filters for specific data sources. Named shadow is the only data source that currently supports and requires a filter.
   *       To add named shadows to your fleet indexing configuration, set <code>namedShadowIndexingMode</code> to be <code>ON</code> and
   *       specify your shadow names in <code>filter</code>.</p>
   */
  filter?: IndexingFilter;
}

/**
 * @public
 */
export interface GetIndexingConfigurationResponse {
  /**
   * <p>Thing indexing configuration.</p>
   */
  thingIndexingConfiguration?: ThingIndexingConfiguration;

  /**
   * <p>The index configuration.</p>
   */
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
}

/**
 * @public
 */
export interface GetJobDocumentRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface GetJobDocumentResponse {
  /**
   * <p>The job document content.</p>
   */
  document?: string;
}

/**
 * @public
 * <p>The input for the GetLoggingOptions operation.</p>
 */
export interface GetLoggingOptionsRequest {}

/**
 * @public
 * <p>The output from the GetLoggingOptions operation.</p>
 */
export interface GetLoggingOptionsResponse {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn?: string;

  /**
   * <p>The logging level.</p>
   */
  logLevel?: LogLevel | string;
}

/**
 * @public
 */
export interface GetOTAUpdateRequest {
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId: string | undefined;
}

/**
 * @public
 * <p>Error information.</p>
 */
export interface ErrorInfo {
  /**
   * <p>The error code.</p>
   */
  code?: string;

  /**
   * <p>The error message.</p>
   */
  message?: string;
}

/**
 * @public
 * <p>Information about an OTA update.</p>
 */
export interface OTAUpdateInfo {
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The date when the OTA update was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the OTA update was last updated.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>A description of the OTA update.</p>
   */
  description?: string;

  /**
   * <p>The targets of the OTA update.</p>
   */
  targets?: string[];

  /**
   * <p>The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both
   *              HTTP and MQTT are specified, the target device can choose the protocol.</p>
   */
  protocols?: (Protocol | string)[];

  /**
   * <p>Configuration for the rollout of OTA updates.</p>
   */
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

  /**
   * <p>Configuration information for pre-signed URLs. Valid when <code>protocols</code>
   *              contains HTTP.</p>
   */
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;

  /**
   * <p>Specifies whether the OTA update will continue to run (CONTINUOUS), or will be complete after all those
   *             things specified as targets have completed the OTA update (SNAPSHOT). If continuous, the OTA update may also
   *             be run on a thing when a change is detected in a target. For example, an OTA update will run on a thing when
   *             the thing is added to a target group, even after the OTA update was completed by all things originally in
   *             the group. </p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>A list of files associated with the OTA update.</p>
   */
  otaUpdateFiles?: OTAUpdateFile[];

  /**
   * <p>The status of the OTA update.</p>
   */
  otaUpdateStatus?: OTAUpdateStatus | string;

  /**
   * <p>The IoT job ID associated with the OTA update.</p>
   */
  awsIotJobId?: string;

  /**
   * <p>The IoT job ARN associated with the OTA update.</p>
   */
  awsIotJobArn?: string;

  /**
   * <p>Error information associated with the OTA update.</p>
   */
  errorInfo?: ErrorInfo;

  /**
   * <p>A collection of name/value pairs</p>
   */
  additionalParameters?: Record<string, string>;
}

/**
 * @public
 */
export interface GetOTAUpdateResponse {
  /**
   * <p>The OTA update info.</p>
   */
  otaUpdateInfo?: OTAUpdateInfo;
}

/**
 * @public
 */
export interface GetPackageRequest {
  /**
   * <p>The name of the target package.</p>
   */
  packageName: string | undefined;
}

/**
 * @public
 */
export interface GetPackageResponse {
  /**
   * <p>The name of the package.</p>
   */
  packageName?: string;

  /**
   * <p>The ARN for the package.</p>
   */
  packageArn?: string;

  /**
   * <p>The package description.</p>
   */
  description?: string;

  /**
   * <p>The name of the default package version.</p>
   */
  defaultVersionName?: string;

  /**
   * <p>The date the package was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the package was last updated.</p>
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface GetPackageConfigurationRequest {}

/**
 * @public
 * <p>Configuration to manage IoT Job's package version reporting. If configured, Jobs updates the thing's reserved named shadow with the package version information up on successful job completion.</p>
 *          <p>
 *             <b>Note:</b> For each job, the destinationPackageVersions attribute has to be set with the correct data for Jobs to report to the thing shadow.
 *       </p>
 */
export interface VersionUpdateByJobsConfig {
  /**
   * <p>Indicates whether the Job is enabled or not.</p>
   */
  enabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that grants permission to the IoT
   *       jobs service to update the reserved named shadow when the job successfully completes.</p>
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface GetPackageConfigurationResponse {
  /**
   * <p>The version that is associated to a specific job.</p>
   */
  versionUpdateByJobsConfig?: VersionUpdateByJobsConfig;
}

/**
 * @public
 */
export interface GetPackageVersionRequest {
  /**
   * <p>The name of the associated package.</p>
   */
  packageName: string | undefined;

  /**
   * <p>The name of the target package version.</p>
   */
  versionName: string | undefined;
}

/**
 * @public
 */
export interface GetPackageVersionResponse {
  /**
   * <p>The ARN for the package version.</p>
   */
  packageVersionArn?: string;

  /**
   * <p>The name of the package.</p>
   */
  packageName?: string;

  /**
   * <p>The name of the package version.</p>
   */
  versionName?: string;

  /**
   * <p>The package version description.</p>
   */
  description?: string;

  /**
   * <p>Metadata that were added to the package version that can be used to define a package version’s configuration.</p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>The status associated to the package version. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle">Package version lifecycle</a>.</p>
   */
  status?: PackageVersionStatus | string;

  /**
   * <p>Error reason for a package version failure during creation or update.</p>
   */
  errorReason?: string;

  /**
   * <p>The date when the package version was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the package version was last updated.</p>
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface GetPercentilesRequest {
  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>The search query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField?: string;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;

  /**
   * <p>The percentile groups returned.</p>
   */
  percents?: number[];
}

/**
 * @public
 * <p>Describes the percentile and percentile value.</p>
 */
export interface PercentPair {
  /**
   * <p>The percentile.</p>
   */
  percent?: number;

  /**
   * <p>The value of the percentile.</p>
   */
  value?: number;
}

/**
 * @public
 */
export interface GetPercentilesResponse {
  /**
   * <p>The percentile values of the aggregated fields.</p>
   */
  percentiles?: PercentPair[];
}

/**
 * @public
 * <p>The input for the GetPolicy operation.</p>
 */
export interface GetPolicyRequest {
  /**
   * <p>The name of the policy.</p>
   */
  policyName: string | undefined;
}

/**
 * @public
 * <p>The output from the GetPolicy operation.</p>
 */
export interface GetPolicyResponse {
  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The default policy version ID.</p>
   */
  defaultVersionId?: string;

  /**
   * <p>The date the policy was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the policy was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The generation ID of the policy.</p>
   */
  generationId?: string;
}

/**
 * @public
 * <p>The input for the GetPolicyVersion operation.</p>
 */
export interface GetPolicyVersionRequest {
  /**
   * <p>The name of the policy.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId: string | undefined;
}

/**
 * @public
 * <p>The output from the GetPolicyVersion operation.</p>
 */
export interface GetPolicyVersionResponse {
  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId?: string;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The date the policy was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the policy was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The generation ID of the policy version.</p>
   */
  generationId?: string;
}

/**
 * @public
 * <p>The input to the GetRegistrationCode operation.</p>
 */
export interface GetRegistrationCodeRequest {}

/**
 * @public
 * <p>The output from the GetRegistrationCode operation.</p>
 */
export interface GetRegistrationCodeResponse {
  /**
   * <p>The CA certificate registration code.</p>
   */
  registrationCode?: string;
}

/**
 * @public
 */
export interface GetStatisticsRequest {
  /**
   * <p>The name of the index to search. The default value is <code>AWS_Things</code>.</p>
   */
  indexName?: string;

  /**
   * <p>The query used to search. You can specify "*" for the query string to get the count of all
   *       indexed things in your Amazon Web Services account.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The aggregation field name.</p>
   */
  aggregationField?: string;

  /**
   * <p>The version of the query used to search.</p>
   */
  queryVersion?: string;
}

/**
 * @public
 * <p>A map of key-value pairs for all supported statistics. For issues with missing or unexpected values for this API,
 *       consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/fleet-indexing-troubleshooting.html">
 *         Fleet indexing troubleshooting guide</a>.</p>
 */
export interface Statistics {
  /**
   * <p>The count of things that match the query string criteria and contain a valid aggregation field value.</p>
   */
  count?: number;

  /**
   * <p>The average of the aggregated field values.</p>
   */
  average?: number;

  /**
   * <p>The sum of the aggregated field values.</p>
   */
  sum?: number;

  /**
   * <p>The minimum aggregated field value.</p>
   */
  minimum?: number;

  /**
   * <p>The maximum aggregated field value.</p>
   */
  maximum?: number;

  /**
   * <p>The sum of the squares of the aggregated field values.</p>
   */
  sumOfSquares?: number;

  /**
   * <p>The variance of the aggregated field values.</p>
   */
  variance?: number;

  /**
   * <p>The standard deviation of the aggregated field values.</p>
   */
  stdDeviation?: number;
}

/**
 * @public
 */
export interface GetStatisticsResponse {
  /**
   * <p>The statistics returned by the Fleet Indexing service based on the query and aggregation
   *       field.</p>
   */
  statistics?: Statistics;
}

/**
 * @public
 * <p>The input for the GetTopicRule operation.</p>
 */
export interface GetTopicRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;
}

/**
 * @public
 * <p>Describes a rule.</p>
 */
export interface TopicRule {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName?: string;

  /**
   * <p>The SQL statement used to query the topic. When using a SQL query with multiple
   *          lines, be sure to escape the newline characters.</p>
   */
  sql?: string;

  /**
   * <p>The description of the rule.</p>
   */
  description?: string;

  /**
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The actions associated with the rule.</p>
   */
  actions?: Action[];

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;

  /**
   * <p>The version of the SQL rules engine to use when evaluating the rule.</p>
   */
  awsIotSqlVersion?: string;

  /**
   * <p>The action to perform when an error occurs.</p>
   */
  errorAction?: Action;
}

/**
 * @public
 * <p>The output from the GetTopicRule operation.</p>
 */
export interface GetTopicRuleResponse {
  /**
   * <p>The rule ARN.</p>
   */
  ruleArn?: string;

  /**
   * <p>The rule.</p>
   */
  rule?: TopicRule;
}

/**
 * @public
 */
export interface GetTopicRuleDestinationRequest {
  /**
   * <p>The ARN of the topic rule destination.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetTopicRuleDestinationResponse {
  /**
   * <p>The topic rule destination.</p>
   */
  topicRuleDestination?: TopicRuleDestination;
}

/**
 * @public
 */
export interface GetV2LoggingOptionsRequest {}

/**
 * @public
 */
export interface GetV2LoggingOptionsResponse {
  /**
   * <p>The IAM role ARN IoT uses to write to your CloudWatch logs.</p>
   */
  roleArn?: string;

  /**
   * <p>The default log level.</p>
   */
  defaultLogLevel?: LogLevel | string;

  /**
   * <p>Disables all logs.</p>
   */
  disableAllLogs?: boolean;
}

/**
 * @public
 * <p>The resource is not configured.</p>
 */
export class NotConfiguredException extends __BaseException {
  readonly name: "NotConfiguredException" = "NotConfiguredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotConfiguredException, __BaseException>) {
    super({
      name: "NotConfiguredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotConfiguredException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const BehaviorCriteriaType = {
  MACHINE_LEARNING: "MACHINE_LEARNING",
  STATIC: "STATIC",
  STATISTICAL: "STATISTICAL",
} as const;

/**
 * @public
 */
export type BehaviorCriteriaType = (typeof BehaviorCriteriaType)[keyof typeof BehaviorCriteriaType];

/**
 * @public
 */
export interface ListActiveViolationsRequest {
  /**
   * <p>The name of the thing whose active violations are listed.</p>
   */
  thingName?: string;

  /**
   * <p>The name of the Device Defender security profile for which violations are listed.</p>
   */
  securityProfileName?: string;

  /**
   * <p>
   *       The criteria for a behavior.
   *     </p>
   */
  behaviorCriteriaType?: BehaviorCriteriaType | string;

  /**
   * <p>
   *       A list of all suppressed alerts.
   *     </p>
   */
  listSuppressedAlerts?: boolean;

  /**
   * <p>The verification state of the violation (detect alarm).</p>
   */
  verificationState?: VerificationState | string;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListActiveViolationsResponse {
  /**
   * <p>The list of active violations.</p>
   */
  activeViolations?: ActiveViolation[];

  /**
   * <p>A token that can be used to retrieve the next set of results,
   *             or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAttachedPoliciesRequest {
  /**
   * <p>The group or principal for which the policies will be listed. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  target: string | undefined;

  /**
   * <p>When true, recursively list attached policies.</p>
   */
  recursive?: boolean;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  pageSize?: number;
}

/**
 * @public
 */
export interface ListAttachedPoliciesResponse {
  /**
   * <p>The policies.</p>
   */
  policies?: Policy[];

  /**
   * <p>The token to retrieve the next set of results, or ``null`` if there are no more
   *          results.</p>
   */
  nextMarker?: string;
}

/**
 * @public
 */
export interface ListAuditFindingsRequest {
  /**
   * <p>A filter to limit results to the audit with the specified ID. You must
   *             specify either the taskId or the startTime and endTime, but not both.</p>
   */
  taskId?: string;

  /**
   * <p>A filter to limit results to the findings for the specified audit check.</p>
   */
  checkName?: string;

  /**
   * <p>Information identifying the noncompliant resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A filter to limit results to those found after the specified time. You must
   *             specify either the startTime and endTime or the taskId, but not both.</p>
   */
  startTime?: Date;

  /**
   * <p>A filter to limit results to those found before the specified time. You must
   *             specify either the startTime and endTime or the taskId, but not both.</p>
   */
  endTime?: Date;

  /**
   * <p>
   *       Boolean flag indicating whether only the suppressed findings or the unsuppressed findings should be listed. If this parameter isn't provided, the response will list both suppressed and unsuppressed findings.
   *     </p>
   */
  listSuppressedFindings?: boolean;
}

/**
 * @public
 */
export interface ListAuditFindingsResponse {
  /**
   * <p>The findings (results) of the audit.</p>
   */
  findings?: AuditFinding[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
   *             if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAuditMitigationActionsExecutionsRequest {
  /**
   * <p>Specify this filter to limit results to actions for a specific audit mitigation actions task.</p>
   */
  taskId: string | undefined;

  /**
   * <p>Specify this filter to limit results to those with a specific status.</p>
   */
  actionStatus?: AuditMitigationActionsExecutionStatus | string;

  /**
   * <p>Specify this filter to limit results to those that were applied to a specific audit finding.</p>
   */
  findingId: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAuditMitigationActionsExecutionsResponse {
  /**
   * <p>A set of task execution results based on the input parameters. Details include the mitigation action applied, start time, and task status.</p>
   */
  actionsExecutions?: AuditMitigationActionExecutionMetadata[];

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAuditMitigationActionsTasksRequest {
  /**
   * <p>Specify this filter to limit results to tasks that were applied to results for a specific audit.</p>
   */
  auditTaskId?: string;

  /**
   * <p>Specify this filter to limit results to tasks that were applied to a specific audit finding.</p>
   */
  findingId?: string;

  /**
   * <p>Specify this filter to limit results to tasks that are in a specific state.</p>
   */
  taskStatus?: AuditMitigationActionsTaskStatus | string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specify this filter to limit results to tasks that began on or after a specific date and time.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>Specify this filter to limit results to tasks that were completed or canceled on or before a specific date and time.</p>
   */
  endTime: Date | undefined;
}

/**
 * @public
 */
export interface ListAuditMitigationActionsTasksResponse {
  /**
   * <p>The collection of audit mitigation tasks that matched the filter criteria.</p>
   */
  tasks?: AuditMitigationActionsTaskMetadata[];

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAuditSuppressionsRequest {
  /**
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   */
  checkName?: string;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>
   *       Determines whether suppressions are listed in ascending order by expiration date or not. If parameter isn't provided, <code>ascendingOrder=true</code>.
   *     </p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>
   *       The token for the next set of results.
   *     </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       The maximum number of results to return at one time. The default is 25.
   *     </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAuditSuppressionsResponse {
  /**
   * <p>
   *       List of audit suppressions.
   *     </p>
   */
  suppressions?: AuditSuppression[];

  /**
   * <p>
   *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
   *     </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAuditTasksRequest {
  /**
   * <p>The beginning of the time period. Audit information is retained for a
   *               limited time (90 days). Requesting a start time prior to what is retained
   *               results in an "InvalidRequestException".</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end of the time period.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>A filter to limit the output to the specified type of audit: can be one of
   *             "ON_DEMAND_AUDIT_TASK" or "SCHEDULED__AUDIT_TASK".</p>
   */
  taskType?: AuditTaskType | string;

  /**
   * <p>A filter to limit the output to audits with the specified completion
   *             status: can be one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".</p>
   */
  taskStatus?: AuditTaskStatus | string;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAuditTasksResponse {
  /**
   * <p>The audits that were performed during the specified time period.</p>
   */
  tasks?: AuditTaskMetadata[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
   *             if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAuthorizersRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Return the list of authorizers in ascending alphabetical order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The status of the list authorizers request.</p>
   */
  status?: AuthorizerStatus | string;
}

/**
 * @public
 */
export interface ListAuthorizersResponse {
  /**
   * <p>The authorizers.</p>
   */
  authorizers?: AuthorizerSummary[];

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;
}

/**
 * @public
 */
export interface ListBillingGroupsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>Limit the results to billing groups whose names have the given prefix.</p>
   */
  namePrefixFilter?: string;
}

/**
 * @public
 */
export interface ListBillingGroupsResponse {
  /**
   * <p>The list of billing groups.</p>
   */
  billingGroups?: GroupNameAndArn[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Input for the ListCACertificates operation.</p>
 */
export interface ListCACertificatesRequest {
  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Determines the order of the results.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The name of the provisioning template.</p>
   */
  templateName?: string;
}

/**
 * @public
 * <p>A CA certificate.</p>
 */
export interface CACertificate {
  /**
   * <p>The ARN of the CA certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the CA certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The status of the CA certificate.</p>
   *          <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   */
  status?: CACertificateStatus | string;

  /**
   * <p>The date the CA certificate was created.</p>
   */
  creationDate?: Date;
}

/**
 * @public
 * <p>The output from the ListCACertificates operation.</p>
 */
export interface ListCACertificatesResponse {
  /**
   * <p>The CA certificates registered in your Amazon Web Services account.</p>
   */
  certificates?: CACertificate[];

  /**
   * <p>The current position within the list of CA certificates.</p>
   */
  nextMarker?: string;
}

/**
 * @public
 * <p>The input for the ListCertificates operation.</p>
 */
export interface ListCertificatesRequest {
  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;
}

/**
 * @public
 * <p>Information about a certificate.</p>
 */
export interface Certificate {
  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId?: string;

  /**
   * <p>The status of the certificate.</p>
   *          <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   */
  status?: CertificateStatus | string;

  /**
   * <p>The mode of the certificate.</p>
   *          <p>
   *             <code>DEFAULT</code>: A certificate in <code>DEFAULT</code> mode is either generated by
   *          Amazon Web Services IoT Core or registered with an issuer certificate authority (CA) in <code>DEFAULT</code> mode. Devices with
   *          certificates in <code>DEFAULT</code> mode aren't required to send the Server Name
   *          Indication (SNI) extension when connecting to Amazon Web Services IoT Core. However, to use features such as
   *          custom domains and VPC endpoints, we recommend that you use the SNI extension when
   *          connecting to Amazon Web Services IoT Core.</p>
   *          <p>
   *             <code>SNI_ONLY</code>: A certificate in <code>SNI_ONLY</code> mode is registered without an issuer CA. Devices with certificates
   *          in <code>SNI_ONLY</code> mode must send the SNI extension when connecting to Amazon Web Services IoT Core. </p>
   */
  certificateMode?: CertificateMode | string;

  /**
   * <p>The date and time the certificate was created.</p>
   */
  creationDate?: Date;
}

/**
 * @public
 * <p>The output of the ListCertificates operation.</p>
 */
export interface ListCertificatesResponse {
  /**
   * <p>The descriptions of the certificates.</p>
   */
  certificates?: Certificate[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

/**
 * @public
 * <p>The input to the ListCertificatesByCA operation.</p>
 */
export interface ListCertificatesByCARequest {
  /**
   * <p>The ID of the CA certificate. This operation will list all registered device
   *          certificate that were signed by this CA certificate.</p>
   */
  caCertificateId: string | undefined;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;
}

/**
 * @public
 * <p>The output of the ListCertificatesByCA operation.</p>
 */
export interface ListCertificatesByCAResponse {
  /**
   * <p>The device certificates signed by the specified CA certificate.</p>
   */
  certificates?: Certificate[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

/**
 * @public
 */
export interface ListCustomMetricsRequest {
  /**
   * <p>
   *       The token for the next set of results.
   *     </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       The maximum number of results to return at one time. The default is 25.
   *     </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListCustomMetricsResponse {
  /**
   * <p>
   *       The name of the custom metric.
   *     </p>
   */
  metricNames?: string[];

  /**
   * <p>
   *       A token that can be used to retrieve the next set of results,
   *       or <code>null</code> if there are no additional results.
   *     </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDetectMitigationActionsExecutionsRequest {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   */
  taskId?: string;

  /**
   * <p>
   *       The unique identifier of the violation.
   *     </p>
   */
  violationId?: string;

  /**
   * <p>
   *       The name of the thing whose mitigation actions are listed.
   *     </p>
   */
  thingName?: string;

  /**
   * <p>
   *       A filter to limit results to those found after the specified time. You must
   *       specify either the startTime and endTime or the taskId, but not both.
   *     </p>
   */
  startTime?: Date;

  /**
   * <p>
   *       The end of the time period for which ML Detect mitigation actions executions are returned.
   *     </p>
   */
  endTime?: Date;

  /**
   * <p>
   *       The maximum number of results to return at one time. The default is 25.
   *     </p>
   */
  maxResults?: number;

  /**
   * <p>
   *       The token for the next set of results.
   *     </p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const DetectMitigationActionExecutionStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SKIPPED: "SKIPPED",
  SUCCESSFUL: "SUCCESSFUL",
} as const;

/**
 * @public
 */
export type DetectMitigationActionExecutionStatus =
  (typeof DetectMitigationActionExecutionStatus)[keyof typeof DetectMitigationActionExecutionStatus];

/**
 * @public
 * <p>
 *             Describes which mitigation actions should be executed.
 *         </p>
 */
export interface DetectMitigationActionExecution {
  /**
   * <p>
   *             The unique identifier of the task.
   *         </p>
   */
  taskId?: string;

  /**
   * <p>
   *             The unique identifier of the violation.
   *         </p>
   */
  violationId?: string;

  /**
   * <p>
   *             The friendly name that uniquely identifies the mitigation action.
   *         </p>
   */
  actionName?: string;

  /**
   * <p>
   *             The name of the thing.
   *         </p>
   */
  thingName?: string;

  /**
   * <p>
   *             The date a mitigation action was started.
   *         </p>
   */
  executionStartDate?: Date;

  /**
   * <p>
   *             The date a mitigation action ended.
   *         </p>
   */
  executionEndDate?: Date;

  /**
   * <p>
   *             The status of a mitigation action.
   *         </p>
   */
  status?: DetectMitigationActionExecutionStatus | string;

  /**
   * <p>
   *             The error code of a mitigation action.
   *         </p>
   */
  errorCode?: string;

  /**
   * <p>
   *             The message of a mitigation action.
   *         </p>
   */
  message?: string;
}

/**
 * @public
 */
export interface ListDetectMitigationActionsExecutionsResponse {
  /**
   * <p>
   *       List of actions executions.
   *     </p>
   */
  actionsExecutions?: DetectMitigationActionExecution[];

  /**
   * <p>
   *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
   *     </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDetectMitigationActionsTasksRequest {
  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>
   *       The token for the next set of results.
   *     </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       A filter to limit results to those found after the specified time. You must
   *       specify either the startTime and endTime or the taskId, but not both.
   *     </p>
   */
  startTime: Date | undefined;

  /**
   * <p>
   *       The end of the time period for which ML Detect mitigation actions tasks are returned.
   *     </p>
   */
  endTime: Date | undefined;
}

/**
 * @public
 */
export interface ListDetectMitigationActionsTasksResponse {
  /**
   * <p>
   *       The collection of ML Detect mitigation tasks that matched the filter criteria.
   *     </p>
   */
  tasks?: DetectMitigationActionsTaskSummary[];

  /**
   * <p>
   *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
   *     </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDimensionsRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to retrieve at one time.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListDimensionsResponse {
  /**
   * <p>A list of the names of the defined dimensions. Use <code>DescribeDimension</code> to get details for a dimension.</p>
   */
  dimensionNames?: string[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDomainConfigurationsRequest {
  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;
}

/**
 * @public
 * <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain.
 *          A domain configuration can be associated with an Amazon Web Services-managed domain
 *          (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p>
 *          <ul>
 *             <li>
 *                <p>Data</p>
 *             </li>
 *             <li>
 *                <p>Jobs</p>
 *             </li>
 *             <li>
 *                <p>CredentialProvider</p>
 *             </li>
 *          </ul>
 */
export interface DomainConfigurationSummary {
  /**
   * <p>The name of the domain configuration. This value must be unique to a region.</p>
   */
  domainConfigurationName?: string;

  /**
   * <p>The ARN of the domain configuration.</p>
   */
  domainConfigurationArn?: string;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;
}

/**
 * @public
 */
export interface ListDomainConfigurationsResponse {
  /**
   * <p>A list of objects that contain summary information about the user's domain configurations.</p>
   */
  domainConfigurations?: DomainConfigurationSummary[];

  /**
   * <p>The marker for the next set of results.</p>
   */
  nextMarker?: string;
}

/**
 * @public
 */
export interface ListFleetMetricsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response;
   *        otherwise <code>null</code> to receive the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The name and ARN of a fleet metric.</p>
 */
export interface FleetMetricNameAndArn {
  /**
   * <p>The fleet metric name.</p>
   */
  metricName?: string;

  /**
   * <p>The fleet metric ARN.</p>
   */
  metricArn?: string;
}

/**
 * @public
 */
export interface ListFleetMetricsResponse {
  /**
   * <p>The list of fleet metrics objects.</p>
   */
  fleetMetrics?: FleetMetricNameAndArn[];

  /**
   * <p>The token for the next set of results. Will not be returned if the operation has returned
   *       all results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListIndicesRequest {
  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListIndicesResponse {
  /**
   * <p>The index names.</p>
   */
  indexNames?: string[];

  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListJobExecutionsForJobRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The status of the job.</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The job execution summary.</p>
 */
export interface JobExecutionSummary {
  /**
   * <p>The status of the job execution.</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was queued.</p>
   */
  queuedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution started.</p>
   */
  startedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>A string (consisting of the digits "0" through "9") which identifies this particular job execution on
   *             this particular device. It can be used later in commands which return or update job execution
   *             information.</p>
   */
  executionNumber?: number;

  /**
   * <p>The number that indicates how many retry attempts have been completed for this
   *         job on this device.</p>
   */
  retryAttempt?: number;
}

/**
 * @public
 * <p>Contains a summary of information about job executions for a specific job.</p>
 */
export interface JobExecutionSummaryForJob {
  /**
   * <p>The ARN of the thing on which the job execution is running.</p>
   */
  thingArn?: string;

  /**
   * <p>Contains a subset of information about a job execution.</p>
   */
  jobExecutionSummary?: JobExecutionSummary;
}

/**
 * @public
 */
export interface ListJobExecutionsForJobResponse {
  /**
   * <p>A list of job execution summaries.</p>
   */
  executionSummaries?: JobExecutionSummaryForJob[];

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no
   *             additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListJobExecutionsForThingRequest {
  /**
   * <p>The thing name.</p>
   */
  thingName: string | undefined;

  /**
   * <p>An optional filter that lets you search for jobs that have the specified status.</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *          <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *          <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *          <note>
   *             <p>The <code>namespaceId</code> feature is in public preview.</p>
   *          </note>
   */
  namespaceId?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;
}

/**
 * @public
 * <p>The job execution summary for a thing.</p>
 */
export interface JobExecutionSummaryForThing {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>Contains a subset of information about a job execution.</p>
   */
  jobExecutionSummary?: JobExecutionSummary;
}

/**
 * @public
 */
export interface ListJobExecutionsForThingResponse {
  /**
   * <p>A list of job execution summaries.</p>
   */
  executionSummaries?: JobExecutionSummaryForThing[];

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no
   *             additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * <p>An optional filter that lets you search for jobs that have the specified status.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
   *             target group, even after the job was completed by all things originally in the group. </p>
   *          <note>
   *             <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets.
   *                 By using continuous jobs, devices that join the group receive the job execution even after the job has
   *                 been created.</p>
   *          </note>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A filter that limits the returned jobs to those for the specified group.</p>
   */
  thingGroupName?: string;

  /**
   * <p>A filter that limits the returned jobs to those for the specified group.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *          <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *          <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *          <note>
   *             <p>The <code>namespaceId</code> feature is in public preview.</p>
   *          </note>
   */
  namespaceId?: string;
}

/**
 * @public
 * <p>The job summary.</p>
 */
export interface JobSummary {
  /**
   * <p>The job ARN.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The ID of the thing group.</p>
   */
  thingGroupId?: string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
   *             target group, even after the job was completed by all things originally in the group.</p>
   *          <note>
   *             <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets.
   *                 By using continuous jobs, devices that join the group receive the job execution even after the job has
   *                 been created.</p>
   *          </note>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The job summary status.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job completed.</p>
   */
  completedAt?: Date;

  /**
   * <p>Indicates whether a job is concurrent. Will be true when a job is
   *             rolling out new job executions or canceling previously created executions,
   *             otherwise false.</p>
   */
  isConcurrent?: boolean;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * <p>A list of jobs.</p>
   */
  jobs?: JobSummary[];

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no
   *             additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListJobTemplatesRequest {
  /**
   * <p>The maximum number of results to return in the list.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to use to return the next set of results in the list.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An object that contains information about the job template.</p>
 */
export interface JobTemplateSummary {
  /**
   * <p>The ARN of the job template.</p>
   */
  jobTemplateArn?: string;

  /**
   * <p>The unique identifier of the job template.</p>
   */
  jobTemplateId?: string;

  /**
   * <p>A description of the job template.</p>
   */
  description?: string;

  /**
   * <p>The time, in seconds since the epoch, when the job template was created.</p>
   */
  createdAt?: Date;
}

/**
 * @public
 */
export interface ListJobTemplatesResponse {
  /**
   * <p>A list of objects that contain information about the job templates.</p>
   */
  jobTemplates?: JobTemplateSummary[];

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no
   *             additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListManagedJobTemplatesRequest {
  /**
   * <p>An optional parameter for template name. If specified, only the versions of the
   *             managed job templates that have the specified template name will be returned.</p>
   */
  templateName?: string;

  /**
   * <p>Maximum number of entries that can be returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An object that contains information about the managed template.</p>
 */
export interface ManagedJobTemplateSummary {
  /**
   * <p>The Amazon Resource Name (ARN) for a managed template.</p>
   */
  templateArn?: string;

  /**
   * <p>The unique Name for a managed template.</p>
   */
  templateName?: string;

  /**
   * <p>The description for a managed template.</p>
   */
  description?: string;

  /**
   * <p>A list of environments that are supported with the managed job template.</p>
   */
  environments?: string[];

  /**
   * <p>The version for a managed template.</p>
   */
  templateVersion?: string;
}

/**
 * @public
 */
export interface ListManagedJobTemplatesResponse {
  /**
   * <p>A list of managed job templates that are returned.</p>
   */
  managedJobTemplates?: ManagedJobTemplateSummary[];

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListMetricValuesRequest {
  /**
   * <p>The name of the thing for which security profile metric values are returned.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the security profile metric for which values are returned.</p>
   */
  metricName: string | undefined;

  /**
   * <p>The dimension name.</p>
   */
  dimensionName?: string;

  /**
   * <p>The dimension value operator.</p>
   */
  dimensionValueOperator?: DimensionValueOperator | string;

  /**
   * <p>The start of the time period for which metric values are returned.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end of the time period for which metric values are returned.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A metric.</p>
 */
export interface MetricDatum {
  /**
   * <p>The time the metric value was reported.</p>
   */
  timestamp?: Date;

  /**
   * <p>The value reported for the metric.</p>
   */
  value?: MetricValue;
}

/**
 * @public
 */
export interface ListMetricValuesResponse {
  /**
   * <p>The data the thing reports for the metric during the specified time period.</p>
   */
  metricDatumList?: MetricDatum[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
   *         if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListMitigationActionsRequest {
  /**
   * <p>Specify a value to limit the result to mitigation actions with a specific action type.</p>
   */
  actionType?: MitigationActionType | string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information that identifies a mitigation action. This information is returned by ListMitigationActions.</p>
 */
export interface MitigationActionIdentifier {
  /**
   * <p>The friendly name of the mitigation action.</p>
   */
  actionName?: string;

  /**
   * <p>The IAM role ARN used to apply this mitigation action.</p>
   */
  actionArn?: string;

  /**
   * <p>The date when this mitigation action was created.</p>
   */
  creationDate?: Date;
}

/**
 * @public
 */
export interface ListMitigationActionsResponse {
  /**
   * <p>A set of actions that matched the specified filter criteria.</p>
   */
  actionIdentifiers?: MitigationActionIdentifier[];

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListOTAUpdatesRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The OTA update job status.</p>
   */
  otaUpdateStatus?: OTAUpdateStatus | string;
}

/**
 * @public
 * <p>An OTA update summary.</p>
 */
export interface OTAUpdateSummary {
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The date when the OTA update was created.</p>
   */
  creationDate?: Date;
}

/**
 * @public
 */
export interface ListOTAUpdatesResponse {
  /**
   * <p>A list of OTA update jobs.</p>
   */
  otaUpdates?: OTAUpdateSummary[];

  /**
   * <p>A token to use to get the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The input to the ListOutgoingCertificates operation.</p>
 */
export interface ListOutgoingCertificatesRequest {
  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;
}

/**
 * @public
 * <p>A certificate that has been transferred but not yet accepted.</p>
 */
export interface OutgoingCertificate {
  /**
   * <p>The certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The certificate ID.</p>
   */
  certificateId?: string;

  /**
   * <p>The Amazon Web Services account to which the transfer was made.</p>
   */
  transferredTo?: string;

  /**
   * <p>The date the transfer was initiated.</p>
   */
  transferDate?: Date;

  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;

  /**
   * <p>The certificate creation date.</p>
   */
  creationDate?: Date;
}

/**
 * @public
 * <p>The output from the ListOutgoingCertificates operation.</p>
 */
export interface ListOutgoingCertificatesResponse {
  /**
   * <p>The certificates that are being transferred but not yet accepted.</p>
   */
  outgoingCertificates?: OutgoingCertificate[];

  /**
   * <p>The marker for the next set of results.</p>
   */
  nextMarker?: string;
}

/**
 * @public
 */
export interface ListPackagesRequest {
  /**
   * <p>The maximum number of results returned at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A summary of information about a software package.</p>
 */
export interface PackageSummary {
  /**
   * <p>The name for the target package.</p>
   */
  packageName?: string;

  /**
   * <p>The name of the default package version.</p>
   */
  defaultVersionName?: string;

  /**
   * <p>The date that the package was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date that the package was last updated.</p>
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface ListPackagesResponse {
  /**
   * <p>The software package summary.</p>
   */
  packageSummaries?: PackageSummary[];

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListPackageVersionsRequest {
  /**
   * <p>The name of the target package.</p>
   */
  packageName: string | undefined;

  /**
   * <p>The status of the package version. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle">Package version lifecycle</a>.</p>
   */
  status?: PackageVersionStatus | string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A summary of information about a package version.</p>
 */
export interface PackageVersionSummary {
  /**
   * <p>The name of the associated software package.</p>
   */
  packageName?: string;

  /**
   * <p>The name of the target package version.</p>
   */
  versionName?: string;

  /**
   * <p>The status of the package version. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle">Package version lifecycle</a>.</p>
   */
  status?: PackageVersionStatus | string;

  /**
   * <p>The date that the package version was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date that the package version was last updated.</p>
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface ListPackageVersionsResponse {
  /**
   * <p>Lists the package versions associated to the package.</p>
   */
  packageVersionSummaries?: PackageVersionSummary[];

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The input for the ListPolicies operation.</p>
 */
export interface ListPoliciesRequest {
  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>Specifies the order for results. If true, the results are returned in ascending
   *          creation order.</p>
   */
  ascendingOrder?: boolean;
}

/**
 * @public
 * <p>The output from the ListPolicies operation.</p>
 */
export interface ListPoliciesResponse {
  /**
   * <p>The descriptions of the policies.</p>
   */
  policies?: Policy[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

/**
 * @public
 * <p>The input for the ListPolicyPrincipals operation.</p>
 */
export interface ListPolicyPrincipalsRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>Specifies the order for results. If true, the results are returned in ascending
   *          creation order.</p>
   */
  ascendingOrder?: boolean;
}

/**
 * @public
 * <p>The output from the ListPolicyPrincipals operation.</p>
 */
export interface ListPolicyPrincipalsResponse {
  /**
   * <p>The descriptions of the principals.</p>
   */
  principals?: string[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

/**
 * @public
 * <p>The input for the ListPolicyVersions operation.</p>
 */
export interface ListPolicyVersionsRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;
}

/**
 * @public
 * <p>Describes a policy version.</p>
 */
export interface PolicyVersion {
  /**
   * <p>The policy version ID.</p>
   */
  versionId?: string;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The date and time the policy was created.</p>
   */
  createDate?: Date;
}

/**
 * @internal
 */
export const GetPackageResponseFilterSensitiveLog = (obj: GetPackageResponse): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPackageVersionResponseFilterSensitiveLog = (obj: GetPackageVersionResponse): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.attributes && { attributes: SENSITIVE_STRING }),
});

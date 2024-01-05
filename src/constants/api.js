/* @flow */

export const HEADERS = {
  AUTHORIZATION: "authorization",
  CONTENT_TYPE: "content-type",
  PARTNER_ATTRIBUTION_ID: "paypal-partner-attribution-id",
  CLIENT_METADATA_ID: "paypal-client-metadata-id",
};

export const ELIGIBLE_PAYMENT_METHODS = "v2/payments/find-eligible-methods";

export const FPTI_TRANSITION = {
  SHOPPER_INSIGHTS_API_INIT: "sdk_shopper_insights_recommended_init",
  SHOPPER_INSIGHTS_API_SUCCESS: "sdk_shopper_insights_recommended_success",
  SHOPPER_INSIGHTS_API_ERROR: "sdk_shopper_insights_recommended_error",
};

export const SHOPPER_INSIGHTS_METRIC_NAME =
  "pp.app.paypal_sdk.api.shopper_insights.count";

export type MerchantPayloadData = {|
  customer: {|
    email?: string,
    phone?: {|
      countryCode?: string,
      nationalNumber?: string,
    |},
  |},
|};

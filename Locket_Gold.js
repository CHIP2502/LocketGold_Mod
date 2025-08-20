/*
 Locket Gold Unlock Script
 Author: Zaara | Mod: GPT
*/

const body = JSON.parse($response.body || "{}");

if (body && body.subscriber) {
  body.subscriber.subscriptions = body.subscriber.subscriptions || {};
  body.subscriber.entitlements = body.subscriber.entitlements || {};

  // Tạo entitlement Gold
  body.subscriber.entitlements["Gold"] = {
    expires_date: "2099-12-31T23:59:59Z",
    product_identifier: "locket_gold_lifetime",
    purchase_date: "2023-01-01T00:00:00Z"
  };

  // Thêm vào subscriptions
  body.subscriber.subscriptions["locket_gold_lifetime"] = {
    billing_issues_detected_at: null,
    expires_date: "2099-12-31T23:59:59Z",
    is_sandbox: false,
    original_purchase_date: "2023-01-01T00:00:00Z",
    ownership_type: "PURCHASED",
    period_type: "lifetime",
    purchase_date: "2023-01-01T00:00:00Z",
    store: "app_store",
    unsubscribe_detected_at: null
  };
}

$done({ body: JSON.stringify(body) });

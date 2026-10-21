export const TRIAL_REFUND_POLICY = [
  {
    title: "1. Try Before You Subscribe",
    body: "Trial meals are available at a separate price. We recommend trying our meals first to experience our taste, quality, and portion sizes before purchasing a weekly or monthly subscription.",
  },
  {
    title: "2. Refund Policy",
    body: "Once a weekly or monthly subscription has been purchased and payment has been made, subscription fees are non-refundable, subject to applicable UAE consumer-protection laws.",
  },
];

export const POLICY_ACKNOWLEDGEMENT =
  "I have read and understood The Chef Mom’s Trial Meals & Refund Policy and acknowledge that subscription fees are non-refundable, subject to applicable UAE law.";

export const POLICY_ACCEPTED_KEY = "chef-mom-trial-refund-policy-v1-accepted";
const POLICY_ACCEPTANCE_EVENT = "chef-mom-policy-acceptance-change";

export function getPolicyAccepted() {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(POLICY_ACCEPTED_KEY) === "true";
  } catch {
    return false;
  }
}

export function subscribeToPolicyAcceptance(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener(POLICY_ACCEPTANCE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(POLICY_ACCEPTANCE_EVENT, callback);
  };
}

export function savePolicyAcceptance(accepted: boolean) {
  try {
    if (accepted) window.localStorage.setItem(POLICY_ACCEPTED_KEY, "true");
    else window.localStorage.removeItem(POLICY_ACCEPTED_KEY);
  } catch {
    // The UI still updates for this visit when browser storage is unavailable.
  }
  window.dispatchEvent(new Event(POLICY_ACCEPTANCE_EVENT));
}

export const TRIAL_REFUND_INTRO =
  "At The Chef Mom, we encourage every customer to experience our homely meals before choosing a subscription plan.";

export const TRIAL_REFUND_CLOSING =
  "Please choose your subscription plan carefully and try our trial meals before proceeding with a subscription.";

export const TRIAL_REFUND_THANK_YOU =
  "Thank you for choosing The Chef Mom. We look forward to bringing the comfort of home-cooked food to your everyday life.";

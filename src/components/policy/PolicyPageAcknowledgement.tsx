"use client";

import { useState, useSyncExternalStore } from "react";
import {
  getPolicyAccepted,
  POLICY_ACKNOWLEDGEMENT,
  savePolicyAcceptance,
  subscribeToPolicyAcceptance,
} from "@/lib/trialRefundPolicy";

export default function PolicyPageAcknowledgement() {
  const accepted = useSyncExternalStore(
    subscribeToPolicyAcceptance,
    getPolicyAccepted,
    () => false,
  );
  const [draftChecked, setDraftChecked] = useState<boolean | null>(null);
  const checked = accepted || (draftChecked ?? false);

  const acceptPolicy = () => {
    if (!checked || accepted) return;
    savePolicyAcceptance(true);
    setDraftChecked(null);
  };

  return (
    <form className="policy-page-acknowledgement-form" onSubmit={(event) => {
      event.preventDefault();
      acceptPolicy();
    }}>
      {accepted && <p className="policy-accepted-status" role="status">You have already acknowledged this policy on this browser.</p>}
      <label className={`policy-page-checkbox${accepted ? " is-accepted" : ""}`}>
        <input checked={checked} disabled={accepted} onChange={(event) => setDraftChecked(event.target.checked)} type="checkbox" />
        <span>{POLICY_ACKNOWLEDGEMENT}</span>
      </label>
      <button className="policy-page-submit" disabled={!checked || accepted} type="submit">Submit</button>
    </form>
  );
}

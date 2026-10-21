"use client";

import { useEffect, useRef, useState } from "react";
import {
  POLICY_ACKNOWLEDGEMENT,
  POLICY_ACCEPTED_KEY,
  TRIAL_REFUND_CLOSING,
  TRIAL_REFUND_INTRO,
  TRIAL_REFUND_POLICY,
  TRIAL_REFUND_THANK_YOU,
  savePolicyAcceptance,
} from "@/lib/trialRefundPolicy";

export default function WhatsAppPolicyGate() {
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);
  const [acknowledged, setAcknowledged] = useState(false);
  const acceptedRef = useRef(false);

  useEffect(() => {
    try {
      acceptedRef.current = window.localStorage.getItem(POLICY_ACCEPTED_KEY) === "true";
    } catch {
      acceptedRef.current = false;
    }

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link || !/^https?:\/\/(?:www\.)?wa\.me\//i.test(link.href)) return;

      try {
        acceptedRef.current = window.localStorage.getItem(POLICY_ACCEPTED_KEY) === "true";
      } catch {
        // Continue with the in-memory acknowledgement when storage is unavailable.
      }
      if (acceptedRef.current) return;

      event.preventDefault();
      setPendingUrl(link.href);
      setAcknowledged(false);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  useEffect(() => {
    if (!pendingUrl) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPendingUrl(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [pendingUrl]);

  const continueToWhatsApp = () => {
    if (!pendingUrl || !acknowledged) return;
    savePolicyAcceptance(true);
    acceptedRef.current = true;
    window.open(pendingUrl, "_blank", "noopener,noreferrer");
    setPendingUrl(null);
  };

  if (!pendingUrl) return null;

  return (
    <div className="policy-dialog-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) setPendingUrl(null);
    }}>
      <section aria-labelledby="policy-dialog-title" aria-modal="true" className="policy-dialog" role="dialog">
        <button aria-label="Close policy confirmation" className="policy-dialog-close" onClick={() => setPendingUrl(null)} type="button">×</button>
        <p className="policy-dialog-eyebrow">Before you continue</p>
        <h2 id="policy-dialog-title">Trial Meals &amp; Refund Policy</h2>
        <p className="policy-dialog-intro">{TRIAL_REFUND_INTRO}</p>
        <div className="policy-dialog-points">
          {TRIAL_REFUND_POLICY.map(({ title, body }) => (
            <section key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </section>
          ))}
          <p>{TRIAL_REFUND_CLOSING}</p>
          <p>{TRIAL_REFUND_THANK_YOU}</p>
        </div>
        <p className="policy-dialog-once">Please confirm once to continue to WhatsApp. This confirmation is remembered on this browser.</p>
        <label className="policy-acknowledgement">
          <input checked={acknowledged} onChange={(event) => setAcknowledged(event.target.checked)} type="checkbox" />
          <span>{POLICY_ACKNOWLEDGEMENT}</span>
        </label>
        <button className="policy-dialog-continue" disabled={!acknowledged} onClick={continueToWhatsApp} type="button">Continue to WhatsApp</button>
      </section>
    </div>
  );
}

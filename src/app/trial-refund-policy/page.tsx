import { notFound } from "next/navigation";

// The page is temporarily disabled while keeping its implementation for later.
export default function TrialRefundPolicyPage(): never {
  return notFound();
}

/*
import type { Metadata } from "next";
import Link from "next/link";
import PolicyPageAcknowledgement from "@/components/policy/PolicyPageAcknowledgement";
import {
  TRIAL_REFUND_CLOSING,
  TRIAL_REFUND_INTRO,
  TRIAL_REFUND_POLICY,
  TRIAL_REFUND_THANK_YOU,
} from "@/lib/trialRefundPolicy";

export const metadata: Metadata = {
  title: "Trial Meals & Refund Policy | The Chef Mom",
  description: "The Chef Mom trial meals and subscription refund policy.",
};

export default function TrialRefundPolicyPage() {
  return (
    <main className="policy-page">
      <article className="policy-page-card">
        <Link className="policy-back-link" href="/">← Back to The Chef Mom</Link>
        <p className="policy-page-eyebrow">The Chef Mom · Dubai</p>
        <h1>Trial Meals &amp; Refund Policy</h1>
        <p className="policy-intro">{TRIAL_REFUND_INTRO}</p>
        {TRIAL_REFUND_POLICY.map(({ title, body }) => (
          <section className="policy-page-section" key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </section>
        ))}
        <p className="policy-thank-you">{TRIAL_REFUND_CLOSING}</p>
        <p className="policy-thank-you">{TRIAL_REFUND_THANK_YOU}</p>
        <section className="policy-customer-confirmation">
          <h2>Customer Confirmation</h2>
          <PolicyPageAcknowledgement />
        </section>
      </article>
    </main>
  );
}
*/

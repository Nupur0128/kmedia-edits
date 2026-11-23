import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <main className="bg-brand-white text-brand-black min-h-screen px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-red font-semibold mb-8 hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <p className="text-xs tracking-[0.3em] text-brand-red font-semibold uppercase mb-3">
          Legal
        </p>
        <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl mb-6">
          Terms & Conditions
        </h1>
        <p className="text-xs text-black/50 mb-12">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="space-y-8 text-sm md:text-base leading-relaxed text-black/75">
          <section>
            <h2 className="font-editorial text-2xl text-brand-black mb-3">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using the services provided by K-Media Production
              ("we", "our", or "us"), you agree to be bound by these Terms and
              Conditions. If you do not agree with any part of these terms, please do
              not engage our services or use our website.
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-brand-black mb-3">
              2. Creative Services & Deliverables
            </h2>
            <p>
              K-Media Production provides video editing, post-production, thumbnail
              design, channel management, and creative content services. Project
              timelines, scope of work, revision rounds, and specific deliverables
              are established on a per-project basis or via agreed monthly retainer
              schedules.
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-brand-black mb-3">
              3. Footage & Content Ownership
            </h2>
            <p>
              Clients retain full ownership of all raw footage, branding assets, and
              materials provided to K-Media Production. Upon final payment in full, the
              client receives rights to the final edited deliverables. We reserve the
              right to display final creative work in our portfolio, website, and
              promotional channels unless a non-disclosure agreement (NDA) is executed.
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-brand-black mb-3">
              4. Revisions & Approvals
            </h2>
            <p>
              Each project includes the agreed number of revision rounds outlined in
              your project brief. Additional revisions outside the original scope or
              requests requiring major re-shoots/re-edits will be estimated and
              billed accordingly.
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-brand-black mb-3">
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding these Terms & Conditions, please
              contact us at{" "}
              <a
                href="mailto:production@kodandamedia.com"
                className="text-brand-red font-semibold hover:underline"
              >
                production@kodandamedia.com
              </a>{" "}
              or call us at +91 74159 19006.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

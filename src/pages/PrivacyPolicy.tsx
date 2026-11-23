import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
          Privacy
        </p>
        <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl mb-6">
          Privacy Policy
        </h1>
        <p className="text-xs text-black/50 mb-12">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="space-y-8 text-sm md:text-base leading-relaxed text-black/75">
          <section>
            <h2 className="font-editorial text-2xl text-brand-black mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you submit an inquiry through our website or contact us directly, we
              may collect personal details such as your name, email address, phone
              number, company/brand name, YouTube channel links, and project
              descriptions.
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-brand-black mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              The information we collect is used solely to respond to project
              inquiries, provide creative services, coordinate project deliverables,
              and maintain communication. We never sell, rent, or trade your personal
              information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-brand-black mb-3">
              3. Footage & Confidentiality
            </h2>
            <p>
              All raw footage, unreleased content, and creative briefs shared with
              K-Media Production are treated with strict confidentiality. Files shared
              via Google Drive, Dropbox, or other secure channels are accessed only by
              team members actively working on your project.
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-brand-black mb-3">
              4. Security
            </h2>
            <p>
              We implement industry-standard technical measures to protect your
              information and creative assets from unauthorized access, alteration, or
              loss.
            </p>
          </section>

          <section>
            <h2 className="font-editorial text-2xl text-brand-black mb-3">
              5. Contact Us
            </h2>
            <p>
              For privacy-related inquiries, please reach out to us at{" "}
              <a
                href="mailto:production@kodandamedia.com"
                className="text-brand-red font-semibold hover:underline"
              >
                production@kodandamedia.com
              </a>{" "}
              or +91 74159 19006.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

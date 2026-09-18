import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Stars from '../../components/home/Stars';

export default function Terms() {
  return (
    <div className="relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-50">
        <Stars />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-8 text-slate-300 text-sm leading-relaxed">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-brand-400 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Return Home
        </Link>

        <div className="space-y-3">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Eimpora Enterprise Terms of Service
          </h1>


          <p className="text-xs text-brand-400 font-semibold uppercase tracking-wider">
            Effective Date: September 2026
          </p>

          <p className="max-w-3xl text-slate-400">
            These Enterprise Terms of Service ("Terms") govern access to and use of
            the Eimpora enterprise workforce operating platform, applications, APIs,
            integrations, and related services ("Services") provided by Eimpora
            Software Technologies Inc. ("Eimpora", "we", "us", or "our").
          </p>


        </div>

        <div className="space-y-8 pt-6 border-t border-white/10">

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              1. Service Scope & Availability
            </h2>

            <p>
              Eimpora provides an AI-embedded enterprise workforce operating platform
              designed to support workforce management, attendance, payroll,
              financial operations, employee administration, reporting, automation,
              and related enterprise workflows.
            </p>

            <p>
              Enterprise customers receive access to the Services according to their
              applicable order form, subscription plan, Master Services Agreement
              ("MSA"), Service Level Agreement ("SLA"), and other applicable
              contractual documents.
            </p>

            <p>
              Where an applicable SLA expressly provides for a 99.99% availability
              commitment, Eimpora will provide the applicable service availability
              commitments and remedies specified in that SLA. Availability commitments
              may be subject to scheduled maintenance, emergency maintenance,
              force-majeure events, third-party service failures, customer-caused
              outages, and other exclusions specified in the applicable SLA.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              2. Customer Responsibilities
            </h2>

            <p>
              Customers are responsible for maintaining appropriate administrative,
              technical, and organizational controls over their use of the Services.
              This includes ensuring that authorized users have appropriate access
              privileges and that customer-provided information is accurate and
              lawfully collected.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>Maintaining accurate account and organizational information.</li>
              <li>Managing authorized users and their access permissions.</li>
              <li>Protecting account credentials, API keys, and authentication information.</li>
              <li>Reviewing and configuring Role-Based Access Control (RBAC) policies.</li>
              <li>Enabling appropriate security controls, including MFA for privileged users.</li>
              <li>Maintaining appropriate internal policies for employee and payroll data.</li>
              <li>Ensuring customer content does not violate applicable laws or third-party rights.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              3. Acceptable Use & Security Compliance
            </h2>

            <p>
              Customers must use the Services in accordance with applicable laws,
              regulations, contractual obligations, and Eimpora's security
              requirements. Customers must not attempt to circumvent authentication,
              access controls, tenant isolation, security mechanisms, or usage
              restrictions.
            </p>

            <p>
              Customers must maintain secure credential management, enforce
              multi-factor authentication for administrative users where supported,
              and adhere to configured Role-Based Access Control policies.
            </p>

            <p>
              Customers may not use the Services to introduce malicious software,
              conduct unauthorized security testing, interfere with service
              availability, access another customer's environment, or attempt to
              obtain information for which they do not have authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              4. Account Security & Access Management
            </h2>

            <p>
              Enterprise customers are responsible for maintaining the confidentiality
              of their administrative credentials and for promptly disabling accounts
              belonging to individuals who no longer require access.
            </p>

            <p>
              Eimpora may suspend or restrict access to accounts where reasonably
              necessary to protect the Services, customer information, other
              customers, or the security and integrity of the Eimpora platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              5. Customer Data & Data Processing
            </h2>

            <p>
              Customers retain ownership of their data submitted to the Services
              ("Customer Data"). Eimpora processes Customer Data only to provide,
              secure, maintain, and support the Services, or as otherwise permitted
              under the applicable MSA, Data Processing Agreement ("DPA"), or
              customer's documented instructions.
            </p>

            <p>
              The parties' respective responsibilities regarding personal data,
              privacy, international transfers, data retention, subprocessors, and
              data subject rights are further described in the applicable DPA and
              Eimpora Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              6. Artificial Intelligence Features
            </h2>

            <p>
              Certain Eimpora Services may include artificial intelligence,
              machine-learning, automation, recommendation, document-processing, or
              other intelligent features ("AI Features").
            </p>

            <p>
              AI-generated outputs are provided as decision-support or workflow
              assistance and may not always be accurate, complete, or suitable for
              every circumstance. Customers remain responsible for reviewing
              AI-generated outputs before relying on them for material employment,
              payroll, financial, legal, compliance, or other consequential
              decisions.
            </p>

            <p>
              Customers must not use AI Features in a manner that violates applicable
              employment, privacy, anti-discrimination, data protection, or other
              applicable laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              7. Integrations & Third-Party Services
            </h2>

            <p>
              Eimpora may support integrations with third-party applications,
              payment providers, accounting systems, identity providers, banking
              platforms, communication services, and other external systems.
            </p>

            <p>
              Customer use of third-party services is subject to the applicable
              third party's terms and privacy policies. Eimpora is not responsible for
              the availability, security, functionality, or performance of
              third-party services outside Eimpora's reasonable control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              8. Intellectual Property
            </h2>

            <p>
              Eimpora and its licensors retain all rights, title, and interest in the
              Services, software, platform architecture, documentation, interfaces,
              trademarks, designs, algorithms, and other Eimpora intellectual
              property.
            </p>

            <p>
              Except for the limited rights expressly granted under the applicable
              agreement, these Terms do not transfer ownership of Eimpora's
              intellectual property to the customer.
            </p>

            <p>
              Customers retain their rights in Customer Data and grant Eimpora only
              the permissions reasonably necessary to provide the contracted Services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              9. Confidentiality
            </h2>

            <p>
              Each party may receive confidential information belonging to the other
              party in connection with the Services. Each party agrees to protect
              confidential information using reasonable safeguards and to use such
              information only for legitimate purposes related to the business
              relationship.
            </p>

            <p>
              Confidentiality obligations do not apply to information that is
              independently developed, publicly available without breach, lawfully
              obtained from another source, or required to be disclosed by law or
              valid legal process.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              10. Fees, Billing & Subscription
            </h2>

            <p>
              Enterprise customers agree to pay the fees specified in the applicable
              order form or subscription agreement. Subscription fees may depend on
              factors including workforce size, enabled modules, usage levels,
              integrations, support requirements, geographic region, or other
              commercial terms.
            </p>

            <p>
              Unless otherwise agreed in writing, applicable taxes, government
              charges, and similar amounts associated with the Services are the
              customer's responsibility.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              11. Service Modifications & Maintenance
            </h2>

            <p>
              Eimpora may modify, improve, update, or discontinue components of the
              Services from time to time. We will use commercially reasonable efforts
              to maintain the core functionality of contracted enterprise services.
            </p>

            <p>
              Maintenance, security updates, infrastructure upgrades, and emergency
              changes may occasionally affect service availability. Scheduled
              maintenance will be communicated in accordance with the applicable SLA
              where required.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              12. Suspension & Termination
            </h2>

            <p>
              Eimpora may suspend access to the Services when reasonably necessary to
              address security threats, unlawful activity, material violations of
              these Terms, non-payment, or risks to the platform or other customers.
            </p>

            <p>
              Either party may terminate the applicable agreement in accordance with
              the termination provisions contained in the MSA or order form.
              Following termination, Customer Data will be handled according to the
              applicable contractual data retention and deletion requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              13. Warranties & Disclaimers
            </h2>

            <p>
              Eimpora will provide the Services in a professional and commercially
              reasonable manner consistent with the applicable agreement and
              documentation.
            </p>

            <p>
              Except for express warranties specifically provided in a written
              agreement, the Services are provided subject to the limitations and
              disclaimers contained in the applicable MSA. Eimpora does not guarantee
              that every feature will be uninterrupted, error-free, or suitable for
              every customer-specific business requirement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              14. Limitation of Liability
            </h2>

            <p>
              To the maximum extent permitted by applicable law, each party's
              liability arising from the Services will be governed by the liability
              limitations, exclusions, and applicable caps specified in the MSA or
              other controlling enterprise agreement.
            </p>

            <p>
              Nothing in these Terms is intended to exclude or limit liability that
              cannot lawfully be excluded or limited under applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              15. Compliance With Applicable Laws
            </h2>

            <p>
              Each party is responsible for complying with laws and regulations
              applicable to its activities under the Services. Depending on the
              customer's location and use case, this may include employment, payroll,
              tax, privacy, data protection, financial, accessibility, and
              cybersecurity requirements.
            </p>

            <p>
              Eimpora does not provide legal, tax, accounting, employment, or
              regulatory advice through the Services. Customers are responsible for
              obtaining professional advice where necessary.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              16. Governing Agreement
            </h2>

            <p>
              For enterprise customers, these Terms are intended to operate together
              with the applicable Master Services Agreement, Order Form, SLA, Data
              Processing Agreement, and other written contractual documents. If there
              is a conflict between these Terms and a separately executed enterprise
              agreement, the applicable agreement will control to the extent specified
              in that agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              17. Changes to These Terms
            </h2>

            <p>
              Eimpora may update these Terms from time to time to reflect changes in
              the Services, technology, security practices, or applicable legal
              requirements. Material changes will be communicated to enterprise
              customers in accordance with the applicable contractual requirements.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h2 className="font-display text-xl font-bold text-white">
              18. Contact Information
            </h2>

            <p>
              Questions regarding these Terms, enterprise agreements, service
              availability, security, or contractual matters may be directed to
              Eimpora through the official contact information provided in the
              applicable enterprise agreement or through the Eimpora website.
            </p>

            <p className="text-slate-400">
              <span className="text-white font-medium">
                Eimpora Software Technologies Inc.
              </span>
              <br />
              Enterprise Legal & Compliance Team
            </p>
          </section>


        </div>
      </div>
    </div>
  );
}

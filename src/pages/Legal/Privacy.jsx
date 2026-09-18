import React from 'react';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Stars from '../../components/home/Stars';

export default function Privacy() {
  return (
     <div className="relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-50">
        <Stars />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-8 text-slate-300 text-sm leading-relaxed">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-brand-400 mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Return Home
        </Link>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Eimpora Global Privacy Policy
        </h1>

        <p className="text-xs text-brand-400 font-semibold uppercase tracking-wider">
          Effective Date: September 14, 2026
        </p>

        <p className="max-w-4xl leading-relaxed">
          Eimpora Software Technologies Inc. ("Eimpora", "we", "us", or "our")
          is committed to protecting the privacy, confidentiality, and security of
          personal and business information processed through our platform. This
          Privacy Policy explains how we collect, use, store, protect, and disclose
          information when organizations, administrators, employees, and other
          authorized users access Eimpora products and services.
        </p>

        <div className="space-y-6 pt-6 border-t border-white/10">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              1. Our Role and Data Processing Commitment
            </h2>
            <p>
              Eimpora provides enterprise software services to customer organizations.
              In most cases, Eimpora acts as a Data Processor or Service Provider on
              behalf of the organization using our platform, while that organization
              acts as the Data Controller and determines the purposes and means of
              processing personal data.
            </p>
            <p>
              We process customer data only as necessary to provide, maintain, secure,
              and support the Eimpora platform, in accordance with applicable
              agreements, documented customer instructions, and applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              2. Categories of Information We Process
            </h2>
            <p>
              Depending on the Eimpora products and features enabled by a customer,
              we may process the following categories of information:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-brand-400">
              <li>
                Employee and user information, including names, work contact details,
                job titles, departments, employee identifiers, and organizational
                records.
              </li>
              <li>
                Attendance and workforce information, including clock-in and clock-out
                records, timesheets, schedules, leave records, and attendance events.
              </li>
              <li>
                Payroll and financial information, including salary records,
                compensation data, deductions, reimbursements, payment records, and
                related financial ledger information.
              </li>
              <li>
                Tax and statutory information, including government-issued identifiers
                and other information required for employment, payroll, or regulatory
                compliance.
              </li>
              <li>
                Expense and document information, including receipts, invoices, and
                images or files submitted through document processing or OCR features.
              </li>
              <li>
                Technical and security information, including IP addresses, device and
                browser information, authentication events, system logs, audit trails,
                and account activity.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              3. How We Use Information
            </h2>
            <p>We use and process information to:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-brand-400">
              <li>Provide, operate, and maintain the Eimpora platform and services.</li>
              <li>Authenticate users and manage account access and permissions.</li>
              <li>Process authorized HR, payroll, attendance, expense, and business operations.</li>
              <li>Provide customer support, technical assistance, and service communications.</li>
              <li>Monitor performance, prevent fraud, detect abuse, and maintain platform security.</li>
              <li>Comply with legal, regulatory, tax, accounting, and contractual obligations.</li>
              <li>Improve service reliability, functionality, and user experience using appropriate safeguards.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              4. Data Security and Encryption
            </h2>
            <p>
              Eimpora applies administrative, technical, and organizational safeguards
              designed to protect information against unauthorized access, alteration,
              disclosure, loss, or destruction. Security controls may include:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-brand-400">
              <li>Encryption of data in transit using modern TLS protocols.</li>
              <li>Encryption of eligible data at rest using industry-standard cryptographic controls.</li>
              <li>Role-based access controls and least-privilege access principles.</li>
              <li>Multi-tenant logical isolation designed to separate customer environments and data.</li>
              <li>Authentication controls, access logging, and security monitoring.</li>
              <li>Secure backup, recovery, vulnerability management, and incident response procedures.</li>
            </ul>
            <p>
              No method of transmission or storage is completely secure. However,
              Eimpora continuously works to maintain safeguards appropriate to the
              nature and sensitivity of the information processed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              5. Data Access and Confidentiality
            </h2>
            <p>
              Access to customer data is restricted to authorized users and personnel
              who require access to perform legitimate business, operational, support,
              security, or legal functions. Access is subject to appropriate
              authorization controls and confidentiality obligations.
            </p>
            <p>
              Eimpora does not sell customer personal data. We do not use enterprise
              customer data for unrelated advertising purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              6. Data Sharing and Subprocessors
            </h2>
            <p>
              We may share information with authorized service providers,
              infrastructure partners, and subprocessors that help us operate and
              support the Eimpora platform. Such parties are permitted to process
              information only as necessary to provide services to Eimpora and are
              subject to appropriate contractual confidentiality and data protection
              obligations.
            </p>
            <p>
              We may also disclose information where required by applicable law, legal
              process, regulatory requirements, or to protect the rights, security,
              and integrity of Eimpora, our customers, users, or others.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              7. International Data Transfers and Data Residency
            </h2>
            <p>
              Customer information may be processed in the regions where Eimpora or
              its authorized service providers maintain operations or infrastructure.
              Where applicable, we implement appropriate safeguards for international
              data transfers in accordance with contractual commitments and applicable
              data protection requirements.
            </p>
            <p>
              Enterprise customers may have access to regional deployment or data
              residency options depending on their subscription, service configuration,
              and applicable product availability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              8. Data Retention
            </h2>
            <p>
              We retain information for as long as necessary to provide our services,
              comply with contractual obligations, meet legal and regulatory
              requirements, resolve disputes, enforce agreements, and maintain
              appropriate security and business records.
            </p>
            <p>
              Customer data retention and deletion may also be governed by the
              applicable enterprise subscription agreement, customer instructions,
              configured retention settings, and applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              9. Individual Privacy Rights
            </h2>
            <p>
              Depending on applicable law, individuals may have rights regarding their
              personal information, including rights to request access, correction,
              deletion, restriction, objection, or portability.
            </p>
            <p>
              When Eimpora processes personal data on behalf of an enterprise customer,
              requests relating to that data should generally be directed to the
              relevant employer or organization acting as the Data Controller. Eimpora
              will provide reasonable assistance to customers where required under
              applicable law and contractual obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              10. Cookies and Technical Information
            </h2>
            <p>
              Our websites and services may use cookies, local storage, and similar
              technologies to maintain sessions, authenticate users, remember
              preferences, analyze service performance, and protect against security
              threats.
            </p>
            <p>
              Users may control certain cookie settings through their browser or device
              settings. Disabling certain technologies may affect the availability or
              functionality of some parts of our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              11. Data Breach and Security Incidents
            </h2>
            <p>
              Eimpora maintains procedures designed to identify, investigate, contain,
              and respond to suspected security incidents. Where required by
              applicable law or contractual obligations, we will notify affected
              customers of confirmed incidents involving their data and provide
              relevant information to support their response obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              12. Children's Privacy
            </h2>
            <p>
              Eimpora services are designed for business and enterprise use and are not
              intended for use by children except where information is lawfully
              provided and processed by an authorized customer in connection with a
              legitimate employment or organizational purpose.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              13. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes
              in our services, security practices, legal requirements, or business
              operations. When we make material changes, we will update the effective
              date and provide additional notice where required by applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">
              14. Contact Us
            </h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy
              Policy or Eimpora's data processing practices, please contact your
              organization's Eimpora administrator or reach out to Eimpora through
              the official contact channels provided on our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

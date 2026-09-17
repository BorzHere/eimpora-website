import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Stars from '../../components/home/Stars';

export default function Cookies() {
  return (
    <div className="relative overflow-hidden max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-8 text-slate-300 text-sm leading-relaxed">
      <Stars />
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-brand-400 mb-4 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Return Home
      </Link>

      <div className="space-y-3">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Eimpora Cookie & Tracking Policy
        </h1>


    <p className="text-xs text-brand-400 font-semibold uppercase tracking-wider">
      Effective Date: September 2026
    </p>

    <p className="max-w-3xl text-slate-400">
      This Cookie & Tracking Policy explains how Eimpora Software Technologies
      Inc. ("Eimpora", "we", "us", or "our") uses cookies, local storage,
      session technologies, analytics technologies, and similar mechanisms on
      the Eimpora website and enterprise platform.
    </p>


      </div>

      <div className="space-y-8 pt-6 border-t border-white/10">

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            1. What Are Cookies?
          </h2>

          <p>
            Cookies are small text files or similar identifiers stored on a user's
            browser or device when accessing a website or application. Cookies can
            allow a service to recognize a browser, maintain a secure session,
            remember preferences, and understand how a service is being used.
          </p>

          <p>
            Eimpora may also use technologies such as local storage, session
            storage, authentication tokens, pixels, SDKs, and similar technologies
            where necessary to provide, secure, and operate the Services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            2. Strictly Necessary Cookies
          </h2>

          <p>
            Eimpora uses strictly necessary cookies and session technologies that
            are required for the website and enterprise platform to function
            securely and reliably.
          </p>

          <p>These technologies may be used to:</p>

          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>Authenticate users and maintain secure login sessions.</li>
            <li>Maintain SAML 2.0 and OIDC authentication workflows where configured.</li>
            <li>Maintain session state and user security preferences.</li>
            <li>Support authorization and Role-Based Access Control (RBAC).</li>
            <li>Help prevent cross-site request forgery (CSRF) and similar attacks.</li>
            <li>Maintain application availability and load-balancing functionality.</li>
            <li>Detect abnormal authentication or security activity.</li>
            <li>Remember essential application configuration required for service operation.</li>
          </ul>

          <p>
            Because these technologies are necessary to provide requested
            functionality or maintain platform security, disabling them may prevent
            certain portions of the Eimpora Services from functioning correctly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            3. Functional and Preference Technologies
          </h2>

          <p>
            Where enabled, Eimpora may use cookies or similar technologies to
            remember non-essential preferences and improve the user experience.
            Examples may include language preferences, interface settings,
            dashboard configuration, and other user-selected options.
          </p>

          <p>
            These technologies are used to provide requested functionality and are
            not intended to create advertising profiles about individual users.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            4. Analytics & Performance Measurement
          </h2>

          <p>
            Eimpora may use privacy-conscious analytics or performance measurement
            technologies to understand how the website and Services perform. This
            information may include aggregated usage statistics, browser type,
            device information, approximate geographic information, page or feature
            usage, error information, and performance metrics.
          </p>

          <p>
            Where analytics technologies are used, Eimpora seeks to configure them
            in a manner appropriate to the applicable privacy requirements and the
            purpose for which the information is collected.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            5. Zero Third-Party Advertising Trackers
          </h2>

          <p>
            Eimpora does not use third-party advertising tracking pixels,
            advertising cookies, behavioral advertising scripts, or monetized
            cross-site user profiling within the enterprise platform.
          </p>

          <p>
            Customer or employee information processed through Eimpora's enterprise
            Services is not sold to advertising networks for behavioral advertising
            purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            6. Enterprise Authentication & Security Technologies
          </h2>

          <p>
            Enterprise customers may configure identity and authentication
            integrations such as SAML 2.0, OpenID Connect (OIDC), single sign-on
            (SSO), and multi-factor authentication.
          </p>

          <p>
            Authentication providers may place or process their own cookies or
            tokens when users authenticate through their systems. The handling of
            those technologies is governed by the applicable provider's privacy
            policy and terms in addition to Eimpora's policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            7. Security and Fraud Prevention
          </h2>

          <p>
            Eimpora may use cookies, device identifiers, session information, and
            related technical signals to detect suspicious activity, protect
            accounts, investigate security incidents, prevent abuse, and maintain
            the integrity of the platform.
          </p>

          <p>
            These technologies may operate automatically and may be necessary for
            the secure operation of the Services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            8. Cookie Duration
          </h2>

          <p>
            Cookies may be either session cookies or persistent cookies. Session
            cookies generally expire when the browser session ends, while persistent
            cookies remain for a defined period or until deleted by the user.
          </p>

          <p>
            The duration of individual cookies may vary depending on their purpose,
            security requirements, application configuration, and applicable legal
            requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            9. Cookie Consent & Your Choices
          </h2>

          <p>
            Where applicable law requires consent for non-essential cookies or
            tracking technologies, Eimpora will provide an appropriate consent
            mechanism and allow users to manage their available preferences.
          </p>

          <p>
            Strictly necessary cookies may continue to operate because they are
            required to provide requested services, maintain authentication, or
            protect platform security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            10. Browser Controls
          </h2>

          <p>
            Most modern browsers allow users to block, delete, or restrict cookies
            through their browser settings. Users may also configure their browsers
            to notify them when cookies are being placed on their devices.
          </p>

          <p>
            Blocking essential cookies may affect authentication, security,
            navigation, and other core Eimpora functionality.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            11. Third-Party Services
          </h2>

          <p>
            Eimpora may use trusted third-party infrastructure, authentication,
            security, monitoring, hosting, communications, or support providers to
            operate the Services.
          </p>

          <p>
            Such providers may process limited technical information or use
            necessary technologies in connection with the services they provide to
            Eimpora. Third-party technologies are subject to applicable contractual,
            security, and privacy requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            12. Enterprise Customer Environments
          </h2>

          <p>
            Eimpora enterprise customers may configure certain authentication,
            analytics, integrations, or application features within their
            organization. Cookies and tracking technologies used within a customer's
            configured environment may therefore differ depending on the services
            enabled by that customer.
          </p>

          <p>
            Enterprise customers are responsible for configuring their Eimpora
            environment in accordance with their internal policies and applicable
            privacy and employment laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            13. Do Not Track Signals
          </h2>

          <p>
            Some browsers provide a "Do Not Track" or similar browser signal.
            Because there is currently no universally accepted technical standard
            for interpreting these signals across all browsers and services,
            Eimpora may not respond to every such signal in the same manner.
          </p>

          <p>
            Where required by applicable law, Eimpora will provide controls and
            mechanisms required for applicable tracking preferences.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            14. Changes to This Cookie Policy
          </h2>

          <p>
            Eimpora may update this Cookie & Tracking Policy periodically to
            reflect changes in technology, platform functionality, legal
            requirements, or our privacy practices.
          </p>

          <p>
            When material changes are made, Eimpora will update the effective date
            shown at the top of this policy and provide additional notice where
            required by applicable law.
          </p>
        </section>

        <section className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="font-display text-xl font-bold text-white">
            15. Contact Us
          </h2>

          <p>
            If you have questions about Eimpora's use of cookies, tracking
            technologies, privacy practices, or your available choices, please
            contact Eimpora through the official contact information provided on
            our website or through your organization's designated Eimpora
            administrator.
          </p>

          <p className="text-slate-400">
            <span className="text-white font-medium">
              Eimpora Software Technologies Inc.
            </span>
            <br />
            Privacy & Data Protection Team
          </p>
        </section>


      </div>
    </div>
  );
}

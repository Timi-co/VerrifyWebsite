import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="px-[80px] py-[40px] ">
      <div className="testimonial_card max-w-[1440px] mx-auto px-[20px]">
        <div>
          <h1 className="text-[40px] font-bold w-full text-header-txt ">
            Privacy Policy
          </h1>
          <p className="text-gray-txt">
            This Privacy Policy describes how Verrify (referred to as “we,”
            “us,” or “our”) collects, uses, stores, protects, discloses, and
            manages your personal information when you use the Services. This
            Policy is incorporated into and forms part of the Terms of Service.
          </p>

          <div className="text-gray-txt flex gap-[40px] mt-[30px]">
            <p className="font-bold">Last Updated</p>
            <p>3rd October, 2025.</p>
          </div>
          <div className="flex flex-col gap-[20px] mt-[30px]">
            {/* 1 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                1. What Information We Collect{" "}
              </h3>
              <p className="text-gray-txt">
                We collect information you provide directly and information
                automatically through your use of the Services.{" "}
              </p>
              <ul className="pl-[20px] text-gray-txt leading-[30px]">
                <li>
                  {" "}
                  1.1 Information You Provide
                  <ul className="list-disc pl-6">
                    <li>
                      Account information: name, email address, phone number,
                      username, password, etc.
                    </li>
                    <li>
                      Profile data: optional profile photo, address,
                      preferences, other profile fields.
                    </li>
                    <li>
                      User Content: messages, posts, feedback, uploads, forms,
                      and other content you submit.
                    </li>
                    <li>
                      Transaction data: payment information, billing address,
                      purchase history, invoices.
                    </li>
                  </ul>
                </li>
                <li>
                  1.2 Information Collected Automatically
                  <ul className="list-disc pl-6">
                    <li>
                      Log data: your IP address, browser type and version,
                      operating system, referral URLs, pages visited,
                      timestamps.
                    </li>
                    <li>
                      Profile data: optional profile photo, address,
                      preferences, other profile fields.
                    </li>
                    <li>
                      Cookies and tracking technologies: we use cookies, web
                      beacons, local storage, and similar technologies to
                      recognize you, store preferences, track activity, and
                      provide analytics.
                    </li>
                    <li>
                      Usage analytics: how you use the Services, features used,
                      time spent, error logs, performance metrics.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* 2 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                2. How We Use Your Information{" "}
              </h3>
              <p className="text-gray-txt">
                We use your information for the following purposes (and any
                other purpose to which you consent):{" "}
              </p>

              <ul className="list-disc pl-6 text-gray-txt leading-[30px]">
                <li>to provide, maintain, and improve the Services;</li>
                <li>
                  to process transactions and send related information (e.g.
                  confirmations, invoices);
                </li>
                <li>
                  to communicate with you (e.g. customer support, updates,
                  marketing) where permitted;
                </li>
                <li>
                  to personalize your experience and deliver customized content
                  and advertisements;
                </li>
                <li>to monitor and analyze usage and trends;</li>
                <li>
                  to detect, prevent, and address fraud, security, and abuse;
                </li>
                <li>
                  to comply with legal obligations and exercise or defend legal
                  rights;
                </li>
                <li>to enforce our Terms and policies.</li>
              </ul>
            </div>
            {/* 3 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                3. Legal Basis for Processing (if applicable){" "}
              </h3>
              <p className="text-gray-txt">
                (If your jurisdiction requires a lawful basis)
              </p>
              <p className="text-gray-txt">
                We rely on one or more of the following legal bases:
              </p>

              <ul className="list-disc pl-6 text-gray-txt leading-[30px]">
                <li>your consent;</li>
                <li>performance of a contract;</li>
                <li>compliance with legal obligation;</li>
                <li>
                  legitimate interests (where not overridden by your rights).
                </li>
              </ul>
            </div>
            {/* 4 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                4. Sharing & Disclosure{" "}
              </h3>
              <p className="text-gray-txt">
                We may share your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-txt leading-[30px]">
                <li>
                  with service providers, contractors, or vendors that perform
                  functions on our behalf (e.g. payment processors, analytics,
                  hosting);{" "}
                </li>
                <li>with affiliates or subsidiaries; </li>
                <li>
                  when required by law, regulation, legal process, or government
                  request;
                </li>
                <li>
                  to protect rights, safety, or property (ours or others);
                </li>
                <li>
                  in connection with a merger, acquisition, reorganization, or
                  sale of assets (with notice where required);
                </li>
                <li>with your consent or at your direction;</li>
                <li>
                  with third parties to deliver advertisements (aggregate or
                  anonymized where possible).
                </li>
              </ul>
              <p>
                We may share aggregate, de-identified, or anonymized data that
                does not identify you directly.{" "}
              </p>
            </div>
            {/* 5 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                5. Cookies, Tracking & Third-Party Technologies{" "}
              </h3>
              <ul className="pl-[20px] text-gray-txt leading-[30px]">
                <li>
                  {" "}
                  5.1 We use cookies, web beacons, and similar technologies to
                  enhance and personalize your experience, store preferences,
                  and analyze usage.
                </li>
                <li>
                  5.2 You may disable or refuse cookies (via your browser
                  settings), but some features may not function properly as a
                  result.
                </li>
                <li>
                  5.3 We may also allow third-party services (e.g. advertisers,
                  analytics providers) to set cookies or tracking technologies
                  via the Services. These parties’ use of tracking technologies
                  is subject to their own privacy policies.
                </li>
              </ul>
            </div>
            {/* 6 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                6. Cross-Border Data Transfers & Storage{" "}
              </h3>
              <p className="text-gray-txt">
                Your information may be processed, stored, and accessed in
                jurisdictions other than your own, including where our servers
                or service providers are located. By using the Services, you
                consent to such transfers, subject to applicable laws and
                appropriate safeguards.
              </p>
            </div>
            {/* 7 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                7. Data Retention{" "}
              </h3>
              <p className="text-gray-txt">
                We retain personal information for as long as necessary to
                fulfill the purposes for which it was collected, comply with
                legal obligations, resolve disputes, enforce agreements, or as
                otherwise permitted by law. We periodically assess whether to
                delete or anonymize data when no longer needed.
              </p>
            </div>
            {/* 8 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">8. Security </h3>
              <p className="text-gray-txt">
                We use reasonable administrative, technical, and physical
                safeguards to protect your personal information from loss,
                unauthorized access, disclosure, alteration, or destruction.
                However, no security measure is perfect or impenetrable, and we
                cannot guarantee absolute security.
              </p>
            </div>
            {/* 9 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                9. Your Rights & Choices{" "}
              </h3>
              <p className="text-gray-txt">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="pl-[20px] list-disc text-gray-txt leading-[30px]">
                <li> access, correct, or update your personal information;</li>
                <li>request deletion or restriction of processing;</li>
                <li>object to processing or withdraw consent; </li>
                <li>
                  receive a copy of your data in a portable format (data
                  portability);{" "}
                </li>
                <li>opt out of marketing communications;</li>
                <li>lodge complaints with data protection authorities. </li>
              </ul>
              <p className="text-gray-txt">
                To exercise these rights, contact us as provided below. We may
                verify your identity before granting requests.{" "}
              </p>
            </div>
            {/* 10 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                10. Children’s Privacy{" "}
              </h3>
              <p className="text-gray-txt">
                The Services are not intended for users under the age of
                eighteen (18). We do not knowingly collect personal information
                from minors. If you believe we have inadvertently collected such
                information, contact us and we will delete it.
              </p>
            </div>
            {/* 11 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                11. Changes to the Privacy Policy{" "}
              </h3>
              <p className="text-gray-txt">
                We reserve the right to modify this Privacy Policy at any time.
                We will post changes to the Services with a revised “Last
                updated” date. For material changes affecting data use, we will
                provide notice (e.g. via email or prominent notice) where
                required by law. Your continued use after changes constitutes
                acceptance.
              </p>
            </div>
            {/* 12 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                12. Contact Us{" "}
              </h3>
              <p className="text-gray-txt">
                If you have questions or complaints regarding this Privacy
                Policy or our practices, you may contact us at:
              </p>
              <p className="text-gray-txt font-bold">luxnetltd@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

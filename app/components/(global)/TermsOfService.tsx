import React from "react";

const TermsOfService = () => {
  return (
    <div className="px-[80px] py-[40px] ">
      <div className="testimonial_card max-w-[1440px] mx-auto px-[20px]">
        <div>
          <h1 className="text-[40px] font-bold w-full text-header-txt ">
            Terms of Service
          </h1>
          <p className="text-gray-txt">
            These Terms of Service (“Terms”) govern your access to and use of
            the Verrify website, mobile application, and any related services
            (collectively, the “Services”) provided by Verrify (referred to as
            “we,” “us,” or “our”). By using or accessing the Services, you agree
            to be bound by these Terms. If you do not agree, do not use the
            Services
          </p>

          <div className="text-gray-txt flex gap-[40px] mt-[30px]">
            <p className="font-bold">Last Updated</p>
            <p>3rd October, 2025.</p>
          </div>

          <div className="flex flex-col gap-[20px] mt-[30px]">
            {/* 1 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                1. Eligibility & Account Registration{" "}
              </h3>
              <ul className="pl-[20px] text-gray-txt leading-[30px]">
                <li>
                  {" "}
                  1.1 You represent and warrant that you are at least eighteen
                  (18) years old and have the legal capacity to enter into
                  binding agreements.
                </li>
                <li>
                  1.2 To access certain features of the Services, you must
                  register for an account. You agree to provide current,
                  complete, and accurate information, and to update that
                  information as needed.
                </li>
                <li>
                  1.3 You are responsible for maintaining the confidentiality of
                  your login credentials and for all activity under your
                  account. You must notify us immediately of any unauthorized
                  use or breach of security.
                </li>
              </ul>
            </div>
            {/* 2 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                2. Use of the Services & Restrictions{" "}
              </h3>
              <ul className="pl-[20px] text-gray-txt leading-[30px]">
                <li>
                  {" "}
                  2.1 You agree to use the Services only for lawful purposes and
                  in compliance with these Terms and all applicable laws.
                </li>
                <li>
                  2.2 You shall not:
                  <ul className="list-disc pl-6">
                    <li>
                      reverse engineer, decompile, or otherwise attempt to
                      derive source code or underlying structure of the
                      Services;{" "}
                    </li>
                    <li>
                      interfere with or disrupt the integrity or performance of
                      the Services or third party data;
                    </li>
                    <li>
                      use automated means (bots, scrapers, spiders) to access or
                      collect data from the Services unless expressly permitted;
                    </li>
                    <li>
                      post, upload, or transmit content that is unlawful,
                      defamatory, obscene, infringing, or otherwise
                      objectionable;
                    </li>
                    <li>
                      impersonate another person or misrepresent your
                      affiliation;{" "}
                    </li>
                    <li>
                      use the Services in any way that could damage, disable,
                      overburden, or impair them.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* 3 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                3. User-Generated Content & License
              </h3>
              <ul className="pl-[20px] text-gray-txt leading-[30px]">
                <li>
                  {" "}
                  3.1 “User Content” means any content, data, feedback,
                  submissions, comments, or materials you upload, post, or
                  transmit through the Services.
                </li>
                <li>
                  3.2 By submitting User Content, you grant Verrify a worldwide,
                  non-exclusive, royalty-free, perpetual, irrevocable,
                  sublicensable license to use, reproduce, distribute, modify,
                  translate, adapt, publicly display, and otherwise exploit such
                  content in connection with providing the Services.
                </li>
                <li>
                  3.3 You represent and warrant that you own or have the
                  necessary rights to grant this license, and that the
                  submission of your User Content does not violate any
                  third-party rights.
                </li>
                <li>
                  3.4 We reserve the right, in our sole discretion, to remove,
                  refuse, or edit User Content for any reason, without notice.
                </li>
              </ul>
            </div>
            {/* 4 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                4. Payments, Fees & Refunds
              </h3>
              <ul className="pl-[20px] text-gray-txt leading-[30px]">
                <li>
                  {" "}
                  4.1 If you purchase any paid features, subscriptions, or
                  services, you agree to pay all fees and charges specified.
                </li>
                <li>
                  4.2 Fees are non-refundable except as mandated by applicable
                  law or as expressly stated otherwise.
                </li>
                <li>
                  4.3 We may change fees or introduce new fees from time to
                  time, with notice where required by law.
                </li>
              </ul>
            </div>
            {/* 5 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                5. Disclaimers & No Warranty
              </h3>
              <ul className="pl-[20px] text-gray-txt leading-[30px]">
                <li>
                  {" "}
                  5.1 The Services are provided “as is” and “as available,”
                  without warranties of any kind, express or implied.
                </li>
                <li>
                  5.2 We make no warranty that the Services will meet your
                  requirements, be uninterrupted, error-free, or secure.
                </li>
                <li>
                  5.3 We disclaim all warranties of merchantability, fitness for
                  a particular purpose, non infringement, and any implied
                  warranties.
                </li>
              </ul>
            </div>
            {/* 6 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                6. Limitation of Liability
              </h3>
              <ul className="pl-[20px] text-gray-txt leading-[30px]">
                <li>
                  {" "}
                  6.1 To the maximum extent permitted by applicable law, in no
                  event shall Verrify, its affiliates, officers, directors,
                  employees, agents, or licensors be liable for any indirect,
                  incidental, special, consequential, or exemplary damages,
                  including loss of profits, data, or goodwill, arising from or
                  related to your use of (or inability to use) the Services.
                </li>
                <li>
                  6.2 In no event shall our total aggregate liability exceed the
                  amount you have paid to Verrify in the preceding 12 months (if
                  any), or a nominal sum (e.g. one hundred [100] currency units)
                  if you have made no payments.
                </li>
              </ul>
            </div>
            {/* 7 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                7. Indemnification
              </h3>
              <ul className="pl-[20px] text-gray-txt leading-[30px]">
                <li>
                  {" "}
                  You agree to defend, indemnify, and hold harmless Verrify and
                  its affiliates, officers, directors, employees, agents, and
                  licensors from and against any claims, liabilities, damages,
                  losses, costs, or expenses (including reasonable attorneys’
                  fees) arising out of or relating to
                </li>
                <li>
                  <ul>
                    <li>(i) your use of the Services</li>
                    <li>(ii) your breach of these Terms</li>
                    <li>
                      (iii) your violation of any law or third-party rights, or{" "}
                    </li>
                    <li>(iv) your User Content.</li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* 8 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                8. Termination & Suspension
              </h3>
              <ul className="pl-[20px] text-gray-txt leading-[30px]">
                <li>
                  {" "}
                  8.1 We may suspend or terminate your access (temporarily or
                  permanently) to all or part of the Services at any time and
                  for any reason, with or without notice, including for
                  violation of these Terms.
                </li>
                <li>
                  8.2 Upon termination, your right to use the Services
                  immediately ceases. We may delete or withhold your User
                  Content.
                </li>
                <li>
                  8.3 The following provisions survive termination: Sections 3
                  (User Content & License), 5 (Disclaimers), 6 (Limitation of
                  Liability), 7 (Indemnification), 9 (Governing Law & Dispute),
                  10 (Miscellaneous).
                </li>
              </ul>
            </div>
            {/* 9 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                9. Governing Law & Dispute Resolution
              </h3>
              <ul className="pl-[20px] text-gray-txt leading-[30px]">
                <li>
                  {" "}
                  9.1 These Terms shall be governed by and construed under the
                  laws of [Jurisdiction: e.g. Nigeria / state/province as
                  applicable], without regard to conflict of laws principles.
                </li>
                <li>
                  9.2 Any disputes arising out of or relating to these Terms or
                  the Services shall be resolved exclusively in the courts of
                  Port Harcourt, Nigeria and you hereby submit to the
                  jurisdiction of those courts.
                </li>
                <li>
                  9.3 If any provision is held invalid or unenforceable, that
                  provision will be struck, and the remainder shall continue in
                  full force and effect.
                </li>
              </ul>
            </div>
            {/* 10 */}
            <div>
              <h3 className="text-white font-bold text-[20px]">
                10. Miscellaneous
              </h3>
              <ul className="pl-[20px] text-gray-txt leading-[30px]">
                <li>
                  {" "}
                  10.1 These Terms, together with the Privacy Policy, constitute
                  the entire agreement between you and Verrify relating to your
                  use of the Services, superseding all prior agreements.
                </li>
                <li>
                  10.2 We may amend these Terms from time to time. Amended Terms
                  will be effective as of the “Last updated” date, and your
                  continued use of the Services after that constitutes
                  acceptance.
                </li>
                <li>
                  10.3 You may not assign or transfer your rights or obligations
                  under these Terms without our prior written consent.
                </li>
                <li>
                  10.4 We may assign our rights and obligations under these
                  Terms at any time without notice.
                </li>
                <li>
                  10.5 Failure to enforce any right or provision of these Terms
                  shall not constitute a waiver of such right.
                </li>
                <li>
                  10.6 Headings are for convenience only and do not affect
                  interpretation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

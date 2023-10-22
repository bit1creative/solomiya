import { SectionTitle } from 'Components/common/SectionTitle';
import { CookiesPoints } from 'Components/pages/PrivacyPolicy/CookiesPoints';
import { PrivacyAndPolicyPoints } from 'Components/pages/PrivacyPolicy/PrivacyAndPolicyPoints';
import { PrivacyPolicyDescription } from 'Components/pages/PrivacyPolicy/PrivacyPolicyDescription';

export const PrivacyPolicyPage = () => (
  <div className="p-4 md:px-8 lg:p-8 lg:px-12 xl:p-12 xl:px-20">
    <SectionTitle title="Privacy Policy" />
    <PrivacyPolicyDescription />
    <PrivacyAndPolicyPoints />
    <div className="mt-4 md:mt-8 lg:mt-12 xl:mt-20">
      <SectionTitle title="Cookies" />
    </div>
    <CookiesPoints />
  </div>
);

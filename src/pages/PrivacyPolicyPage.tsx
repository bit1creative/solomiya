import { SectionTitle } from 'Components/common/SectionTitle';
import { PrivacyAndPolicyPoints } from 'Components/pages/PrivacyPolicy/PrivacyAndPolicyPoints';
import { PrivacyPolicyDescription } from 'Components/pages/PrivacyPolicy/PrivacyPolicyDescription';

export const PrivacyPolicyPage = () => (
  <div className="p-4 md:px-8 lg:p-8 lg:px-12 xl:p-12 xl:px-20">
    <SectionTitle title="Privacy Policy" />
    <PrivacyPolicyDescription />
    <PrivacyAndPolicyPoints />
  </div>
);

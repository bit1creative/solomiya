import { SectionTitle } from 'Src/components/common/SectionTitle';

import { LegalsSection } from 'Components/pages/Legals/LegalsSection';

export const LegalsPage = () => (
  <div className="p-4 md:px-8 lg:p-8 lg:px-12 xl:p-12 xl:px-20">
    <SectionTitle title="Imprint" />
    <LegalsSection />
  </div>
);

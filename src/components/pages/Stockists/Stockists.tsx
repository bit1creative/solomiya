import { SectionTitle } from 'Src/components/common/SectionTitle';

import { StockistList } from './StockistList';

export const Stockists = () => (
  <section className="flex min-h-[calc(100dvh-40px)] flex-col items-center gap-2 p-4">
    <SectionTitle title={'Stockists'} />
    <StockistList />
  </section>
);

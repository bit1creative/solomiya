import * as Collapsible from '@radix-ui/react-collapsible';

import { stockistsData } from './stockists.data';

interface Props {
  country: keyof typeof stockistsData;
}

export const StockistCollapsible = ({ country }: Props) => {
  const stockists = stockistsData[country];

  return (
    <Collapsible.Root>
      <Collapsible.Trigger className="w-full">
        <div className="w-full text-center font-yuni-black text-5xl">{country}</div>
      </Collapsible.Trigger>
      <Collapsible.Content className="overflow-hidden data-[state=closed]:animate-[collapsible-close_300ms_ease-in] data-[state=open]:animate-[collapsible-open_300ms_ease-out]">
        {stockists.map((place) => (
          <div key={place} className="text-center">
            {place}
          </div>
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

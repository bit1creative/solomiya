import { StockistCollapsible } from './StockistCollapsible';
import { stockistsData } from './stockists.data';

export const StockistList = () => (
  <>
    {Object.keys(stockistsData).map((country) => (
      <StockistCollapsible key={country} country={country as keyof typeof stockistsData} />
    ))}
  </>
);

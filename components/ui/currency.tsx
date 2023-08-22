

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

interface CurrencyProps {
  value?: string | number;
}

const Currency:React.FC<CurrencyProps> = ({
  value,
}) => {
  return (
  <div className="font-semibold">
    {formatter.format(Number(value))}
  </div>
  );
}
export default Currency;
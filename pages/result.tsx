import { useRouter } from 'next/router';
import { generateSkuStrings } from '../lib/sku';
import { useEffect, useState } from 'react';

export default function Result() {
  const { query } = useRouter();
  const [skuStrings, setSkuStrings] = useState<string[]>([]);

  useEffect(() => {
    if (query.skus) {
      const list = (query.skus as string).split('\n').map(s => s.trim()).filter(Boolean);
      setSkuStrings(generateSkuStrings(list));
    }
  }, [query.skus]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => alert('Copied!'));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Processed SKUs:</h2>
      {skuStrings.map((sku, i) => (
        <div key={i}>
          <p id={`sku_${i}`}>{sku}</p>
          <button onClick={() => copyToClipboard(sku)}>Copy</button>
        </div>
      ))}
      <a href="/">Process More SKUs</a>
    </div>
  );
}

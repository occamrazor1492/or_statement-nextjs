import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [skus, setSkus] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ skus });
    router.push('/result?' + params.toString());
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Enter SKUs</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={skus}
          onChange={(e) => setSkus(e.target.value)}
          rows={10}
          cols={50}
          placeholder="Enter each SKU on a new line"
        />
        <br />
        <button type="submit">Process SKUs</button>
      </form>
    </div>
  );
}

'use client';

import React from 'react';
import ProductDetail from '@/components/ProductDetails';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  
  return (
    <div>
      <ProductDetail productId={params.productId} />
    </div>
  );
}

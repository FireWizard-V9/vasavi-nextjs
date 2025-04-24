// app/collection/[collectionId]/page.js
import React from 'react';
import CollectionPage from '@/components/CollectionPage';

export default function Page({ params }) {
  return (
    <CollectionPage collectionId={params.collectionId} />
  );
}

import ClientSelectedProduct from '../page';

export default function DynamicLocationPage({ params }) {
  return <ClientSelectedProduct slug={params.slug} />;
} 
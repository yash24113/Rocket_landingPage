import ClientSelectedProduct from '../../page';

export default function DynamicProductPage({ params }) {
  return <ClientSelectedProduct slug={params.slug} productSlug={params.product} />;
} 
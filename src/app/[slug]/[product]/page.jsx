import ClientSelectedProduct from '../../page';
import { metadata as defaultMetadata } from '../../metadata';

export async function generateMetadata({ params }) {
  const { slug, product } = params;

  try {
    // Fetch all required data in parallel
    const [seosRes, productsRes, locationsRes] = await Promise.all([
      fetch('https://age-landing-backend.egport.com/api/seos', { cache: 'no-store' }),
      fetch('https://age-landing-backend.egport.com/api/products', { cache: 'no-store' }),
      fetch('https://age-landing-backend.egport.com/api/locations', { cache: 'no-store' }),
    ]);
    const [seos, products, locations] = await Promise.all([
      seosRes.json(),
      productsRes.json(),
      locationsRes.json(),
    ]);

    // Find product and location by slug
    const productObj = Array.isArray(products) ? products.find(p => p.slug === product) : null;
    const locationObj = Array.isArray(locations) ? locations.find(l => l.slug === slug) : null;

    if (productObj && locationObj) {
      // Find matching SEO entry
      const seo = Array.isArray(seos)
        ? seos.find(s => s.productId === productObj._id && s.locationId === locationObj._id)
        : null;
      if (seo) {
        // Map SEO API response to Next.js metadata shape
        return {
          title: seo.title || defaultMetadata.title,
          description: seo.description || defaultMetadata.description,
          keywords: seo.keywords || defaultMetadata.keywords,
          openGraph: seo.openGraph || defaultMetadata.openGraph,
          twitter: seo.twitter || defaultMetadata.twitter,
          robots: seo.robots || defaultMetadata.robots,
          icons: defaultMetadata.icons,
          verification: defaultMetadata.verification,
        };
      }
    }
  } catch (e) {
    // Ignore errors and fallback
  }
  // Fallback to default metadata
  return defaultMetadata;
}

export default function DynamicProductPage({ params }) {
  return <ClientSelectedProduct slug={params.slug} productSlug={params.product} />;
} 

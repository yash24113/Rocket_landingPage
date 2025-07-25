// app/[slug]/[product]/page.tsx

import ClientSelectedProduct from '../../page';
import { metadata as defaultMetadata } from '../../metadata';

export async function generateMetadata({ params }) {
  const { slug, product } = params;

  try {
    // Fetch data in parallel with no-store for freshness
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

    // Find matching product and location
    const productObj = Array.isArray(products) ? products.find(p => p.slug === product) : null;
    const locationObj = Array.isArray(locations) ? locations.find(l => l.slug === slug) : null;

    if (productObj && locationObj) {
      // Find matching SEO entry
      const seo = Array.isArray(seos)
        ? seos.find(s => s.productId === productObj._id && s.locationId === locationObj._id)
        : null;

      if (seo) {
        // Optional: Fire GA4 event on server side if you have SSR tracking, else handle on client
        if (slug === 'vatva' && product === 'denim') {
          try {
            await fetch('https://www.google-analytics.com/mp/collect', {
              method: 'POST',
              body: JSON.stringify({
                client_id: 'GA_MEASUREMENT_ID.client_id', // replace appropriately
                events: [
                  {
                    name: 'meta_tag_capture',
                    params: {
                      page_path: `/${slug}/${product}`,
                      meta_title: seo.title,
                      meta_description: seo.description,
                      meta_keywords: seo.keywords,
                    },
                  },
                ],
              }),
            });
          } catch (e) {
            console.error('GA4 tracking error', e);
          }
        }

        // Map SEO API to Next.js metadata
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
    console.error('Metadata fetch error', e);
    // fallback below
  }

  return defaultMetadata;
}

export default function DynamicProductPage({ params }) {
  return <ClientSelectedProduct slug={params.slug} productSlug={params.product} />;
}

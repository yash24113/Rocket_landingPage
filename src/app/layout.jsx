import '../styles/index.css';
import StickyIcons from '../components/common/StickyIcons';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Saree Manufacturers | Premium Quality Sarees in Surat',
  description: 'Amrita Global Enterprises - Leading saree manufacturers in Surat offering premium quality embroidered, designer, and traditional sarees with modern designs.',
  keywords: 'saree manufacturers, sarees in Surat, designer sarees, traditional sarees, embroidered sarees, Gujarat sarees',
  authors: [{ name: 'Amrita Global Enterprises' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Saree Manufacturers | Premium Quality Sarees in Surat',
    description: 'Leading saree manufacturers in Surat offering premium quality embroidered, designer, and traditional sarees.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saree Manufacturers | Premium Quality Sarees in Surat',
    description: 'Leading saree manufacturers in Surat offering premium quality embroidered, designer, and traditional sarees.',
  },
  icons: {
    icon: [
      { url: 'https://amritafashions.com/wp-content/uploads/amrita-fashions-company-logo-150x150.webp', sizes: '32x32' }
    ],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts Preconnect for better performance */}
        {/* Removed Google Fonts links for self-hosting */}
        
        <meta name="theme-color" content="#ffffff" />
        <meta name="format-detection" content="telephone=no" />
        <script src="/rocket-web.js" defer></script>
      </head>
      <body className="antialiased font-inter">
        {children}
        <StickyIcons />
      </body>
    </html>
  );
}
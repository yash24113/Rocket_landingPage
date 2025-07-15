import '../styles/index.css';
import { metadata } from './metadata';
import GoogleAnalyticsScript from '../../public/GoogleAnalyticsScript';
import MicrosoftClarityScript from '../../public/MicrosoftClarityScript';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Google Fonts Preconnect for better performance */}
        {/* Removed Google Fonts links for self-hosting */}
        
        <meta name="theme-color" content="#ffffff" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google-site-verification" content={process.env.google_site_verification} />

        <GoogleAnalyticsScript />
        <MicrosoftClarityScript />
      </head>
      <body className="antialiased font-inter">
        {children}
        <script src="/rocket-web.js" async></script>
      </body>
    </html>
  );
}
import '../styles/index.css';
import StickyIcons from '../components/common/StickyIcons';
import { metadata } from './metadata';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
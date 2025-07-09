import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: 'Saree Manufacturers | Premium Quality Sarees in Surat',
  description: 'Dhananjay Creations Private Limited - Leading saree manufacturers in Surat offering premium quality embroidered, designer, and traditional sarees with modern designs.',
  keywords: 'saree manufacturers, sarees in Surat, designer sarees, traditional sarees, embroidered sarees, Gujarat sarees',
  authors: [{ name: 'Dhananjay Creations Private Limited' }],
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
      { url: '/favicon.ico', type: 'image/x-icon' }
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="format-detection" content="telephone=no" />
<script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fyashsapp6073back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.5"></script>
</head>
      <body className="antialiased">
        {children}        
</body>
    </html>
  );
}
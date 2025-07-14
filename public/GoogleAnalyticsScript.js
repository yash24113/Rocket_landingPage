import Script from 'next/script';



export default function GoogleAnalyticsScript() {
  if (!`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`) return null; // Optional: avoid rendering if not set

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');  
          `,
        }}
      />
    </>
  );
}

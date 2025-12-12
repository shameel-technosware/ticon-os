import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TiCON GLOBAL - Transforming Ideas. Connecting Globally",
  description: "TiCON Global is a next-generation consulting and venture-building company that connects global investors with high-potential startups. We build, fund and scale visionary ideas into profitable, future-ready ventures — transforming entrepreneurs into TiCONs, the iconic tycoons of tomorrow.",
  keywords: "TiCON Global, Venture Consulting, Startup Investment, Venture Building, Business Consulting, Global Investors, Leadership Development, Startup Funding, Business Growth, Investment Bridge",
  authors: [{ name: "TiCON Global" }],
  robots: "index, follow",
  openGraph: {
    title: "TiCON Global — Transforming Ideas. Connecting Globally.",
    description: "We bridge global investors with high-potential ventures and scale innovative ideas into profitable, sustainable businesses.",
    type: "website",
    url: "https://ticonglobal.com/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/odometer-theme-default.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/fancybox.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/magnific-pupup.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

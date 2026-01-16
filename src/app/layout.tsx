import { ptSans } from "./ui/fonts/fonts.google";
import "./ui/styles/globals.css";
import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";
import Script from "next/script";
import type { Metadata } from "next";

const globalSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://brishmancl.com/#webpage",
  "url": "https://brishmancl.com",
  "name": "Brishman CL S.A.C",
  "isPartOf": {
    "@id": "https://brishmancl.com/#website"
  },
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://brishmancl.com/#organization",
      "name": "Brishman CL S.A.C",
      "legalName": "Brishman CL S.A.C",
      "url": "https://brishmancl.com",
      "logo": "https://brishmancl.com/logo.png",
      "sameAs": [
        "https://www.facebook.com/",
        "https://www.linkedin.com/"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://brishmancl.com/#business",
      "name": "Brishman CL S.A.C",
      "url": "https://brishmancl.com",
      "logo": "https://brishmancl.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lima",
        "addressCountry": "PE"
      },
      "areaServed": {
        "@type": "City",
        "name": "Lima"
      },
      "sameAs": [
        "https://www.facebook.com/",
        "https://www.linkedin.com/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://brishmancl.com/#website",
      "url": "https://brishmancl.com",
      "name": "Brishman CL S.A.C",
      "publisher": {
        "@id": "https://brishmancl.com/#organization"
      }
    }
  ]
};


export const metadata: Metadata = {
  title: {
    default: "Brishman CL S.A.C | Empresa TI de soluciones empresariales",
    template: "%s"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <body
        className={`${ptSans.className} antialiased bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 text-white`}
      >
        <Script
          id="schema-global"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalSchema),
          }}
        />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WKCPGXSB');
          `}
        </Script>
        {/* End Google Tag Manager */}


        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKCPGXSB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}



        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
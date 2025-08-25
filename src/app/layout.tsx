import { ptSans } from "./ui/fonts/fonts.google";
import "./ui/styles/globals.css";
import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";


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
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

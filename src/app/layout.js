import "./globals.scss";


import {Onest} from 'next/font/google'
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const onest = Onest({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',        // чтобы текст сразу показывался системным шрифтом
})

export const metadata = {
  title: "Lionshare Ventures",
  description: "Lionshare Ventures is Southeast Asia’s premier selective venture builder",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={onest.className}>
      <Header/>
      {children}
      <Footer />
    </body>
    </html>
  );
}

import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Auto-Rentals",
  description: "Explore the intricacies of your favorite vehicles with Auto-Rentals, your go-to car information repository.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

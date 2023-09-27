import './globals.css';
import { Footer, Header } from '@/components';

export const metadata = {
  title: 'sunnyside-agency-landing-page: Sunnyside landing page built using next.js, tailwind css',
  description: 'Frontend mentor project: Sunnyside landing page built using next.js, tailwind css',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden antialiased min-h-full min-w-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

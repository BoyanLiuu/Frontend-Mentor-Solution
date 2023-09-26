import './globals.css';
import Head from 'next/head';
import CoursesContainer from '@/components/CoursesContainer';
import { Footer, Header, Hero } from '@/components';


export const metadata = {
  title: 'Skilled elearning landing page',
  description:
    'Frontend mentor Skilled elearning landing page build using Next.js tailwind css',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='overflow-x-hidden antialiased '>
        <Header />
        <Hero />
        <CoursesContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}



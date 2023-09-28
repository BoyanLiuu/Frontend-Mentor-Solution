import { Header, Features, Gallery, Hero, TestimonialContainer } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="w-full relative">
        <Header />
        <picture>
          <source type="image/jpg" srcSet="/mobile/image-header.jpg" media="(max-width: 1439px)" />

          <source type="image/jpg" srcSet="/desktop/image-header.jpg" media="(min-width: 1440px)" />

          <Image
            alt="Hero cover"
            src="/mobile/image-header.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="-z-10"
          />
        </picture>
        <Hero />
      </div>
      <Features />
      <TestimonialContainer />
      <Gallery />
    </main>
  );
}

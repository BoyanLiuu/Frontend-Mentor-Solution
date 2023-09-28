import React from 'react'
import Feature from './Feature';

import Image from 'next/image';

const Features = () => {
  const featuresList = [
    {
      title: 'Transform your brand',
      content:
        'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
    },
    {
      title: 'Stand out to the right audience',
      content:
        'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
    },
    {
      title: 'Graphic Design',
      content:
        'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.',
    },
    {
      title: 'Photography',
      content:
        'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
    },
  ];
  return (
    <section className="w-full">
      <div className="w-full grid grid-cols-12">
        <Feature {...featuresList[0]} className="col-span-6" />
        <div className="relative col-span-6">
          <picture>
            <source type="image/jpg" srcSet="/mobile/image-transform.jpg" media="(max-width: 1439px)" />

            <source type="image/jpg" srcSet="/desktop/image-transform.jpg" media="(min-width: 1440px)" />

            <Image alt="Transform feature image" src="/mobile/image-transform.jpg" className="object-cover" fill />
          </picture>
        </div>

        <Feature {...featuresList[1]} className="col-span-6" />
        <div className="relative col-span-6">
          <picture>
            <source type="image/jpg" srcSet="/mobile/image-stand-out.jpg" media="(max-width: 1439px)" />

            <source type="image/jpg" srcSet="/desktop/image-stand-out.jpg" media="(min-width: 1440px)" />

            <Image alt="Stand out feature image" src="/mobile/image-stand-out.jpg" className="object-cover" fill />
          </picture>
        </div>

        <div className="relative col-span-6">
          <h2>{featuresList[2].title}</h2>
          <p>{featuresList[2].content}</p>
          <picture>
            <source type="image/jpg" srcSet="/mobile/image-graphic-design.jpg" media="(max-width: 1439px)" />

            <source type="image/jpg" srcSet="/desktop/image-graphic-design.jpg" media="(min-width: 1440px)" />

            <Image
              alt="Graphic design feature image"
              src="/mobile/image-graphic-design.jpg"
              className="object-cover"
              fill
            />
          </picture>
        </div>
        <div className="relative col-span-6">
          <h2>{featuresList[3].title}</h2>
          <p>{featuresList[3].content}</p>
          <picture>
            <source type="image/jpg" srcSet="/mobile/image-photography.jpg" media="(max-width: 1439px)" />

            <source type="image/jpg" srcSet="/desktop/image-photography.jpg" media="(min-width: 1440px)" />

            <Image alt="Photograph feature image" src="/mobile/image-photography.jpg" className="object-cover" fill />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Features
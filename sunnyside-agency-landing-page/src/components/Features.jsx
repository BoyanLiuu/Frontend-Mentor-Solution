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
        <Feature
          {...featuresList[0]}
          hoverColor="after:bg-yellow"
          className="order-2 tablet:order-1 col-span-12 tablet:col-span-6 "
        />
        <div className="order-1 tablet:order-2 relative col-span-12 tablet:col-span-6 min-h-[343px]">
          <picture>
            <source type="image/jpg" srcSet="/mobile/image-transform.jpg" media="(max-width: 1439px)" />

            <source type="image/jpg" srcSet="/desktop/image-transform.jpg" media="(min-width: 1440px)" />

            <Image alt="Transform feature image" src="/mobile/image-transform.jpg" className="object-cover" fill />
          </picture>
        </div>

        <Feature
          {...featuresList[1]}
          hoverColor="after:bg-soft-red"
          className="order-4 tablet:order-3 col-span-12 tablet:col-span-6"
        />
        <div className="order-3 tablet:order-4 relative col-span-12 tablet:col-span-6 min-h-[343px]">
          <picture>
            <source type="image/jpg" srcSet="/mobile/image-stand-out.jpg" media="(max-width: 1439px)" />

            <source type="image/jpg" srcSet="/desktop/image-stand-out.jpg" media="(min-width: 1440px)" />

            <Image alt="Stand out feature image" src="/mobile/image-stand-out.jpg" className="object-cover" fill />
          </picture>
        </div>

        <div className="order-5 text-center relative col-span-12 tablet:col-span-6 pt-[398px] pb-[60px]   text-dark-desaturated-cyan px-6 flex flex-col items-center">
          <h2 className="text-[28px] font-black mb-[27px]">{featuresList[2].title}</h2>
          <p className="text-base font-semibold tablet:max-w-[339px]">{featuresList[2].content}</p>
          <picture>
            <source type="image/jpg" srcSet="/mobile/image-graphic-design.jpg" media="(max-width: 1439px)" />

            <source type="image/jpg" srcSet="/desktop/image-graphic-design.jpg" media="(min-width: 1440px)" />

            <Image
              alt="Graphic design feature image"
              src="/mobile/image-graphic-design.jpg"
              className="object-cover -z-10"
              fill
            />
          </picture>
        </div>
        <div className="order-6 text-center relative col-span-12 tablet:col-span-6 pt-[398px] pb-[60px]  text-dark-blue px-6 flex flex-col items-center">
          <h2 className="text-[28px] font-black  mb-[27px]">{featuresList[3].title}</h2>
          <p className="text-base font-semibold tablet:max-w-[339px]">{featuresList[3].content}</p>
          <picture>
            <source type="image/jpg" srcSet="/mobile/image-photography.jpg" media="(max-width: 1439px)" />

            <source type="image/jpg" srcSet="/desktop/image-photography.jpg" media="(min-width: 1440px)" />

            <Image
              alt="Photograph feature image"
              src="/mobile/image-photography.jpg"
              className="object-cover -z-10"
              fill
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Features
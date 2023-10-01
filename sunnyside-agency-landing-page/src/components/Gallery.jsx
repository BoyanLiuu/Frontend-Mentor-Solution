import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  const galleryList = [
    {
      ariaLabel: 'milk bottles',
      phoneSrc: '/mobile/image-gallery-milkbottles.jpg',
      desktopSrc: '/desktop/image-gallery-milkbottles.jpg',
    },
    {
      ariaLabel: 'orange',
      phoneSrc: '/mobile/image-gallery-orange.jpg',
      desktopSrc: '/desktop/image-gallery-orange.jpg',
    },
    {
      ariaLabel: 'cone',
      phoneSrc: '/mobile/image-gallery-cone.jpg',
      desktopSrc: '/desktop/image-gallery-cone.jpg',
    },
    {
      ariaLabel: 'sugar cubes',
      phoneSrc: '/mobile/image-gallery-sugar-cubes.jpg',
      desktopSrc: '/desktop/image-gallery-sugar-cubes.jpg',
    },
  ];
  return (
    <section className="grid grid-cols-12">
      {galleryList.map(({ ariaLabel, phoneSrc, desktopSrc }) => (
        <div key={ariaLabel} className="relative h-fit col-span-6 tablet:col-span-3 aspect-square">
          <picture>
            <source type="image/jpg" srcSet={phoneSrc} media="(max-width: 1439px)" />

            <source type="image/jpg" srcSet={desktopSrc} media="(min-width: 1440px)" />

            <Image alt={ariaLabel} src={phoneSrc} className="object-cover" fill />
          </picture>
        </div>
      ))}
    </section>
  );
};

export default Gallery;

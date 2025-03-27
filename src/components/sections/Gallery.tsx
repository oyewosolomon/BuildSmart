import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, EffectFade } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

const GalleryComponent: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string>('');
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const images: string[] = [
    'https://pagedone.io/asset/uploads/1713943683.png',
    'https://pagedone.io/asset/uploads/1713943709.png',
    'https://pagedone.io/asset/uploads/1713943720.png',
    'https://pagedone.io/asset/uploads/1713943731.png'
  ];

  const openLightbox = (src: string): void => {
    setLightboxImage(src);
    setIsLightboxOpen(true);
  };

  const closeLightbox = (): void => {
    setIsLightboxOpen(false);
  };

  const handleLightboxClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
        <div className="mb-16">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal pb-2.5">
            Our Gallery
          </h2>
          <p className="w-full text-center text-gray-600 text-lg font-normal leading-8">
            Explore the essence of beauty in our gallery's intimate space.
          </p>
        </div>

        <div className="flex flex-col-reverse gap-8 mx-auto">
          <div className="slider-box flex flex-col xl:flex-row gap-8">
            <div className="box xl:w-[1062px] w-full gallery">
              <Swiper
                modules={[Thumbs, EffectFade]}
                effect="fade"
                thumbs={{ swiper: thumbsSwiper }}
                className="main-slide-carousel"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="block xl:w-[1062px] w-full mx-auto h-[627px] rounded-3xl">
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="gallery-image w-full h-full mx-auto rounded-3xl object-cover cursor-pointer"
                        onClick={() => openLightbox(image)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="xl:w-[126px] w-full">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={30}
                slidesPerView={4}
                watchSlidesProgress
                className="nav-for-slider"
                direction="horizontal"
                breakpoints={{
                  768: {
                    direction: 'vertical'
                  }
                }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index} className="thumbs-slide lg:!w-[126px] md:!h-[135px] w-full h-[110px]">
                    <img
                      src={image}
                      alt={`Gallery thumbnail ${index + 1}`}
                      className="gallery-image w-full cursor-pointer h-full rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {isLightboxOpen && (
          <div 
            className="fixed z-[999] top-0 left-0 w-screen h-screen overflow-hidden bg-black/80 flex items-center justify-center"
            onClick={handleLightboxClick}
          >
            <div className="relative">
              <span 
                className="absolute -top-12 -right-12 text-white text-5xl cursor-pointer"
                onClick={closeLightbox}
              >
                &times;
              </span>
              <img 
                src={lightboxImage} 
                alt="Lightbox" 
                className="max-w-full max-h-full object-contain" 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryComponent;
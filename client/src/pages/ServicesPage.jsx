import { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { services } from '../data/services';
import { SectionTitle, SwiperNavButtons } from "../styles/UI";


const ServicesPage = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(services[0].id);
  const selectedService = services.find((service) => service.id === selectedIndex);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="max-w-5xl mx-auto pt-15 md:pt-20 pb-10">
      <SectionTitle
        title={
          <>
            Explore Our <span className="text-primary font-black">Services</span>
          </>
        }
        subtitle='From personalized consultations to comprehensive care, discover how we’re here to support your needs every step of the way.'
      />

      {swiperReady && (
        <Swiper
          modules={[Navigation]}
          // spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>

              <div
                className={`relative cursor-pointer rounded-3xl p-4
                ${service.id === selectedIndex ? 'bg-primary/20' : 'bg-base-100'}
                `}
                onClick={() => setSelectedIndex(service.id)}
              >
                <h3 className='font-semibold text-center mb-2'>{service.title}</h3>
                <div className='mb-2 flex items-center justify-center'>
                  <div className='w-35 h-35 rounded-3xl overflow-hidden'>
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>

                <p className='text-xs text-base-content/60'>{service.description}</p>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      )}

      <SwiperNavButtons prevRef={prevRef} nextRef={nextRef} />

      <div className='mt-20 px-4 md:px-0'>
        <div className="w-full max-w-md mx-auto mb-5">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>

        {selectedService.details.split('\n\n').map((para, i) => (
          <div key={i} className='max-w-3xl mx-auto'>
            <p className="mt-2 text-base-content/80">{para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServicesPage;
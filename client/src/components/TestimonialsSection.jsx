import { useEffect, useRef, useState } from 'react';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../data/testimonials";
import { SectionTitle, SwiperNavButtons } from "./UI";

const TestimonialsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section id="testimonials" className="pt:15 md:pt-20 pb-10 px-5 bg-primary/10">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-primary text-center font-semibold mb-5">Testimonials</p>

        <SectionTitle
          title={
            <>
              See What Our <span className="text-primary font-black">Clients</span> Say About <span className="text-primary font-black">Us</span>
            </>
          }
          subtitle='Real stories of trust, care, and happy smiles.'
        />

        {swiperReady && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-3xl bg-base-100 px-4 pb-2 pt-8"
                >
                  <img
                    src="/quote.png"
                    className="absolute top-0 left-1 w-10 h-10 opacity-60" />

                  <div className="h-12">
                    <p className="text-xs">{testimonial.review}</p>
                  </div>

                  <div className="h-[2px] bg-base-content/20 my-4"></div>

                  <div className="flex items-center gap-2 ml-5">
                    <img
                      src={testimonial.photo}
                      className="h-8 w-8 rounded-full overflow-hidden object-cover border-3 border-primary"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-base-content/60 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <SwiperNavButtons prevRef={prevRef} nextRef={nextRef} />
      </div>
    </section>
  );
};
export default TestimonialsSection;
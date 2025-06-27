import MetricCard from "./MetricCard";

const HeroSection = () => {
  const metrics = [
    {}
  ];

  return (
    <main className="relative h-[calc(100vh-3.75rem)] md:h-[calc(100vh-5rem)] mt-15 md:mt-20">
      <div className="absolute w-full h-full opacity-60">
        <img
          src="/dental-coverPhoto.png"
          className="w-full h-full object-cover object-[80%_center]"
        />
      </div>

      <div className="absolute top-5 right-5 flex flex-col items-center -rotate-4">
        {/* Pin */}
        <div className="w-2 h-2 bg-base-content/80 rounded-full shadow-sm z-10"></div>

        {/* String */}
        <div className="w-px h-3 bg-base-content/80"></div>

        <div className="bg-base-100 border border-base-300 shadow-md rounded-md px-4 py-2 text-sm text-base-content/80 text-center">
          <p className="font-semibold text-primary">We’re Open</p>
          <p className="text-xs">Clinic Hours:</p>
          <p className="text-xs">9AM – 5PM</p>
        </div>
      </div>

      <div className="relative max-w-5xl h-full mx-auto z-10">
        <div className="absolute top-[10%] md:top-5 left-5 max-w-[180px] md:max-w-lg ">
          <h1 className="text-[32px] md:text-7xl leading-8 md:leading-16">
            Fast Track to a <span className="text-primary font-black">Beautiful</span>, Aligned <span className="text-primary font-black">Smile</span>.
          </h1>
        </div>

        <div className="absolute left-5 bottom-[30%] p-3 max-w-[180px] md:max-w-sm rounded-xl bg-base-100/50 shadow-lg backdrop-blur-xs">
          <p className="text-base-content/80 text-xs md:text-base">Experience compassionate dental care with the latest technology tailored to your comfort. From routine cleanings to advanced treatments, we make every visit stress-free and smile-worthy.</p>
        </div>

        <div className="absolute bottom-5 left-0">
          <MetricCard />
        </div>

      </div>

    </main>
  );
};
export default HeroSection;
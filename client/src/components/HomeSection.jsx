import MetricCard from "./MetricCard";

const HomeSection = () => {
  const metrics = [
    {}
  ];

  return (
    <main id="home" className="relative h-[calc(100vh-3.75rem)] md:h-[calc(100vh-5rem)] pt-15 md:pt-20 mb-15">
      <div className="absolute w-full h-full opacity-60">
        <img
          src="/dental-cover-photo.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">

        <div className="absolute top-5 right-5 flex flex-col items-center -rotate-4"
        >
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


        <div className="p-6 max-w-[250px] md:max-w-3xl leading-20">
          <h1 className="text-2xl sm:text-3xl md:text-[75px]">
            Fast Track to a <span className="text-primary font-black">Beautiful</span>,
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-[75px]">Aligned <span className="text-primary font-black">Smile</span>.</h1>
        </div>

        <div className="ml-5 md:ml-20 p-4 max-w-[180px] md:max-w-sm rounded-xl bg-base-100/50 shadow-lg backdrop-blur-xs">
          <p className="text-base-content/80 text-xs md:text-base">Experience compassionate dental care with the latest technology tailored to your comfort. From routine cleanings to advanced treatments, we make every visit stress-free and smile-worthy.</p>
        </div>

        <MetricCard />

      </div>

    </main>
  );
};
export default HomeSection;
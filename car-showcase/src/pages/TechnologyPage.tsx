const TechnologyPage = () => (
  <section className="flex-grow bg-white text-gray-800 py-12 px-4 md:px-8 h-screen">
    <div className="flex-row container mx-auto justify-items-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">เทคโนโลยีของฮอนด้า</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          สัมผัสประสบการณ์ขับขี่ที่เหนือกว่าด้วยเทคโนโลยีอันล้ำสมัยของ Honda
        </p>
      </div>
      <div className="flex justify-items-center flex-row flex-wrap w-1/2">
        <div className="relative w-full h-1/2 pb-[56.25%] overflow-hidden rounded-lg shadow-2xl">
        {/* คุณสามารถเปลี่ยนลิงก์วิดีโอ YouTube ที่นี่ได้เลย */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/aqEPpMOgkOs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      </div>

    </div>
  </section>
);

export default TechnologyPage;
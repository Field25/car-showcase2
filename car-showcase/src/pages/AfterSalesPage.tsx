const AfterSalesPage = () => (
  <section className="flex-grow bg-white text-gray-800 py-12 px-4 md:px-8 h-screen">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">บริการหลังการขาย</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          ความใส่ใจในทุกรายละเอียด เพื่อให้คุณอุ่นใจตลอดการเดินทาง
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <img src="https://www.honda.co.th/images/service/subpage/banner-dropandgo-sm.jpg" alt="นัดหมายเข้ารับบริการ" className="mx-auto h-24 mb-4" />
          <h3 className="text-xl font-bold mb-2">นัดหมายเข้ารับบริการ</h3>
          <p className="text-sm text-gray-600">
            สะดวกรวดเร็ว วางแผนการเข้าศูนย์บริการล่วงหน้าได้ง่ายๆ
          </p>
          <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
            <a href="https://www.honda.co.th/service/special-service/quick-service">นัดหมายออนไลน์</a>
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <img src="https://soodyodmotor.com/wp-content/uploads/2023/02/hondaparts3.jpg" alt="ค้นหาศูนย์บริการ" className="mx-auto h-24 mb-4" />
          <h3 className="text-xl font-bold mb-2">ค้นหาศูนย์บริการ</h3>
          <p className="text-sm text-gray-600">
            ค้นหาศูนย์บริการฮอนด้าใกล้บ้านคุณ พร้อมแผนที่และเบอร์โทรศัพท์
          </p>
          <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
            <a href='https://www.honda.co.th/dealer'>ค้นหาศูนย์</a>
          </button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <img src="https://vgrouphonda.com/wp-content/uploads/2021/09/Cover-%E0%B8%9A%E0%B8%97%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1-%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%A3%E0%B8%96%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B9%8C.jpg" alt="อะไหล่แท้และคุณภาพ" className="mx-auto h-24 mb-4" />
          <h3 className="text-xl font-bold mb-2">อะไหล่แท้และคุณภาพ</h3>
          <p className="text-sm text-gray-600">
            มั่นใจในอะไหล่แท้จากฮอนด้าเพื่อประสิทธิภาพสูงสุดของรถยนต์คุณ
          </p>
          <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
            <a href='https://www.hondanimitmai.com/honda-autoparts/'>ดูรายละเอียด</a>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default AfterSalesPage;
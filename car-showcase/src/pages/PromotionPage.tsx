const PromotionPage = () => (
  <section className="flex-grow bg-white text-gray-800 py-12 px-4 md:px-8 h-screen">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">โปรโมชั่นพิเศษ</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          ข้อเสนอสุดพิเศษสำหรับรถยนต์ Honda เพื่อคุณโดยเฉพาะ
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
          <img src="https://www.hondaleasing.co.th/upload/banner/banner-1755838224.jpg" alt="โปรโมชั่น Honda City" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold">แคมเปญ DOUBLE SMILE plus+</h3>
          <p className="text-sm mt-2 text-gray-600">
            ผ่อนเริ่มต้น 12,949 บาท/เดือน พร้อมบริการ Honda Exclusive Care และฟรี Home Charger ติดตั้ง
แลกรถเก่าเป็นคันใหม่ รับสิทธิ์พิเศษมูลค่า 100,000 บาท
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
          <img src="https://www.hondaleasing.co.th/upload/banner/banner-1753172929.jpg" alt="โปรโมชั่น Honda Civic" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold">แคมเปญ ฮอนด้า ซีวิค อี:เอชอีวี ใหม่</h3>
          <p className="text-sm mt-2 text-gray-600">
            ดอกเบี้ย 0%* (ดาวน์ 25% ผ่อน 12-48 เดือน)
ฟรี! ประกันภัย 1 ปี*
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
          <img src="https://www.hondaleasing.co.th/upload/banner/banner-1747996469.jpg" alt="โปรโมชั่น Honda HR-V" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold">แคมเปญ ฮอนด้า ซีอาร์-วี (CR-V)</h3>
          <p className="text-sm mt-2 text-gray-600">
            โปร Double Smile Plus+

ฮอนด้าช่วยผ่อน เดือนละ 8,300 บาท นาน 12 เดือน*

ฟรี Honda Exclusive Care*

ค่างวดปีแรก (งวดที่ 1-12) เริ่มต้นเดือนละ 6,423 บาท*

ค่างวดปกติ (งวดที่ 13-84) เริ่มต้นเดือนละ 14,723 บาท*
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default PromotionPage;
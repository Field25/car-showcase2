const newsItems = [
  {
    img: 'https://www.honda.co.th/uploads/articles/d1c92e8547864a1b29d919651349ba06.jpg',
    title: 'ฮอนด้า เผยไฮไลต์นวัตกรรมผลิตภัณฑ์และเทคโนโลยีแห่งการขับเคลื่อน ทั้งทางบก ทางน้ำ และทางอากาศ ที่สร้างสรรค์จากพลัง',
    date: '28 สิงหาคม 2568',
    description: 'โดยฮอนด้าเตรียมเผยข้อมูลเพิ่มเติมเกี่ยวกับการจัดแสดงในช่วงก่อนงานเริ่ม ทั้งรายละเอียดแนวคิดหลักของบูท และข้อมูลผลิตภัณฑ์บางรุ่นที่จะนำมาจัดแสดง รวมถึงรายละเอียดเกี่ยวกับการเข้าร่วมในส่วนของการจัดแสดงหลักซึ่งจัดโดยสมาคมผู้ผลิตยานยนต์แห่งประเทศญี่ปุ่น (JAMA)'
  },
  {
    img: 'https://www.honda.co.th/uploads/articles/e965b80fcf12e24fe57e4c6973973993.jpg',
    title: 'อัปเลเวลความสปอร์ตกับรถฮอนด้ารุ่นฮิต ในงาน Bangkok Auto Salon 2025 นำโดย HR-V e:HEV แต่ง MUGEN รอบคัน',
    date: '27 สิงหาคม 2568',
    description: 'เสริมสปิริตความสปอร์ตตามแบบฉบับฮอนด้า ในงาน Bangkok Auto Salon 2025 บริษัท ฮอนด้า ออโตโมบิล (ประเทศไทย) จำกัด อัปลุครถยนต์รุ่นฮิต นำโดย HR-V e:HEV กับชุดแต่ง MUGEN รอบคัน หลอมรวมจิตวิญญาณความแรงแห่งญี่ปุ่นไว้ในรถฮอนด้า'
  },
  {
    img: 'https://www.honda.co.th/uploads/articles/043682da7156bd3bf7b077107c55e6bd.jpg',
    title: 'ฮอนด้าชวนลูกค้า e:N1 ร่วมทริปสุดเอ็กซ์คลูซีฟ “Honda e:N1 Exclusive Trip” ตอบแทนความเชื่อมั่น',
    date: '25 สิงหาคม 2568',
    description: 'พร้อมให้ลูกค้าได้สัมผัสประสบการณ์ใหม่อย่างเหนือระดับ กับบรรยากาศการพักผ่อนระดับพรีเมียม ณ โรงแรมเมสัน (MASON) พัทยา พูลวิลล่าสุดหรูสไตล์ Ultra-Modern Luxury ริมหาดนาจอมเทียน พร้อมพูดคุยแลกเปลี่ยนเพื่อเปิดมุมมองใหม่ '
  }
];

const NewsPage = () => (
  <section className="flex-grow bg-gray-100 text-gray-800 py-12 px-4 md:px-8 h-screen">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">ข่าวสารและกิจกรรม</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          ติดตามข่าวสารล่าสุดและกิจกรรมที่น่าสนใจจากฮอนด้า
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NewsPage;

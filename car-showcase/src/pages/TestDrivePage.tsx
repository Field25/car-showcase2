const TestDrivePage = () => (
  <section className="flex-grow bg-gray-100 text-gray-800 py-12 px-4 md:px-8 h-screen">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">จองรถทดลองขับ</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          สัมผัสประสบการณ์การขับขี่รถยนต์ฮอนด้าด้วยตัวคุณเอง
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">กรุณากรอกข้อมูลเพื่อทำการนัดหมาย</h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">ชื่อ-นามสกุล</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">เบอร์โทรศัพท์</label>
              <input type="tel" id="phone" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label htmlFor="car-model" className="block text-gray-700 font-bold mb-2">รุ่นรถที่สนใจ</label>
              <select id="car-model" className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Honda City</option>
                <option>Honda Civic</option>
                <option>Honda Accord</option>
                <option>Honda HR-V</option>
                <option>Honda CR-V</option>
              </select>
            </div>
            <div>
              <label htmlFor="dealer" className="block text-gray-700 font-bold mb-2">ผู้จำหน่ายที่สะดวก</label>
              <select id="dealer" className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>ฮอนด้า พระราม 9</option>
                <option>ฮอนด้า รัชดาภิเษก</option>
                <option>ฮอนด้า รามคำแหง</option>
              </select>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button type="submit" className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-md">
              ยืนยันการจอง
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default TestDrivePage;
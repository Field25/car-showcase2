const DealerPage = () => (
  <section className="flex-grow bg-white text-gray-800 py-12 px-4 md:px-8 h-screen">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">ผู้จำหน่าย</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          ค้นหาผู้จำหน่ายฮอนด้าใกล้บ้านคุณ
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-red-600">ฮอนด้า พระราม 9</h3>
          <p className="mt-2 text-gray-600">
            <span className="font-semibold">ที่อยู่:</span> 123 ถนนพระราม 9 แขวงหัวหมาก เขตบางกะปิ กรุงเทพฯ
          </p>
          <p className="mt-1 text-gray-600">
            <span className="font-semibold">โทร:</span> 02-123-4567
          </p>
          <button className="mt-4 px-6 py-2 w-full bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors">
            ดูบนแผนที่
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-red-600">ฮอนด้า รัชดาภิเษก</h3>
          <p className="mt-2 text-gray-600">
            <span className="font-semibold">ที่อยู่:</span> 456 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กรุงเทพฯ
          </p>
          <p className="mt-1 text-gray-600">
            <span className="font-semibold">โทร:</span> 02-456-7890
          </p>
          <button className="mt-4 px-6 py-2 w-full bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors">
            ดูบนแผนที่
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-red-600">ฮอนด้า รามคำแหง</h3>
          <p className="mt-2 text-gray-600">
            <span className="font-semibold">ที่อยู่:</span> 789 ถนนรามคำแหง แขวงหัวหมาก เขตบางกะปิ กรุงเทพฯ
          </p>
          <p className="mt-1 text-gray-600">
            <span className="font-semibold">โทร:</span> 02-789-0123
          </p>
          <button className="mt-4 px-6 py-2 w-full bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors">
            ดูบนแผนที่
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default DealerPage;
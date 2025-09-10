const ContactUsPage = () => (
  <section className="flex-grow bg-gray-100 text-gray-800 py-12 px-4 md:px-8 h-screen">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">ติดต่อเรา</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          เราพร้อมรับฟังทุกความคิดเห็นและตอบทุกข้อสงสัยของคุณ
        </p>
      </div>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">ชื่อ-นามสกุล</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">อีเมล</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">ข้อความ</label>
            <textarea id="message" rows={5} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-md">
              ส่งข้อความ
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactUsPage;
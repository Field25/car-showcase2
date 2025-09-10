const jobPositions = [
  {
    title: 'วิศวกรฝ่ายผลิต (Production Engineer)',
    location: 'โรงงานปราจีนบุรี',
    description: 'วางแผนและควบคุมกระบวนการผลิตให้เป็นไปตามเป้าหมายและมาตรฐานที่กำหนด'
  },
  {
    title: 'เจ้าหน้าที่การตลาด (Marketing Officer)',
    location: 'สำนักงานใหญ่ กรุงเทพฯ',
    description: 'วางแผนและดำเนินกิจกรรมทางการตลาดเพื่อส่งเสริมการขายและสร้างภาพลักษณ์ที่ดีให้กับองค์กร'
  },
  {
    title: 'นักวิเคราะห์และพัฒนาระบบ (System Analyst)',
    location: 'สำนักงานใหญ่ กรุงเทพฯ',
    description: 'วิเคราะห์ ออกแบบ และพัฒนาระบบสารสนเทศเพื่อสนับสนุนการดำเนินงานของบริษัท'
  }
];

const CareersPage = () => (
  <section className="flex-grow bg-white text-gray-800 py-12 px-4 md:px-8 h-screen">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">ร่วมงานกับเรา</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          ร่วมเป็นส่วนหนึ่งของครอบครัวฮอนด้าและเติบโตไปพร้อมกับเรา
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">ตำแหน่งงานที่เปิดรับ</h3>
        <div className="space-y-6">
          {jobPositions.map((job, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-red-600">{job.title}</h4>
              <p className="text-gray-600 font-semibold mt-1">{job.location}</p>
              <p className="text-gray-700 mt-2">{job.description}</p>
              <button className="mt-4 px-5 py-2 bg-gray-700 text-white text-sm rounded-full hover:bg-gray-800 transition-colors">
                ดูรายละเอียดและสมัคร
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CareersPage;
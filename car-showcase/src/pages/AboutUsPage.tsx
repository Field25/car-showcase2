const AboutUsPage = () => (
  <section className="flex-grow bg-white text-gray-800 py-12 px-4 md:px-8 ">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">ประวัติความเป็นมา</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          เส้นทางแห่งความสำเร็จของฮอนด้าในประเทศไทย
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6 leading-relaxed flex-row justify-items-center">
        <p>
          บริษัท ฮอนด้า ออโตโมบิล (ประเทศไทย) จำกัด เริ่มดำเนินธุรกิจในประเทศไทยเมื่อปี พ.ศ. 2526 ซึ่งนับเป็นผู้ผลิตรถยนต์ที่เข้ามาดำเนินธุรกิจในยุคแรกๆ ของอุตสาหกรรมรถยนต์ไทย และได้เติบโตเคียงข้างสังคมไทยมาอย่างต่อเนื่อง
        </p>
        <p>
          ตลอดระยะเวลาที่ผ่านมา ฮอนด้าได้มุ่งมั่นในการสร้างสรรค์ยนตรกรรมที่มีคุณภาพ เปี่ยมด้วยเทคโนโลยีล้ำสมัย เป็นมิตรต่อสิ่งแวดล้อม และตอบสนองความต้องการของลูกค้าที่หลากหลายได้อย่างดีเยี่ยม จนได้รับความไว้วางใจจากลูกค้าชาวไทยมาโดยตลอด
        </p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Honda-Motor-Aoyama-01.jpg" alt="Honda Factory" className="w-100 rounded-lg shadow-md h-150 " />
        <p>
          ด้วยปรัชญาในการดำเนินธุรกิจที่มุ่งสร้างความพึงพอใจสูงสุดให้แก่ลูกค้า เราจึงไม่เคยหยุดนิ่งที่จะพัฒนาในทุกๆ ด้าน ทั้งด้านผลิตภัณฑ์ การขาย และการบริการหลังการขาย เพื่อส่งมอบประสบการณ์ที่ดีที่สุดให้กับลูกค้าทุกคน และก้าวไปสู่การเป็นองค์กรที่สังคมต้องการให้ดำรงอยู่ตลอดไป
        </p>
      </div>
    </div>
  </section>
);

export default AboutUsPage;

import { useState, type Dispatch, type SetStateAction } from 'react';
import { carModels } from '../data/carModels';
import CarModelCard from '../components/CarModelCard';

// Import the DetailedCarModel type from Detail.tsx or a shared types file
import { type DetailedCarModel } from './Detail';

// Define the shape of the props that HomePage expects
interface HomePageProps {
  setCurrentPage: Dispatch<SetStateAction<string>>;
  setSelectedCar: Dispatch<SetStateAction<DetailedCarModel | null>>; // Add setSelectedCar prop
}

// Extend the car model data with more details for the detail page
// NOTE: In a real application, this data would come from a more comprehensive source
// For demonstration, we'll add some dummy detailed data here.
const detailedCarModels: { [key: string]: DetailedCarModel[] } = {
  ...carModels, // Spread existing basic car models
  ehev: carModels.ehev.map(car => ({
    ...car,
    price: 'เริ่มต้น 729,000 บ.',
    description: 'ขับเคลื่อนสู่โลกอนาคตด้วยเทคโนโลยี e:HEV ระบบขับเคลื่อนฟูลไฮบริดจากฮอนด้า ที่ให้สมรรถนะการขับขี่ที่ทรงพลัง เร้าใจ ตอบสนองทันใจด้วยมอเตอร์ไฟฟ้า พร้อมอัตราการประหยัดน้ำมันที่ดีเยี่ยม เป็นมิตรต่อสิ่งแวดล้อม',
    features: ['ระบบขับเคลื่อนฟูลไฮบริด e:HEV', 'อัตราเร่งทันใจด้วยมอเตอร์ไฟฟ้า', 'ประหยัดน้ำมันดีเยี่ยม', 'โหมดการขับขี่ 3 รูปแบบ (EV, Hybrid, Engine)', 'ระบบความปลอดภัย Honda SENSING'],
    specifications: { engine: 'เครื่องยนต์ Atkinson-Cycle + มอเตอร์ไฟฟ้า 2 ตัว', transmission: 'E-CVT', fuelType: 'เบนซิน', maxPower: 'แตกต่างกันในแต่ละรุ่น', maxTorque: 'แตกต่างกันในแต่ละรุ่น' }
  })),
  suv: carModels.suv.map(car => ({
    ...car,
    price: 'เริ่มต้น 999,000 บ.',
    description: 'ยนตรกรรม SUV จากฮอนด้าที่พร้อมตอบโจทย์ทุกไลฟ์สไตล์ ไม่ว่าจะเป็นการเดินทางในเมืองหรือผจญภัยนอกเส้นทาง ด้วยดีไซน์ที่แข็งแกร่ง บึกบึน พื้นที่ใช้สอยอเนกประสงค์ และเทคโนโลยีความปลอดภัยขั้นสูง',
    features: ['ดีไซน์สปอร์ต แข็งแกร่ง', 'ห้องโดยสารกว้างขวางอเนกประสงค์', 'ระบบความปลอดภัย Honda SENSING', 'สมรรถนะการขับขี่ที่ทรงพลัง', 'รองรับทุกการใช้งานในชีวิตประจำวัน'],
    specifications: { engine: 'หลากหลายตามรุ่น (VTEC TURBO / e:HEV)', transmission: 'CVT / E-CVT', fuelType: 'เบนซิน', maxPower: 'แตกต่างกันในแต่ละรุ่น', maxTorque: 'แตกต่างกันในแต่ละรุ่น' }
  })),
  sedan: carModels.sedan.map(car => ({
    ...car,
    price: 'เริ่มต้น 629,000 บ.',
    description: 'สัมผัสความสมบูรณ์แบบของยนตรกรรมซีดานจากฮอนด้า ที่ผสานความหรูหรา ความสปอร์ต และความสะดวกสบายไว้ด้วยกันอย่างลงตัว พร้อมเทคโนโลยีล้ำสมัยที่ทำให้ทุกการเดินทางเป็นเรื่องง่ายและปลอดภัย',
    features: ['ดีไซน์พรีเมียมและสปอร์ต', 'ห้องโดยสารกว้างขวางสะดวกสบาย', 'ระบบความปลอดภัย Honda SENSING', 'ขุมพลัง VTEC TURBO และ e:HEV', 'เทคโนโลยีการเชื่อมต่อที่ล้ำสมัย'],
    specifications: { engine: 'หลากหลายตามรุ่น (VTEC TURBO / e:HEV)', transmission: 'CVT / E-CVT', fuelType: 'เบนซิน', maxPower: 'แตกต่างกันในแต่ละรุ่น', maxTorque: 'แตกต่างกันในแต่ละรุ่น' }
  })),
  hatchback: carModels.hatchback.map(car => ({
    ...car,
    price: 'เริ่มต้น 729,000 บ.', // Example price
    description: 'Honda City Hatchback โดดเด่นด้วยดีไซน์ที่โฉบเฉี่ยวและเป็นเอกลักษณ์ พร้อมพื้นที่ใช้สอยที่กว้างขวางและยืดหยุ่น ตอบโจทย์ทุกไลฟ์สไตล์การขับขี่ในเมืองได้อย่างลงตัว ด้วยขุมพลัง e:HEV ที่ให้ทั้งความแรงและประหยัดน้ำมัน.',
    features: ['เครื่องยนต์ 1.5 ลิตร e:HEV ประสิทธิภาพสูง', 'ระบบความปลอดภัย Honda SENSING', 'เบาะนั่ง Ultra Seat ปรับได้หลายรูปแบบ', 'ระบบเชื่อมต่อ Honda Connect', 'ดีไซน์สปอร์ต RS รอบคัน', 'ประหยัดน้ำมันสูงสุด 27.8 กม./ลิตร'],
    specifications: { engine: '1.5L DOHC i-VTEC + มอเตอร์ไฟฟ้า', transmission: 'E-CVT', fuelType: 'เบนซิน E20', maxPower: '109 แรงม้า (มอเตอร์ไฟฟ้า) / 98 แรงม้า (เครื่องยนต์)', maxTorque: '253 นิวตัน-เมตร (มอเตอร์ไฟฟ้า) / 127 นิวตัน-เมตร (เครื่องยนต์)' }
  })),
};

const categories = [
  { id: 'ehev', name: 'รถ Hybrid e:HEV' },
  { id: 'suv', name: 'รถ SUV' },
  { id: 'sedan', name: 'รถ Sedan' },
  { id: 'hatchback', name: 'รถ Hatchback' },
];

// Destructure the prop and use the new interface for typing
const HomePage = ({ setCurrentPage, setSelectedCar }: HomePageProps) => {
  const [selectedCategory, setSelectedCategory] = useState('suv');

  const handleCarCardClick = (car: DetailedCarModel) => {
    setSelectedCar(car); // Set the selected car
    setCurrentPage('detail'); // Navigate to the detail page
  };


  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen bg-cover bg-center md:bg-right"
        style={{
          backgroundImage: `url('https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fbanner%2F2025%2F08%2F21%2FAFnEyGKc2ff6Vh9d376znmFmjIvJJ2kT.png&w=3840&q=75')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white mx-4 md:mx-20">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">New Accord e:HEV</h1>
          <p className="mt-2 md:mt-4 text-lg md:text-xl lg:text-2xl text-white">
            สปอร์ตพรีเมียมซีดาน สมบูรณ์แบบทุกมิติ เริ่มต้น 1,479,000 บ.
          </p>
          <button
            className="mt-6 md:mt-8 px-6 py-2 md:px-8 md:py-3 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition-colors"
            onClick={() => setCurrentPage('detail')}
          >
            รายละเอียดเพิ่มเติม
          </button>
        </div>
      </section>

      {/* Car Selection Section */}
      <section className="py-12 md:py-20 bg-gray-100 flex-grow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-12">ค้นหารถยนต์ที่ใช่สำหรับคุณ</h2>
          <div className="flex flex-wrap justify-center items-center space-x-2 md:space-x-6 mb-8">
            {categories.map((category) => (
              <span
                key={category.id}
                className={`font-bold transition-colors cursor-pointer ${selectedCategory === category.id ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-600 hover:text-red-600'}`}
                onClick={() => {
                  if (category.id === 'detail') {
                    setCurrentPage('detail');
                  } else {
                    setSelectedCategory(category.id);
                  }
                }}
              >
                {category.name}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {(detailedCarModels[selectedCategory] || detailedCarModels.hatchback).map((model) => (
              <CarModelCard
                key={model.name}
                carData={model} // Pass the full car data
                onClick={() => handleCarCardClick(model)} // Pass the click handler
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

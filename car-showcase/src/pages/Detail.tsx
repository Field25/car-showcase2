import { type Dispatch, type SetStateAction } from 'react';
// import CarModelCard from '../components/CarModelCard'; // Not directly used in DetailPage itself
// import { carModels } from '../data/carModels'; // Not directly used if selectedCar is passed

// Define a more comprehensive type for a car model for the detail page
export interface DetailedCarModel {
  imageUrl: string;
  name: string;
  alt: string;
  type: string;
  price: string;
  description: string;
  features: string[];
  specifications: {
    engine: string;
    transmission: string;
    fuelType: string;
    maxPower: string;
    maxTorque: string;
    // Add more as needed
  };
  // Add more fields like gallery, colors, etc.
}

interface DetailPageProps {
  setCurrentPage: Dispatch<SetStateAction<string>>;
  selectedCar: DetailedCarModel | null; // Now expects a selectedCar prop
}

const DetailPage = ({ setCurrentPage, selectedCar }: DetailPageProps) => {
  // Fallback if no car is selected (e.g., direct access or refresh)
  // In a real app, you might redirect or show an error.
  // For this example, we'll use a default car if selectedCar is null.
  const defaultCar: DetailedCarModel = {
    imageUrl: 'https://www.honda.co.th/_next/image?url=https%3A%2F%2Fassets.honda.co.th%2Fwww-assets%2Fmodel%2F2025%2F08%2F20%2F2HmYg7evH4GrEYpB4bg2CEJkDwz3kncj.png&w=640&q=75',
    name: 'Honda City Hatchback e:HEV RS',
    alt: 'Honda City Hatchback e:HEV RS',
    type: 'รถ Hatchback',
    price: 'เริ่มต้น 1,479,000 บ.',
    description: 'Honda City Hatchback โดดเด่นด้วยดีไซน์ที่โฉบเฉี่ยวและเป็นเอกลักษณ์ พร้อมพื้นที่ใช้สอยที่กว้างขวางและยืดหยุ่น ตอบโจทย์ทุกไลฟ์สไตล์การขับขี่ในเมืองได้อย่างลงตัว ด้วยขุมพลัง e:HEV ที่ให้ทั้งความแรงและประหยัดน้ำมัน.',
    features: [
      'เครื่องยนต์ 1.5 ลิตร e:HEV ประสิทธิภาพสูง',
      'ระบบความปลอดภัย Honda SENSING',
      'เบาะนั่ง Ultra Seat ปรับได้หลายรูปแบบ',
      'ระบบเชื่อมต่อ Honda Connect',
      'ดีไซน์สปอร์ต RS รอบคัน',
      'ประหยัดน้ำมันสูงสุด 27.8 กม./ลิตร'
    ],
    specifications: { engine: '1.5L DOHC i-VTEC + มอเตอร์ไฟฟ้า', transmission: 'E-CVT', fuelType: 'เบนซิน E20', maxPower: '109 แรงม้า (มอเตอร์ไฟฟ้า) / 98 แรงม้า (เครื่องยนต์)', maxTorque: '253 นิวตัน-เมตร (มอเตอร์ไฟฟ้า) / 127 นิวตัน-เมตร (เครื่องยนต์)' }
  };

  const car = selectedCar || defaultCar;

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            รายละเอียดรถยนต์
          </h1>
          <p className="text-lg text-gray-600">
            ดูข้อมูลเชิงลึกและคุณสมบัติเด่นของรุ่นนี้
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img
                src={car.imageUrl}
                alt={car.alt}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{car.name}</h2>
              <p className="text-xl font-semibold text-red-600 mb-4">{car.price}</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {car.description}
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-3">คุณสมบัติเด่น</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                {car.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-3">ข้อมูลจำเพาะ</h3>
              <div className="text-gray-700 mb-6 space-y-2">
                <p><span className="font-semibold">เครื่องยนต์:</span> {car.specifications.engine}</p>
                <p><span className="font-semibold">ระบบเกียร์:</span> {car.specifications.transmission}</p>
                <p><span className="font-semibold">ประเภทเชื้อเพลิง:</span> {car.specifications.fuelType}</p>
                <p><span className="font-semibold">กำลังสูงสุด:</span> {car.specifications.maxPower}</p>
                <p><span className="font-semibold">แรงบิดสูงสุด:</span> {car.specifications.maxTorque}</p>
              </div>

              <button
                className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-md"
                onClick={() => setCurrentPage('home')}
              >
                กลับหน้าหลัก
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            *ราคาและข้อมูลจำเพาะอาจมีการเปลี่ยนแปลง โปรดตรวจสอบข้อมูลล่าสุดกับผู้จำหน่าย
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
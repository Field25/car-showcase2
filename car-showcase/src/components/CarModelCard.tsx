import { type DetailedCarModel } from '../pages/Detail';


interface CarModelCardProps {
  carData: DetailedCarModel; // Now accepts the full car data
  onClick: () => void; // Add an onClick handler
}


const CarModelCard = ({ carData, onClick }: CarModelCardProps) => {
  const { imageUrl, name, alt, type } = carData;

  return (
    <div className="flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow duration-300 p-2 rounded-lg" onClick={onClick}>
      <img src={imageUrl} alt={alt} className="w-full" />
      <p className="mt-2 text-sm md:text-lg font-semibold">{name}</p>
      <p className="text-xs md:text-sm text-gray-500">{type}</p>
    </div>
  );
};

export default CarModelCard;
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';
import PromotionPage from './pages/PromotionPage';
import AfterSalesPage from './pages/AfterSalesPage';
import DealerPage from './pages/DealerPage';
import DetailPage from './pages/Detail';
import ContactUsPage from './pages/ContactUsPage';
import TestDrivePage from './pages/TestDrivePage';
import AboutUsPage from './pages/AboutUsPage';
import NewsPage from './pages/NewsPage';
import CareersPage from './pages/CareersPage';
import { type DetailedCarModel } from './pages/Detail'; // Import the type from Detail.tsx or a shared types file

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  // State to hold the currently selected car for the detail page
  const [selectedCar, setSelectedCar] = useState<DetailedCarModel | null>(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setSelectedCar={setSelectedCar} // Pass setSelectedCar to HomePage
          />
        );
      case 'technology':
        return <TechnologyPage />;
      case 'promotion':
        return <PromotionPage />;
      case 'afterSales':
        return <AfterSalesPage />;
      case 'dealer':
        return <DealerPage />;
      case 'contactUs':
        return <ContactUsPage />;
      case 'testDrive':
        return <TestDrivePage />;
      case 'aboutUs':
        return <AboutUsPage />;
      case 'news':
        return <NewsPage />;
      case 'careers':
        return <CareersPage />;
      case 'detail':
        return (
          <DetailPage
            setCurrentPage={setCurrentPage}
            selectedCar={selectedCar} // Pass the selected car data to DetailPage
          />
        );
      default:
        return <HomePage setCurrentPage={setCurrentPage} setSelectedCar={setSelectedCar} />; // Pass for default as well
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
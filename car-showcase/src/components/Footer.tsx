interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer = ({ setCurrentPage }: FooterProps) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
  <footer className="bg-black text-white py-8 md:py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">ติดตามเรา</h4>
          <ul className="space-y-2">
            <li><a href="https://www.facebook.com/hondathailand/" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.youtube.com/hondathailand/" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="https://page.line.me/mmb1020m" className="hover:text-red-500" target="_blank" rel="noopener noreferrer">Line Official</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">ข้อมูลสำหรับลูกค้า</h4>
          <ul className="space-y-2">
            <li><a href="#" onClick={(e) => handleNavClick(e, 'contactUs')} className="hover:text-red-500 cursor-pointer">ติดต่อเรา</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, 'dealer')} className="hover:text-red-500 cursor-pointer">ค้นหาผู้จำหน่าย</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, 'testDrive')} className="hover:text-red-500 cursor-pointer">จองรถทดลองขับ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">เกี่ยวกับ Honda</h4>
          <ul className="space-y-2">
            <li><a href="#" onClick={(e) => handleNavClick(e, 'aboutUs')} className="hover:text-red-500 cursor-pointer">ประวัติความเป็นมา</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, 'news')} className="hover:text-red-500 cursor-pointer">ข่าวสารและกิจกรรม</a></li>
            <li><a href="#" onClick={(e) => handleNavClick(e, 'careers')} className="hover:text-red-500 cursor-pointer">ร่วมงานกับเรา</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 md:mt-12 border-t border-gray-700 pt-8 text-center">
        <p>&copy; 2023 Honda Automobile (Thailand) Co., Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
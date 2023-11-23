import { Outlet } from 'react-router-dom';
import Header from './UI/Header';
import Footer from './UI/Footer';

const MainLayout = ({ localization }) => {
  return (
    <>
      <Header localization={localization} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

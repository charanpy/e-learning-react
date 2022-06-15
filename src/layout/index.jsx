import Container from './Container';
import Footer from './footer/Footer.layout';
import './layout.css';

const Layout = ({ children, header, showNav = true }) => {
  return (
    <>
      <main className='mainContainer' style={!showNav ? { margin: 0 } : {}}>
        <Container header={header} showNav={showNav} />
        <div className='innerContainer'>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

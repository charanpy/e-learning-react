import Container from './Container';
import Footer from './footer/Footer.layout';
import './layout.css';

const Layout = ({ children }) => {
  console.log('container');
  return (
    <>
      <main className='mainContainer'>
        <Container />

        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

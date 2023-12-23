import Header from './header';

function Navbar() {
  const navLogo = ['/utilities/img/Logo.png', 'Furniture'];
  const navList = ['Home', 'shop', 'About', 'Contact'];
  const navIcon = ['/utilities/img/icon1.png', '/utilities/img/icon2.png', '/utilities/img/icon3.png', '/utilities/img/icon4.png'];
  return (
    <div>
      <Header
        navLogo={navLogo}
        navList={navList}
        navIcon={navIcon}
      />
    </div>
  );
}

export default Navbar;

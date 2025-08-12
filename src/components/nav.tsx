import headerLogo from "../assets/images/header-logo.svg";
import { navLinks } from "../constants";
import hamburger from "../assets/icons/hamburger.svg";
const Nav = () => {
  return (
    <header className="sm:px-16 px-8 py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-w-1440px m-auto">
        <a href="#">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center gap-16 max-lg:hidden text-gray-800">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-gray-500 hover:text-gray-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import Link from "next/link";
import { useState } from "react";
import Logo from "../logo";
import { useRouter } from "next/router";

const Header = () => {
  const { asPath } = useRouter();

  const [hamburger, setBurgerClass] = useState("hamburger-nonactive");
  const [menu_class, setMenuClass] = useState("menu-hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("hamburger-active");
      setMenuClass("menu-visible");
    } else {
      setBurgerClass("hamburger-nonactive");
      setMenuClass("menu-hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header className='navbar-fixed w-full flex top-0 left-0 items-center z-10 md:px-12 relative'>
      <div className='container mx-auto max-w-screen-xl'>
        <div className='flex justify-between relative'>
          <Logo />

          <div className='flex items-center px-4'>
            <button
              id={hamburger}
              name='hamburger'
              type='button'
              className='block absolute right-4 lg:hidden cursor-none'
              onClick={updateMenu}
            >
              <span className='hamburger-line transition duration-300 ease-in-out origin-top-left bg-black'></span>
              <span className='hamburger-line-2 transition duration-300 ease-in-out bg-black'></span>
              <span className='hamburger-line transition duration-300 ease-in-out origin-bottom-left bg-black'></span>
            </button>

            <nav
              id={menu_class}
              className='hidden absolute py-5 bg-slate-50 font-semibold
                    shadow-lg rounded-2xl w-full right-0 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none text-center'
            >
              <ul className='block lg:flex items-center gap-6 ml-6 md:ml-0'>
                <li
                  className={`group my-2 text-slate-800 hover:text-blue-500 hover:duration-500 hover:ease-in-out`}
                >
                  <Link
                    href='/'
                    className={`${asPath === "/" ? "text-blue-500" : ""}`}
                  >
                    Beranda
                  </Link>
                </li>
                <li
                  className={`group my-2 text-slate-800 hover:text-blue-500 hover:duration-500 hover:ease-in-out`}
                >
                  <Link href='/products/page/1'>Produk</Link>
                </li>
                <li
                  className={`group my-2 text-slate-800 hover:text-blue-500 hover:duration-500 hover:ease-in-out`}
                >
                  <Link
                    href='/service/page/1'
                    className={`${
                      asPath === "service/page/1" ? "text-blue-500" : ""
                    }`}
                  >
                    Jasa
                  </Link>
                </li>
                <li
                  className={`group my-2 text-slate-800 hover:text-blue-500 hover:duration-500 hover:ease-in-out`}
                >
                  <Link
                    href='/contact'
                    className={`${
                      asPath === "/contact" ? "text-blue-500" : ""
                    }`}
                  >
                    Kontak Kami
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

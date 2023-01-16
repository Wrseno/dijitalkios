import moment from "moment/moment";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className='max-w-screen-xl mx-auto container bg-slate-100 md:p-20 p-4
     text-slate-900 md:px-12 border-slate-200 border-t-2'
    >
      <div className='lg:flex gap-8'>
        <div className='grid text-left md:grid-cols-3 gap-3 mb-14'>
          <div>
            <h1 className='mb-4 text-lg md:text-xl font-bold mt-10 md:mt-0'>
              Kategori
            </h1>
            <div className='hover:text-blue-600 text-slate-600 duration-300 text-base md:text-lg my-2'>
              <Link href='#'>Website</Link>
            </div>
            <div className='hover:text-blue-600 text-slate-600 duration-300 text-base md:text-lg my-2'>
              <Link href='#'>Desain Buka Olshop</Link>
            </div>
            <div className='hover:text-blue-600 text-slate-600 duration-300 text-base md:text-lg my-2'>
              <Link href='#'>Desain Grafis</Link>
            </div>
          </div>
          <div>
            <h1 className='mb-4 text-lg md:text-xl font-bold mt-10 md:mt-0'>
              Pertanyaan
            </h1>
            <div className='hover:text-blue-600 text-slate-600 duration-300 text-base md:text-lg my-2'>
              <Link href='#'>FAQ</Link>
            </div>
          </div>
          <div>
            <h1 className='mb-4 text-lg md:text-xl font-bold mt-10 md:mt-0'>
              Dijitalkios
            </h1>
            <div className='hover:text-blue-600 text-slate-600 duration-300 text-base md:text-lg my-2'>
              <Link href='#'>Syarat dan Ketentuan</Link>
            </div>
          </div>
        </div>
        <div>
          <h1 className='text-xl md:text-2xl font-extrabold'>
            Dapatkan Berbagai Promo Dari dijitalkios
          </h1>
          <p className='my-2 text-slate-600 text-base md:text-lg'>
            Subscribe untuk mendapatkan promo dan notifikasi dari dijitalkios.
            Dan hal menarik lainnya, secara gratis.
          </p>
          <div className=''>
            <form className='md:flex gap-4'>
              <input
                className='w-full rounded-md p-3 px-6 bg-blue-200 outline-none'
                type='text'
                placeholder='Nama'
              />
              <input
                className='w-full rounded-md p-3 px-6 bg-blue-200 outline-none my-4 md:my-0'
                type='text'
                placeholder='Email'
              />
              <button
                className='bg-blue-500 font-bold text-slate-100 w-full md:w-1/2 p-3 rounded-md mb-4 md:mb-0'
                onClick={(e) => e.preventDefault()}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='text-center border-slate-200 border-t-2 flex justify-between'>
        <div></div>
        <div>
          <p className='text-sm md:text-base text-slate-500 mt-8'>
            Copyright &copy; 2022 - {moment().year()} Dijitalkios All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

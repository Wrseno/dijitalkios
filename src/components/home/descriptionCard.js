import Image from "next/image";
import Link from "next/link";

const DescriptionCard = () => {
  return (
    <section className='container max-w-screen-xl md:flex mx-auto'>
      <div className='md:w-1/2 my-auto relative'>
        <h1 className='font-bold text-5xl lg:text-6xl relative w-1/2'>
          dijital
          <span className='text-sky-500'>kios</span>
          <span className='absolute top-5 right-0 -z-10 animate-spin-slow'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='36'
              height='36'
              fill='#0ea5e9'
              className='bi bi-triangle'
              viewBox='0 0 16 16'
            >
              <path d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z' />
            </svg>
          </span>
        </h1>

        <h2 className='font-bold text-3xl md:text-2xl lg:text-4xl my-3 text-slate-800'>
          Penyedia Layanan, Jasa, dan Produk Digital
        </h2>
        <p className='text-sm lg:text-base font-medium text-slate-800'>
          Buat dan Tingkatkan Bisnismu. Belum punya bisnis? <br /> Mulai aja
          dulu. Tekan Lihat Produk di bawah.
        </p>

        <span
          className='hover:bg-transparent border-2 shadow-md 
            hover:text-sky-500 font-semibold rounded-md p-4 my-4 block w-1/2 lg:w-4/12 text-center
            bg-sky-500 text-slate-100 hover:duration-300 hover:ease-linear hover:cursor-pointer relative
            '
        >
          <Link href='/products/page/1'>Lihat Produk</Link>
          <span className='flex h-4 w-4 absolute bottom-12 right-0'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-4 w-4 bg-sky-500'></span>
          </span>
        </span>
      </div>

      <div className='md:w-1/2 my-auto'>
        <Image
          unoptimized
          src='/images/digitalkios-header.png'
          alt='Digitalkios Header'
          width={1000}
          height={1000}
          placeholder='blur'
          blurDataURL='/images/digitalkios-header.png'
        />
      </div>
    </section>
  );
};

export default DescriptionCard;

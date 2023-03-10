import { RiCustomerService2Fill } from "react-icons/ri";
import { IoPricetags } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TiWarning } from "react-icons/ti";
import { RxUpdate } from "react-icons/rx";

const ExcessCard = () => {
  return (
    <section className='container max-w-screen-xl mx-auto my-24'>
      <div className='text-center text-slate-800'>
        <h2 className='text-xl md:text-3xl font-bold'>
          Kenapa Memilih dijitalkios?
        </h2>
        <p className='font-medium text-sm'>
          Berbagai Alasan dijitalkios Untuk Anda Pilih.
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-14'>
          <div className='w-full duration-300 p-4 rounded-md shadow-xl hover:bg-white  lg:hover:cursor-pointer hover:-translate-y-2'>
            <RiCustomerService2Fill
              size={70}
              color={"#f0f9ff"}
              className='mx-auto bg-sky-500 p-2 rounded-full'
            />
            <h2 className='text-lg md:text-xl font-bold py-1'>
              Tim Support Handal
            </h2>
            <p className='text-slate-600 text-sm md:text-base'>
              Kami selalu siap membantu setiap kendala yang dialami customer
              melalui email maupun chat.
            </p>
          </div>
          <div className='w-full duration-300 p-4 rounded-md shadow-xl hover:bg-white  lg:hover:cursor-pointer hover:-translate-y-2'>
            <IoPricetags
              size={70}
              color={"#f0f9ff"}
              className='mx-auto bg-sky-500 p-2 rounded-full'
            />
            <h2 className='text-lg md:text-xl font-bold py-1'>
              Harga Terjangkau
            </h2>
            <p className='text-slate-600 text-sm md:text-base'>
              Anda bisa mendapatkan layanan dan jasa dengan harga yang
              terjangkau mulai dari harga Rp 5.000 an saja.
            </p>
          </div>
          <div className='w-full duration-300 p-4 rounded-md shadow-xl hover:bg-white  lg:lg:hover:cursor-pointer hover:-translate-y-2'>
            <FaClipboardList
              size={70}
              color={"#f0f9ff"}
              className='mx-auto bg-sky-500 p-2 rounded-full'
            />
            <h2 className='text-lg md:text-xl font-bold py-1'>
              Layanan Lengkap
            </h2>
            <p className='text-slate-600 text-sm md:text-base'>
              Kami menyediakan banyak layanan yang bisa Anda dapatkan. Contohnya
              seperti jasa website, desain grafis, desain bukaolshop, dll.
            </p>
          </div>
          <div className='w-full duration-300 p-4 rounded-md shadow-xl hover:bg-white  lg:hover:cursor-pointer hover:-translate-y-2'>
            <VscWorkspaceTrusted
              size={70}
              color={"#f0f9ff"}
              className='mx-auto bg-sky-500 p-2 rounded-full'
            />
            <h2 className='text-lg md:text-xl font-bold py-1'>Terpercaya</h2>
            <p className='text-slate-600 text-sm md:text-base'>
              Kami telah dipercaya oleh banyak konsumen. Untuk membantu dan
              membuat bisnis mereka lebih berkembang.
            </p>
          </div>
          <div className='w-full duration-300 p-4 rounded-md shadow-xl hover:bg-white  lg:hover:cursor-pointer hover:-translate-y-2'>
            <TiWarning
              size={70}
              color={"#f0f9ff"}
              className='mx-auto bg-sky-500 p-2 rounded-full'
            />
            <h2 className='text-lg md:text-xl font-bold py-1'>
              Garansi Kerusakan
            </h2>
            <p className='text-slate-600 text-sm md:text-base'>
              Jika layanan yang kami sediakan terdapat kerusakan, akan kami
              perbaiki secara GRATIS.
            </p>
          </div>
          <div className='w-full duration-300 p-4 rounded-md shadow-xl hover:bg-white  lg:hover:cursor-pointer hover:-translate-y-2'>
            <RxUpdate
              size={70}
              color={"#f0f9ff"}
              className='mx-auto bg-sky-500 p-2 rounded-full'
            />
            <h2 className='text-lg md:text-xl font-bold py-1'>
              Pembaruan Layanan
            </h2>
            <p className='text-slate-600 text-sm md:text-base'>
              Kami selalu memperbarui layanan yang telah kami sediakan, sehingga
              akan memberikan pengalaman yang lebih baik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcessCard;

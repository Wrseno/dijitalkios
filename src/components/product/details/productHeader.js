import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { GrFormNext } from "react-icons/gr";

const ProductHeader = ({ product }) => {
  return (
    <section className='container max-w-screen-xl mx-auto mt-24'>
      <div className='flex items-center text-sm md:text-base mb-4'>
        <Link
          href='/'
          className='text-blue-600 hover:text-blue-800 duration-300 font-semibold'
        >
          Home
        </Link>
        <GrFormNext />
        <Link
          href='/products/page/1'
          className='text-blue-600 hover:text-blue-800 duration-300 font-semibold'
        >
          Products
        </Link>
        <GrFormNext />
        <p className='text-slate-500 font-semibold'>{product.slug}</p>
      </div>
      <div className='grid md:grid-cols-2 gap-4'>
        <Image
          unoptimized
          src={`/images/${product.images}`}
          alt={product.title}
          width={520}
          height={300}
          placeholder='blur'
          blurDataURL={`/images/${product.images}`}
          className='rounded-md'
        />
        <div>
          <h1 className='text-xl md:text-2xl font-extrabold'>
            {product.title}
          </h1>
          <p className='text-2xl md:text-3xl font-extrabold text-blue-500  py-2'>
            {product.price}
          </p>
          <div className='py-3 border-slate-200 border-b-2 flex gap-1'>
            <p className='font-bold'>Kategori : </p>
            {product.category}
          </div>
          <div className='py-3 border-slate-200 border-b-2 flex gap-1'>
            <p className='font-bold'>Update : </p>
            {product.update}
          </div>
          <div className='flex py-3 border-slate-200 border-b-2 items-center'>
            <p className='font-bold'>Rating :</p>
            <div className='flex ml-1'>
              <AiFillStar color={"#eab308"} size={20} />
              <AiFillStar color={"#eab308"} size={20} />
              <AiFillStar color={"#eab308"} size={20} />
              <AiFillStar color={"#eab308"} size={20} />
              <AiFillStar color={"#eab308"} size={20} />
            </div>
          </div>
          <div className='flex gap-3 mt-6'>
            <Link
              className='bg-gradient-to-r from-sky-600 to-sky-500 text-slate-50 p-2 px-4 rounded-md shadow-xl hover:scale-95 duration-300'
              href={`/payment-form/${product.slug}`}
            >
              Beli Sekarang
            </Link>
            <Link
              className='bg-gradient-to-r from-blue-600 to-blue-500 text-slate-50 p-2 px-4 rounded-md shadow-xl hover:scale-95 duration-300'
              href={product.preview}
              target='_blank'
            >
              Preview
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeader;

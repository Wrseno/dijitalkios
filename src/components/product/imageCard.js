import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const ImageCard = ({ product }) => {
  return (
    <li className='mx-auto bg-white shadow-xl p-3 rounded-md hover:text-blue-700 duration-300 hover:ease-in hover:-translate-y-1 md:hover:-translate-y-2'>
      <Link href={`/products/${product.slug}`}>
        <Image
          unoptimized
          src={`/images/${product.images}`}
          alt={product.title}
          width={1000}
          height={1000}
          placeholder='blur'
          blurDataURL={`/images${product.images}`}
          className='scale-110 lg:scale-100 rounded-md'
        />
        <h1 className='lg:text-xl font-bold pt-2'>{product.title}</h1>
        <div className='flex py-2'>
          <AiFillStar color={"#eab308"} size={15} />
          <AiFillStar color={"#eab308"} size={15} />
          <AiFillStar color={"#eab308"} size={15} />
          <AiFillStar color={"#eab308"} size={15} />
          <AiFillStar color={"#eab308"} size={15} />
        </div>
      </Link>
      <div className='md:flex md:gap-10 lg:gap-24 items-center'>
        <Link
          href={`/category/${product.category}`}
          className='bg-gray-200 p-2 rounded-md text-xs md:text-sm font-bold duration-300 text-gray-900 hover:text-blue-700'
        >
          {product.category}
        </Link>
        <p className='font-bold text-sm mt-3 md:text-base md:mt-0 lg:text-xl text-blue-700'>
          {product.price}
        </p>
      </div>
    </li>
  );
};

export default ImageCard;

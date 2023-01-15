import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const ServiceCard = ({ service }) => {
  return (
    <li className='mx-auto bg-white shadow-xl p-3 rounded-md hover:text-blue-700 duration-300 hover:ease-in hover:-translate-y-1 md:hover:-translate-y-2'>
      <Link href={`/services/${service.slug}`}>
        <Image
          unoptimized
          src={`/images/${service.images}`}
          alt={service.title}
          width={1000}
          height={1000}
          placeholder='blur'
          blurDataURL={`${service.images}`}
          className='scale-100 rounded-md'
        />
        <h2 className='text-sm lg:text-xl font-bold pt-2'>{service.title}</h2>
        <div className='flex py-2'>
          <AiFillStar color={"#eab308"} size={15} />
          <AiFillStar color={"#eab308"} size={15} />
          <AiFillStar color={"#eab308"} size={15} />
          <AiFillStar color={"#eab308"} size={15} />
          <AiFillStar color={"#eab308"} size={15} />
        </div>
      </Link>
      <div className='md:flex md:gap-1 lg:gap-10 items-center'>
        <Link
          href={`/category/service/${service.category}`}
          className='bg-gray-200 p-2 rounded-md text-xs md:text-sm font-bold duration-300 text-gray-900 hover:text-blue-700'
        >
          {service.category}
        </Link>
        <p className='font-bold text-xs mt-3 md:text-base md:mt-0 lg:text-lg text-blue-700'>
          {service.price}
        </p>
      </div>
    </li>
  );
};

export default ServiceCard;

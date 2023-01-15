import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const TestimonialCard = ({ testi }) => {
  return (
    <li
      className='bg-gradient-to-t from-sky-500 to-sky-300 p-4 rounded-md 
        hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-300 lg:hover:cursor-pointer'
    >
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <Image
            unoptimized
            src={`/images/${testi.images}`}
            alt={"Person Coding"}
            width={50}
            height={50}
            className='rounded-full'
            placeholder='blur'
            blurDataURL={`/images/${testi.images}`}
          />
          <div>
            <h2 className='font-bold text-lg md:text-xl'>{testi.name}</h2>
            <p className='text-sm text-slate-700'>{testi.proffesion}</p>
          </div>
        </div>
        <div className='flex'>
          <AiFillStar color={"#eab308"} size={20} />
          <AiFillStar color={"#eab308"} size={20} />
          <AiFillStar color={"#eab308"} size={20} />
          <AiFillStar color={"#eab308"} size={20} />
          <AiFillStar color={"#eab308"} size={20} />
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-slate-900 text-sm md:text-base'>{testi.comment}</p>
      </div>
    </li>
  );
};

export default TestimonialCard;

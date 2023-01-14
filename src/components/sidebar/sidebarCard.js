import Link from "next/link";
import { useRouter } from "next/router";

const SidebarCard = ({ products }) => {
  const { asPath } = useRouter();
  const allCategories = products.map((product) => product.category);
  const uniqueCategories = Array.from(new Set(allCategories));

  return (
    <ul className='font-semibold'>
      {uniqueCategories.map((category, index) => {
        return (
          <>
            <li className='my-1' key={index}>
              <Link
                href={`/category/${category}`}
                key={index}
                className={`${
                  asPath === `/category/${category}` ? "text-sky-500" : ""
                }`}
              >
                {category}
              </Link>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default SidebarCard;

import Link from "next/link";
import { useRouter } from "next/router";

const SidebarServiceCard = ({ services }) => {
  const { asPath } = useRouter();
  const allCategories = services.map((service) => service.category);
  const uniqueCategories = Array.from(new Set(allCategories));

  return (
    <ul className='font-semibold '>
      {uniqueCategories.map((category, index) => {
        return (
          <>
            <li className='my-1' key={index}>
              <Link
                href={`/category/service/${category}`}
                key={index}
                className={`${
                  asPath === `/category/service/${category}`
                    ? "text-sky-500"
                    : ""
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

export default SidebarServiceCard;

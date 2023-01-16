import Link from "next/link";
import { useState } from "react";
import { GrFormNext, GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Layout from "../../../layout";
import ServiceCard from "../../../components/service/serviceCard";
import serviceJSON from "../../../data/service/services.json";
import SidebarServiceCard from "../../../components/sidebar/sidebarService";
import { BsFilterRight } from "react-icons/bs";

const Service = ({ services, page }) => {
  const totalPages = Math.ceil(services.length / 6);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);

  return (
    <Layout>
      <main className='w-full my-24 md:px-16 px-4'>
        <div className='flex items-center mb-4 text-sm md:text-base'>
          <Link
            href='/'
            className='text-blue-600 hover:text-blue-800 duration-300 font-semibold'
          >
            Beranda
          </Link>
          <GrFormNext />
          <Link
            href='/products/page/1'
            className='text-blue-600 hover:text-blue-800 duration-300 font-semibold'
          >
            Jasa
          </Link>
        </div>
        <section className='container max-w-screen-xl mx-auto'>
          <div className='md:flex md:justify-between'>
            <h1 className='text-2xl font-bold'>Semua Jasa</h1>
            <div className='text-sm'>
              <button
                className='font-semibold flex gap-1 items-center my-2 md:my-0'
                onClick={() => {
                  setIsCategoryVisible(!isCategoryVisible);
                }}
              >
                <BsFilterRight size={20} /> Filter Berdasarkan Kategori
              </button>
              {isCategoryVisible && (
                <div className='absolute z-10 bg-white p-6 rounded-md shadow-xl w-64'>
                  <SidebarServiceCard services={services} />
                </div>
              )}
            </div>
          </div>
          <div className='w-full'>
            <ul className='grid grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
              {services
                .slice((page - 1) * 6, page * 6)
                .map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
            </ul>
            <div className='flex gap-6 w-full justify-center pt-4'>
              <div class='flex flex-col items-center'>
                <span class='text-sm md:text-base text-gray-700'>
                  Menampilkan{" "}
                  <span class='font-semibold text-blue-700'>{page} </span>
                  dari{" "}
                  <span class='font-semibold text-blue-700'>{totalPages} </span>
                  Entri
                </span>
                <div class='inline-flex mt-2 xs:mt-0'>
                  {page > 1 && (
                    <Link
                      href='/service/page/[page]'
                      as={`/service/page/${page - 1}`}
                      class='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-l hover:bg-blue-500'
                    >
                      <GrFormPreviousLink size={"20px"} />
                      Prev
                    </Link>
                  )}
                  {page < totalPages && (
                    <Link
                      href='/service/page/[page]'
                      as={`/service/page/${page + 1}`}
                      class='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border-0 border-l border-gray-700 rounded-r hover:bg-blue-500'
                    >
                      Next
                      <GrFormNextLink size={"20px"} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};
export default Service;

export async function getStaticProps({ params }) {
  const page = params.page ? parseInt(params.page) : 1;
  const services = serviceJSON;

  return {
    props: {
      services,
      page,
    },
  };
}

export async function getStaticPaths() {
  const services = serviceJSON;
  const totalPages = Math.ceil(services.length / 6);

  const paths = [];
  for (let i = 1; i <= totalPages; i++) {
    paths.push({ params: { page: `${i}` } });
  }

  return {
    paths,
    fallback: false,
  };
}

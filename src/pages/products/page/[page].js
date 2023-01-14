import Layout from "../../../layout";
import ImageCard from "../../../components/product/imageCard";
import Link from "next/link";
import productJSON from "../../../data/product/products.json";
import { GrFormNext, GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Head from "next/head";
import { useState, useEffect } from "react";
import SidebarCard from "../../../components/sidebar/sidebarCard";
import { BsFilterRight } from "react-icons/bs";

const AllProduct = ({ products, page }) => {
  const totalPages = Math.ceil(products.length / 6);
  const productsSEO = products.map((productSEO) => {
    return productSEO;
  });

  const MetaSEO = () => {
    return (
      <>
        <meta name='description' content={productsSEO[0].description} />
        <meta
          name='keywords'
          content={`${productsSEO[0].category}, ${productsSEO[1].category}, Jasa Pembuatan Website, HTML bukaolshop Gratis, Jual Script bukaolshop, jual html bo`}
        />
        <meta property='og:description' content={productsSEO[0].description} />
        <meta name='twitter:title' content={productsSEO[0].title} />
        <meta name='twitter:image' content='https://ibb.co/LQ9vpVh' />
        <meta name='twitter:image:alt' content='Script Web Topup Games'></meta>
        <meta name='twitter:description' content={productsSEO[0].description} />
        <meta name='og:title' content={productsSEO[0].title} />
        <meta property='og:description' content={productsSEO[0].description} />
      </>
    );
  };

  const [isCategoryVisible, setIsCategoryVisible] = useState(false);

  return (
    <>
      <Layout>
        <Head>
          <title>Semua Produk | Dijital Kios</title>
          {MetaSEO()}
        </Head>

        <main className='w-full my-24 md:px-16 px-4'>
          <div className='flex items-center mb-4 text-xs md:text-base'>
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
              Produk
            </Link>
          </div>
          <section className='container max-w-screen-xl mx-auto'>
            <div className='md:flex md:justify-between'>
              <h1 className='text-2xl font-bold'>Semua Produk</h1>
              <div className='text-sm'>
                <button
                  className='font-semibold flex items-center gap-1 my-2 md:my-0'
                  onClick={() => {
                    setIsCategoryVisible(!isCategoryVisible);
                  }}
                >
                  <BsFilterRight size={20} /> Filter Berdasarkan Kategori
                </button>
                {isCategoryVisible && (
                  <div className='absolute z-10 bg-white p-6 rounded-md shadow-xl w-72'>
                    <SidebarCard products={products} />
                  </div>
                )}
              </div>
            </div>
            <div className='w-full'>
              <ul className='grid grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
                {products.slice((page - 1) * 6, page * 6).map((product) => (
                  <ImageCard key={product.id} product={product} />
                ))}
              </ul>
              <div className='flex gap-6 w-full justify-center pt-4'>
                <div class='flex flex-col items-center'>
                  <span class='text-sm md:text-base text-gray-700'>
                    Menampilkan{" "}
                    <span class='font-semibold text-blue-700'>{page} </span>
                    dari{" "}
                    <span class='font-semibold text-blue-700'>
                      {totalPages}{" "}
                    </span>
                    Entri
                  </span>
                  <div class='inline-flex mt-2 xs:mt-0'>
                    {page > 1 && (
                      <Link
                        href='/products/page/[page]'
                        as={`/products/page/${page - 1}`}
                        class='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-l hover:bg-blue-500'
                      >
                        <GrFormPreviousLink size={"20px"} />
                        Prev
                      </Link>
                    )}
                    {page < totalPages && (
                      <Link
                        href='/products/page/[page]'
                        as={`/products/page/${page + 1}`}
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
    </>
  );
};

export default AllProduct;

export async function getStaticProps({ params }) {
  const page = params.page ? parseInt(params.page) : 1;
  const products = productJSON;

  return {
    props: {
      products,
      page,
    },
  };
}

export async function getStaticPaths() {
  const products = productJSON;
  const totalPages = Math.ceil(products.length / 6);

  const paths = [];
  for (let i = 1; i <= totalPages; i++) {
    paths.push({ params: { page: `${i}` } });
  }

  return {
    paths,
    fallback: false,
  };
}

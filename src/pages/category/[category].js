import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import productJSON from "../../data/product/products.json";
import Layout from "../../layout";
import ImageCard from "../../components/product/imageCard";
import { GrFormNext } from "react-icons/gr";
import SidebarCard from "../../components/sidebar/sidebarCard";
import { BsFilterRight } from "react-icons/bs";

const ProductBySlug = ({ product, products }) => {
  const relatedProducts = productJSON.filter(
    (p) => p.category === product.category
  );

  const productsSEO = product;
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);

  const MetaSEO = () => {
    return (
      <>
        <meta name='description' content={productsSEO.description} />
        <meta
          name='keywords'
          content={`${productsSEO.category}, ${productsSEO.category}, Jasa Pembuatan Website, HTML bukaolshop Gratis, Jual Script bukaolshop, jual html bo`}
        />
        <meta property='og:description' content={productsSEO.description} />
        <meta name='twitter:title' content={productsSEO.title} />
        <meta name='twitter:image' content='https://ibb.co/LQ9vpVh' />
        <meta name='twitter:image:alt' content='Script Web Topup Games'></meta>
        <meta name='twitter:description' content={productsSEO.description} />
        <meta name='og:title' content={productsSEO.title} />
        <meta property='og:description' content={productsSEO.description} />
      </>
    );
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Produk {product.category} || Dijital Kios</title>
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
            <GrFormNext />
            <Link
              href='/category'
              className='text-blue-600 hover:text-blue-800 duration-300 font-semibold'
            >
              Kategori
            </Link>
            <GrFormNext />
            <Link
              href='/category'
              className='text-blue-600 hover:text-blue-800 duration-300 font-semibold'
            >
              {product.category}
            </Link>
          </div>
          <section className='container max-w-screen-xl mx-auto'>
            <div className='md:flex md:justify-between'>
              <h1 className='text-lg lg:text-2xl font-bold'>
                Produk {product.category}
              </h1>
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
                  <div className='absolute z-10 bg-white p-6 rounded-md shadow-xl w-72'>
                    <SidebarCard products={products} />
                  </div>
                )}
              </div>
            </div>
            <div className='w-full'>
              <ul className='grid grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
                {relatedProducts.slice(0, 3).map((rp, index) => (
                  <ImageCard key={index} product={rp} />
                ))}
              </ul>
              <div className='flex gap-6 w-full justify-center pt-4'>
                {/* <div class='flex flex-col items-center'>
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
                          <svg
                            aria-hidden='true'
                            class='w-5 h-5 mr-2'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
                              clip-rule='evenodd'
                            ></path>
                          </svg>
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
                          <svg
                            aria-hidden='true'
                            class='w-5 h-5 ml-2'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                              clip-rule='evenodd'
                            ></path>
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div> */}
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ProductBySlug;

function findProductByCategory(products, category) {
  return products.find((product) => product.category === category);
}

export async function getStaticProps({ params }) {
  const products = productJSON;
  const product = findProductByCategory(products, params.category);

  return {
    props: {
      product,
      products,
    },
  };
}

export async function getStaticPaths() {
  const products = productJSON;

  return {
    paths: products.map((product) => ({
      params: { category: product.category },
    })),
    fallback: false,
  };
}

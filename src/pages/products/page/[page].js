import Layout from "../../../layout";
import ImageCard from "../../../components/product/imageCard";
import Link from "next/link";
import productJSON from "../../../data/product/products.json";
import { GrFormNext, GrNext, GrPrevious } from "react-icons/gr";
import Head from "next/head";
import { useState, useEffect } from "react";
import LoadPage from "../../../components/loading/loadPage";

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadPage />
      ) : (
        <Layout>
          <Head>
            <title>Semua Produk | Dijital Kios</title>
            {MetaSEO()}
          </Head>

          <main className='w-full my-24 md:px-16 px-4'>
            <div className='flex items-center mb-4'>
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
            </div>
            <section className='container max-w-screen-xl mx-auto'>
              <div>
                <h1 className='text-2xl font-bold'>Semua Produk</h1>
              </div>
              <div className='w-full'>
                <ul className='grid grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
                  {products.slice((page - 1) * 6, page * 6).map((product) => (
                    <ImageCard key={product.id} product={product} />
                  ))}
                </ul>
                <div className='flex gap-6 w-full justify-center'>
                  {page >= 1 && (
                    <Link
                      href='/products/page/[page]'
                      as={`/products/page/${page - 1}`}
                      className='bg-blue-500 text-slate-50 p-2 px-8 rounded-md 
                shadow-xl hover:bg-blue-600 duration-300 hover:scale-95 flex items-center gap-2'
                    >
                      <GrPrevious /> Prev
                    </Link>
                  )}

                  {page <= totalPages && (
                    <Link
                      href='/products/page/[page]'
                      as={`/products/page/${page + 1}`}
                      className='bg-blue-500 text-slate-50 p-2 px-8 rounded-md 
                shadow-xl hover:bg-blue-600 duration-300 hover:scale-95 flex items-center gap-2'
                    >
                      Next <GrNext />
                    </Link>
                  )}
                </div>
              </div>
            </section>
          </main>
        </Layout>
      )}
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

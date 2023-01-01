import productJSON from "../../data/product/products.json";
import Layout from "../../layout";
import ProductHeader from "../../components/product/details/productHeader";
import ProductDetails from "../../components/product/details/productDetails";
import ImageCard from "../../components/product/imageCard";
import Head from "next/head";
import LoadPage from "../../components/loading/loadPage";
import { useState, useEffect } from "react";

const ProductBySlug = ({ product }) => {
  const relatedProducts = productJSON.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const productsSEO = product;

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
            <ProductHeader key={product.id} product={product} />
            <ProductDetails key={product.slug} product={product} />
            <section>
              <h1 className='font-extrabold text-xl md:text-2xl p-4'>
                Produk Terkait
              </h1>
              <ul className='grid grid-cols-2 lg:grid-cols-3  gap-4'>
                {relatedProducts.slice(0, 3).map((rp, index) => (
                  <ImageCard key={index} product={rp} />
                ))}
              </ul>
            </section>
          </main>
        </Layout>
      )}
    </>
  );
};

export default ProductBySlug;

function findProductBySlug(products, slug) {
  return products.find((product) => product.slug === slug);
}

export async function getStaticProps({ params }) {
  const products = productJSON;
  const product = findProductBySlug(products, params.slug);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const products = productJSON;

  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
}

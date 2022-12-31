import Layout from "../layout";
import productJSON from "../data/product/products.json";
import testimonialJSON from "../data/testimonial/testimonials.json";
import DescriptionCard from "../components/home/descriptionCard";
import ImageCard from "../components/product/imageCard";
import ExcessCard from "../components/home/excessCard";
import TestimonialCard from "../components/home/testimonialCard";
import LoadPage from "../components/loading/loadPage";
import Link from "next/link";
import { useState, useEffect } from "react";

const Home = ({ products, testimonials }) => {
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
          <main className={`w-full my-32 md:px-16 px-4 `}>
            <DescriptionCard />

            <section className='container max-w-screen-xl mx-auto my-24'>
              <div className='text-center text-slate-800'>
                <h1 className='font-bold text-xl md:text-3xl'>
                  Beberapa Produk Kami
                </h1>
                <p className='font-medium text-sm'>
                  Untuk Meningkatkan Peluang Bisnismu.
                </p>
              </div>
              <div className='w-full'>
                <ul className='grid grid-cols-2 lg:grid-cols-3 gap-4 my-14'>
                  {products.slice(0, 6).map((product, index) => (
                    <ImageCard key={index} product={product} />
                  ))}
                </ul>
                <div className='text-center hover:scale-95 hover:cursor-pointer'>
                  <Link
                    href='/products/page/1'
                    className='bg-gradient-to-r from-sky-600 to-sky-500 text-slate-50 p-4 px-8 rounded-md shadow-2xl hover:bg-blue-700 duration-300'
                  >
                    Lihat Semua Produk
                  </Link>
                </div>
              </div>
            </section>

            <ExcessCard />

            <section className='container max-w-screen-xl mx-auto'>
              <div className='text-slate-800'>
                <div className='grid'>
                  <div className='text-center mb-14'>
                    <h1 className=' text-xl md:text-3xl font-bold'>
                      Beberapa Ulasan Pelanggan
                    </h1>
                    <p className='font-medium text-sm'>
                      Ulasan Pelanggan yang Telah Mempercayai Kami.
                    </p>
                  </div>
                  <ul className='grid md:grid-cols-2 gap-4'>
                    {testimonials.map((testi, index) => (
                      <TestimonialCard key={index} testi={testi} />
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </Layout>
      )}
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const products = productJSON;
  const testimonials = testimonialJSON;

  return {
    props: {
      products,
      testimonials,
    },
  };
}

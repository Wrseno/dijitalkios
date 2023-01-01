import Layout from "../layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 3000);
  });

  return (
    <Layout>
      <main className='w-full my-32 md:px-16 px-4'>
        <section className='container max-w-screen-xl mx-auto my-24 text-center'>
          <Image
            unoptimized
            src={"/images/404.webp"}
            alt={"404 Not Found"}
            width={200}
            height={200}
            className='mx-auto'
            placeholder='blur'
            blurDataURL={"/images/404.webp"}
          />
          <h1 className='font-bold md:text-2xl'>
            404 | Ups Halaman Yang Anda Cari Tidak Ada
          </h1>
          <p className='font-semibold text-sm md:text-base'>
            Anda akan diarahkan ke halaman sebelumnya dalam 3 detik
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default Custom404;

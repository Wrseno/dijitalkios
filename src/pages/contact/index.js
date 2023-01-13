import React from "react";
import Layout from "../../layout";

const Contact = () => {
  return (
    <Layout>
      <section className='bg-slate-100 my-32'>
        <div className='px-4 mx-auto max-w-screen-md'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 '>
            Kontak Kami
          </h2>
          <p className='mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl'>
            Punya Masalah Teknis? Butuh Bantuan? Silahkan Hubungi Kami.
          </p>
          <form action='#' className='space-y-8'>
            <div>
              <label
                for='email'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-blue-500'
                placeholder='name@dijitalkios.com'
                required
              />
            </div>
            <div>
              <label
                for='subject'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Subjek
              </label>
              <input
                type='text'
                id='subject'
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:outline-blue-500'
                placeholder='Beri tahu kami bagaimana kami dapat membantu Anda'
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                for='message'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Pesan
              </label>
              <textarea
                id='message'
                rows='6'
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:outline-blue-500'
                placeholder='Tinggalkan beberapa pesan...'
              ></textarea>
            </div>
            <button
              type='submit'
              className='py-3 px-5 text-sm font-medium text-center text-white bg-blue-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800'
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

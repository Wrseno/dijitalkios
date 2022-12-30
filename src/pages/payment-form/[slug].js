import moment from 'moment'
import Image from 'next/image'
import paymentJSON from '../../data/payment/payments.json'
import productsJSON from '../../data/product/products.json'
import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import Link from 'next/link'

const FormPayment = ({ payments, product }) => {
  const tomorrow = moment()
    .add(1, 'days')
    .format('DD MMMM YYYY HH:mm')
    .toLocaleUpperCase()

  const [showModal, setShowModal] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [randomNumber, setRandomNumber] = useState()

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
    setRandomNumber(Math.floor(Math.random() * 10000) + 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = 'https://wa.wizard.id/bfa341'
    window.open(url)
  }

  return (
    <>
      <div className="bg-gradient-to-r from-blue-800 to-blue-400 top-0 p-4">
        <h1 className="text-slate-50 font-bold text-lg">
          Form Pembayaran Dijitalkios
        </h1>
      </div>
      <main className="w-full lg:px-64 md:px-32 p-4 bg-slate-100">
        <section className="container max-w-screen-xl mx-auto">
          <div className="py-6">
            <h1 className="text-center text-slate-700 font-semibold mb-8">
              BAYAR SEBELUM {tomorrow}
            </h1>
            <div className="bg-slate-50 shadow-xl p-4 rounded-md">
              {payments.map((pay, index) => {
                return (
                  <label
                    key={index}
                    className="hover:cursor-pointer bg-white shadow-lg p-2 my-2 flex gap-4 rounded-md relative pay"
                  >
                    <input
                      className="opacity-0 absolute right-0 top-0"
                      type="radio"
                      name="payment"
                      value={pay.value}
                      id={pay.id}
                      required
                      checked={selectedOption === pay.value}
                      onChange={handleOptionChange}
                    />
                    <Image
                      src={`/images/${pay.images}`}
                      alt={pay.name}
                      width={100}
                      height={100}
                      className="rounded-md z-10"
                      placeholder="blur"
                      blurDataURL={`/images/${pay.images}`}
                    />
                    <div className="items-center my-auto z-10">
                      <p className="font-bold md:text-lg">{pay.name}</p>
                      <p className="text-slate-200 text-xs font-semibold">
                        Gratis Biaya Layanan
                      </p>
                    </div>
                    <span></span>
                  </label>
                )
              })}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href={`/products/${product.slug}`}
                className="block text-center mt-4 hover:scale-95 duration-500 shadow-xl w-full bg-gradient-to-tr from-slate-800 to-slate-400 p-2 rounded-md text-slate-50 font-bold"
              >
                Kembali
              </Link>
              <button
                className="mt-4 hover:scale-95 duration-500 shadow-xl w-full bg-gradient-to-tr from-blue-800 to-blue-400 p-2 rounded-md text-slate-50 font-bold"
                onClick={() => setShowModal(true)}
              >
                Lanjutkan
              </button>
            </div>
          </div>
        </section>
        {showModal ? (
          <>
            <form
              onSubmit={handleSubmit}
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-50 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-lg font-semibold">
                      Konfirmasi Pembayaran
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <AiFillCloseCircle />
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto text-center">
                    <div>
                      <h1 className="font-bold mb-4 text-xl">
                        ID PEMBAYARAN #{randomNumber}
                      </h1>
                    </div>
                    <div>
                      <div className="grid grid-cols-3 border-b-2 py-2 border-black bg-slate-200 rounded-sm">
                        <p className="font-bold">Qty</p>
                        <p className="font-bold">Produk</p>
                        <p className="font-bold">Harga</p>
                      </div>
                      <div className="grid grid-cols-3  py-2">
                        <p>1</p>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                      </div>
                    </div>
                    <div className="bg-white shadow-lg p-4 my-6 rounded-md">
                      <p className="font-bold text-lg py-1 border-b-2 border-black bg-slate-200 rounded-sm">
                        Nomor Akun Pembayaran
                      </p>
                      <div className="text-left">
                        <p className="pt-4 font-semibold">{selectedOption}</p>
                        <p className="pt-2 font-semibold">
                          Atas Nama : Warseno Bambang Setyono
                        </p>
                        <p className="text-sm text-slate-500">
                          Kemungkinan untuk e-wallet namanya ada yang berbeda.
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Silahkan transfer ke nomor yang telah ada, transfer sesuai
                      harga. Kemudian klik konfirmasi. Terimakasih telah order
                      di - dijitalkios.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Kembali
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Konfirmasi
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </main>
    </>
  )
}

export default FormPayment

function findProductBySlug(products, slug) {
  return products.find((product) => product.slug === slug)
}

export async function getStaticProps({ params }) {
  const products = productsJSON
  const payments = paymentJSON
  const product = findProductBySlug(products, params.slug)

  return {
    props: {
      product: product,
      payments,
    },
  }
}

export async function getStaticPaths() {
  const products = productsJSON

  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  }
}

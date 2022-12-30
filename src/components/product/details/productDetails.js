import { useState } from 'react'
import { BsCheck2Circle } from 'react-icons/bs'

const ProductDetails = ({ product }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true)
  const [isFeatureVisible, setIsFeatureVisible] = useState(false)
  const [isButton1Active, setIsButton1Active] = useState(true)
  const [isButton2Active, setIsButton2Active] = useState(false)

  return (
    <section className="md:flex gap-6 my-14">
      <div className="lg:w-8/12 md:w-7/12 bg-white shadow-xl p-6 rounded-md mb-6 md:mb-0">
        <div className="flex gap-6">
          <button
            className={
              isButton1Active
                ? 'bg-gradient-to-r from-sky-600 to-sky-500 text-slate-50 p-2 px-4 rounded-md shadow-xl hover:bg-blue-700 hover:scale-95 duration-300'
                : ''
            }
            onClick={() => {
              setIsDescriptionVisible(true)
              setIsFeatureVisible(false)
              setIsButton1Active(true)
              setIsButton2Active(false)
            }}
          >
            Deskripsi
          </button>
          <button
            className={
              isButton2Active
                ? 'bg-gradient-to-r from-sky-600 to-sky-500 text-slate-50 p-2 px-4 rounded-md shadow-xl hover:bg-blue-700 hover:scale-95 duration-300'
                : ''
            }
            onClick={() => {
              setIsDescriptionVisible(false)
              setIsFeatureVisible(true)
              setIsButton1Active(false)
              setIsButton2Active(true)
            }}
          >
            Fitur
          </button>
        </div>
        {isDescriptionVisible && (
          <p className="py-2 mt-4">{product.description}</p>
        )}
        <div className="mt-4">
          {isFeatureVisible && (
            <ul>
              {product.feature.map((fitur, index) => (
                <div key={index}>
                  <li className="flex items-center gap-1 py-1">
                    <BsCheck2Circle color="#0284c7" /> {fitur}
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="lg:w-4/12 md:w-5/12">
        <div className="shadow-xl bg-white rounded-md p-6">
          <h1 className="text-center font-bold text-lg mb-4 bg-gradient-to-r from-blue-600 to-blue-500 text-slate-50 p-2 rounded-md">
            Detail Produk
          </h1>
          <ul className="list-none">
            {product.details.map((pd, index) => {
              return (
                <div key={index}>
                  <li className="py-2 border-slate-100 border-b-2">
                    <span className="font-bold">Author : </span>
                    {pd.author}
                  </li>
                  <li className="py-2 border-slate-100 border-b-2">
                    <span className="font-bold">Kategori : </span>
                    {pd.category}
                  </li>
                  <li className="py-2 border-slate-100 border-b-2">
                    <span className="font-bold">Database : </span>
                    {pd.database}
                  </li>
                  <li className="py-2 border-slate-100 border-b-2">
                    <span className="font-bold">Server : </span>
                    {pd.server}
                  </li>
                  <li className="py-2 border-slate-100 border-b-2">
                    <span className="font-bold">Teknologi : </span>
                    {pd.tech}
                  </li>
                  <li className="py-2 border-slate-100 border-b-2">
                    <span className="font-bold">Rilis : </span>
                    {pd.release}
                  </li>
                  <li className="py-2 border-slate-100 border-b-2">
                    <span className="font-bold">Update :</span> {pd.update}
                  </li>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails

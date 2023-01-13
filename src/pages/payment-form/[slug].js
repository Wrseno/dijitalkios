import paymentJSON from "../../data/payment/payments.json";
import productsJSON from "../../data/product/products.json";
import Layout from "../../layout";
import PaymentCard from "../../components/payment/paymentCard";

const FormPayment = ({ payments, product }) => {
  return (
    <>
      <>
        <Layout>
          <main className='w-full lg:px-64 my-24 md:px-32 p-4 bg-slate-100'>
            <PaymentCard
              payments={payments}
              product={product}
              key={product.id}
            />
          </main>
        </Layout>
      </>
    </>
  );
};

export default FormPayment;

function findProductBySlug(products, slug) {
  return products.find((product) => product.slug === slug);
}

export async function getStaticProps({ params }) {
  const products = productsJSON;
  const payments = paymentJSON;
  const product = findProductBySlug(products, params.slug);

  return {
    props: {
      product: product,
      payments,
    },
  };
}

export async function getStaticPaths() {
  const products = productsJSON;

  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
}

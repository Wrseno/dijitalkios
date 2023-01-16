import serviceJSON from "../../data/service/services.json";
import Layout from "../../layout";
import ServiceHeader from "../../components/service/details/serviceHeader";
import ServiceDetails from "../../components/service/details/serviceDetails";
import SidebarServiceCard from "../../components/sidebar/sidebarService";
import Head from "next/head";

const ServiceBySlug = ({ service }) => {
  const relatedServices = serviceJSON.filter(
    (s) => s.category === service.category && s.id !== service.id
  );

  const servicesSEO = service;

  const MetaSEO = () => {
    return (
      <>
        <meta name='description' content={servicesSEO.description} />
        <meta
          name='keywords'
          content={`${servicesSEO.category}, ${servicesSEO.category}, Jasa Pembuatan Website, HTML bukaolshop Gratis, Jual Script bukaolshop, jual html bo`}
        />
        <meta property='og:description' content={servicesSEO.description} />
        <meta name='twitter:title' content={servicesSEO.title} />
        <meta name='twitter:image' content='https://ibb.co/LQ9vpVh' />
        <meta name='twitter:image:alt' content='Script Web Topup Games'></meta>
        <meta name='twitter:description' content={servicesSEO.description} />
        <meta name='og:title' content={servicesSEO.title} />
        <meta property='og:description' content={servicesSEO.description} />
      </>
    );
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Semua Jasa | Dijital Kios</title>
          {MetaSEO()}
        </Head>

        <main className='w-full my-24 md:px-16 px-4'>
          <ServiceHeader key={service.id} service={service} />
          <ServiceDetails key={service.slug} service={service} />
          <section>
            <h1 className='font-extrabold text-xl md:text-2xl p-4'>
              Jasa Terkait
            </h1>
            <ul className='grid grid-cols-2 lg:grid-cols-3  gap-4'>
              {relatedServices.slice(0, 3).map((rs, index) => (
                <SidebarServiceCard key={index} services={rs} />
              ))}
            </ul>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ServiceBySlug;

function findServiceBySlug(services, slug) {
  return services.find((service) => service.slug === slug);
}

export async function getStaticProps({ params }) {
  const services = serviceJSON;
  const service = findServiceBySlug(services, params.slug);

  return {
    props: {
      service,
    },
  };
}

export async function getStaticPaths() {
  const services = serviceJSON;

  return {
    paths: services.map((service) => ({ params: { slug: service.slug } })),
    fallback: false,
  };
}

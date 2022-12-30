import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dijital Kios</title>
        <meta name='author' content='DijitalKios' />
        <meta
          name='keywords'
          content='dijitalkios, Dijitalkios, digitalkios, kiosdigital, script buka olshop, jual script web, jual html bukaolshop, script web top up'
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@dijitalkios' />
        <meta
          name='twitter:title'
          content='Dijitalkios website penyedia layanan dan jasa produk digital'
        />
        <meta name='twitter:image' content='https://ibb.co/LQ9vpVh' />
        <meta name='twitter:creator' content='Dijitalkios' />
        <meta name='twitter:image:alt' content='Script Web Topup Games'></meta>
        <meta
          name='twitter:description'
          content='Jasa pembuatan website murah, dan menjual script bukaolshop murah'
        />
        <meta
          name='description'
          content='Jasa pembuatan website murah, dan menjual script bukaolshop murah'
        />
        <meta
          name='og:title'
          content='Dijitalkios website penyedia layanan dan jasa produk digital'
        />
        <meta
          property='og:description'
          content='Jasa pembuatan website murah, dan menjual script bukaolshop murah'
        />
        <meta name='og:image' content='https://ibb.co/LQ9vpVh' />
        <meta name='og:url' content='' />
        <meta name='og:site_name' content='dijitalkios' />
        <link rel='icon' href='/images/dijitalkios-icon.png' />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

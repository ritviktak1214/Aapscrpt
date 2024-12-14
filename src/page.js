import Head from 'next/head';


import ProductList from '../../components/productlist';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Filter from '../../components/filter';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>My Product Page</title>
        <meta name="description" content="Welcome to my product page" />
        <meta property="og:title" content="My Product Page" />
        <meta property="og:description" content="Check out our amazing products" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header/>
      <h1 className="tagline" id="tagline">DISCOVER OUR PRODUCTS</h1>
      <span className='spanmsg'>Discover our product and unlock a world of possibilities where quality meets innovation. Designed with your needs in mind, our product offers unmatched performance, reliability, and style. Whether you're seeking to simplify your life, elevate your experiences, or explore new opportunities,
       our product is here to inspire and empower you. Experience the difference and see why discovery begins with us!"</span>
       <Filter/>
      {/* <main>
        <section className="product-list">
          <ProductList
            title="Product 2"
            image="/images/product2.jpg"
            price="$149"
          />
        </section>
      </main> */}
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
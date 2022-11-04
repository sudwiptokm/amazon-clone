import Head from "next/head";
import Banner from "../components/Header/Banner/Banner";
import Header from "../components/Header/Header";
import ProductFeed from "../components/ProductFeed/ProductFeed";
import axios from "axios";
import { data } from "autoprefixer";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Main */}
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await axios
    .get("https://fakestoreapi.com/products")
    .then((data) => data.data);

  return { props: { products } };
}

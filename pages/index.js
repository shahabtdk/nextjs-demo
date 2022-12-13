import Head from "next/head";
import CardContainer from "../components/Card";
import { CardWrapper } from "../components/Card/Card.styles";
const Home = ({ data }) => {
  return (
    <>
      <Head>
        <title>Next Demo</title>
        <meta name="description" content="Next JS Demo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Store Products</h1>
      <CardWrapper>
        {data.map((product) => (
          <CardContainer key={product.id} product={product} />
        ))}
      </CardWrapper>
    </>
  );
};

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default Home;

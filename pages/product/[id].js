import { useRouter } from "next/router";
import { ProductComponent } from "../../components/Product";

const Product = ({ product }) => {
  console.log(product);
  return <ProductComponent product={product} />;
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return {
    props: { product: data },
  };
}

// export async function getStaticPaths({ params }) {
//   console.log(params);
//   return {
//     paths: [{ params: { id: params } }],
//     fallback: false, // can also be true or 'blocking'
//   };
// }

// // `getStaticPaths` requires using 'getStaticProps'
// export async function getStaticProps(context) {
//   const res = await fetch(`https://fakestoreapi.com/products/${context.id}`);
//   const data = await res.json();
//   return {
//     // Passed to the page component as props
//     props: { product: data },
//   };
// }
export default Product;

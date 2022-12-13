import React from "react";

const Product = ({ product }) => {
  return <div>{product}</div>;
};

export async function getStaticPaths({ params }) {
  console.log(params);
  return {
    paths: [{ params: { id: params.id } }],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const res = await fetch(`https://fakestoreapi.com/products/${context.id}`);
  const data = await res.json();
  return {
    // Passed to the page component as props
    props: { product: data },
  };
}
export default Product;

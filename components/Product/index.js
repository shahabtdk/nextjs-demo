import {
  Wrapper,
  ProductImage,
  Grid,
  Heading,
  Description,
  Text,
  Category,
} from "./Product.styled";

export const ProductComponent = ({ product }) => {
  console.log(product);
  return (
    <Wrapper>
      <ProductImage src={product.image}></ProductImage>
      <Grid>
        <Category>{product.category}</Category>

        <Heading>{product.title}</Heading>
        <Text>{product.price}</Text>
        <Description>{product.description}</Description>
        <Text>{product.rating.rate}</Text>
        <Text>{product.rating.count}</Text>
      </Grid>
    </Wrapper>
  );
};

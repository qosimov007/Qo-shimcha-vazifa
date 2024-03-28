import { useRouter } from 'next/router';
import { getStaticProps } from 'next'; // or getServerSideProps

async function ProductDetails(props) {
  const router = useRouter();
  const { productId } = router.query;
  const { products } = props; // get products from props

  const product = products.find((product) => product.id === productId);

  return (
    <div>
      <h1>Product details for ID: {product.id}</h1>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      {/* ... other product details */}
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await fetch('/api/products'); // Replace with your API endpoint
  const products = await response.json();

  const { params } = context;
  const { productId } = params;

  const product = products.find((product) => product.id === productId);

  return {
    props: { products, product }, // Pass both product list and selected product
  };
}

export default ProductDetails;
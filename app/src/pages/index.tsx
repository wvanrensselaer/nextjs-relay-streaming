import type { GetServerSideProps, NextPage } from 'next';
import ProductList from '../blocks/ProductList';

const Home: NextPage = () => {
  return <ProductList />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});

import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { ProductListQuery } from '../__generated__/ProductListQuery.graphql';

const PRODUCT_LIST_QUERY = graphql`
  query ProductListQuery {
    products {
      id
      sku
      name
    }
  }
`;

export default function ProductList() {
  const data = useLazyLoadQuery<ProductListQuery>(PRODUCT_LIST_QUERY, {});

  return (
    <ul>
      {data.products.map(({ id, sku, name }) => (
        <li key={id}>
          {name} ({sku})
        </li>
      ))}
    </ul>
  );
}

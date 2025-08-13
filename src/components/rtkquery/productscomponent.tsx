import React from 'react';
import { useGetProductsQuery } from './api';

const ProductsListRTKComponent: React.FC = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
 
  return (
<ul>
      {products?.map((product) => (
<li key={product.ProductId}>{product.ProductName}</li>
      ))}
</ul>
  );
};
 
export default ProductsListRTKComponent;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductInfo } from '../../dataschema/props'; 

/*
RTK Query is a powerful data fetching and caching tool included in the Redux Toolkit package. It is designed to simplify common tasks involved in loading data in web applications by eliminating the need to write data fetching and caching logic manually.
Key points about RTK Query:
It provides a structured way to define API endpoints and handle data fetching, caching, and loading state automatically.
RTK Query uses Redux Toolkit’s APIs like createSlice and createAsyncThunk under the hood.
It offers both UI-agnostic APIs and React-specific APIs that automatically generate hooks for querying server data in React components.
RTK Query helps manage server state efficiently, detail how to fetch and transform data, and supports caching, request lifecycle management, and cache invalidation.
It is built with TypeScript support for type-safe API interactions.
RTK Query is recommended as the default approach for data fetching in Redux apps, improving developer productivity and app maintainability.
Overall, RTK Query abstracts away much of the complexity around asynchronous data handling in Redux-based applications, letting developers focus on the actual application logic rather than boilerplate data fetching code.
 


*/
 
// Create the API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coreapireact-argvg8edavfrb7fp.centralindia-01.azurewebsites.net/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductInfo[], void>({
      query: () => 'products',
    }),
    addProduct: builder.mutation<ProductInfo, Partial<ProductInfo>>({
      query: (newProduct) => ({
        url: 'products',
        contentType: 'application/json',
        method: 'POST',
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation<ProductInfo, Partial<ProductInfo> & Pick<ProductInfo, 'ProductId'>>({
      query: (updatedProduct) => ({
        url: `products/${updatedProduct.ProductId}`,
        contentType: 'application/json',
        method: 'PUT',
        body: updatedProduct,
      }),
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetProductsQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } = apiSlice;
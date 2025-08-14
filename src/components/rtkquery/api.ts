import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductInfo } from '../../dataschema/props'; 
 
// Create the API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coreapireact-argvg8edavfrb7fp.centralindia-01.azurewebsites.net/api' }),
  tagTypes: ['Post', 'Put', 'Delete'], // Declare tag types
  endpoints: (builder) => ({
    getProducts: builder.query<ProductInfo[], void>({
      query: () => 'products',
      providesTags: ['Post','Put', 'Delete'], // Tag the data
    }),
    addProduct: builder.mutation<ProductInfo, Partial<ProductInfo>>({
      query: (newProduct) => ({
        url: 'products',
        contentType: 'application/json',
        method: 'POST',
        body: newProduct,
      }),
       invalidatesTags: ['Post'], // Invalidate the tag
       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
          let patchResult;
         try {
           const { data } = await queryFulfilled; // Wait for server confirmation
           // Apply optimistic update
           // updateQueryData: Temporarily modifies cached data.
           patchResult = dispatch(apiSlice.util.updateQueryData('getProducts', undefined, (draft) => {
             draft.push(data);
           }));
         } catch (error) {
           console.error('Error adding product:', error);
           if (patchResult) {
             patchResult.undo(); // Roll back if request fails
           }
         }
       }  

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
import { createAction } from '@reduxjs/toolkit';
import { ProductInfo } from '../../dataschema/props';
import { productsDb } from '../database/db';

// Define action types
export const GET_PORDUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const GET_PRODUCT_BY_ID_SUCCESS = 'GET_PRODUCT_BY_ID_SUCCESS';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';

// Createtions 
export const getProducts = createAction(GET_PORDUCTS);
export const getProductsSuccess = createAction(GET_PRODUCTS_SUCCESS,(products:Array<ProductInfo>)=>{
    products = productsDb || [];
    return {
        payload: {
            products: products,
            message: `Fetched ${products.length} products successfully`
        }
    };
});

export const getProductById = createAction(GET_PRODUCT_BY_ID, (id: string) => {
    return {
        payload:  {
            id: id,
            message: `Fetching product with ID: ${id}`
        }
    };
});
// export const getProductByIdSuccess = createAction(GET_PRODUCT_BY_ID_SUCCESS, (product: ProductInfo) => {
//     return {
//         payload:  {
//             product: product,
//             message: `Product with ID: ${product.ProductId} fetched successfully`
//         }
//     };
// });

export const createProduct = createAction(CREATE_PRODUCT, (product: ProductInfo) => {
    return {
        payload:  {
            product: product,
            message: `Creating product with ID: ${product.ProductId}`
        }
    };
});
export const createProductSuccess = createAction(CREATE_PRODUCT_SUCCESS, (product: ProductInfo) => {
    return {
        payload:  {
            product: product,
            message: `Product with ID: ${product.ProductId} created successfully`
        }
    };
});
export const updateProduct = createAction(UPDATE_PRODUCT, (product: ProductInfo) => {
    return {
        payload:  {
            product: product,
            message: `Updating product with ID: ${product.ProductId}`
        }
    };
});
export const updateProductSuccess = createAction(UPDATE_PRODUCT_SUCCESS, (product: ProductInfo) => {
    return {
        payload:  {
            product: product,
            message: `Product with ID: ${product.ProductId} updated successfully`
        }
    };
});
export const deleteProduct = createAction(DELETE_PRODUCT, (id: string) => {
    return {
        payload:  {
            id: id,
            message: `Deleting product with ID: ${id}`
        }
    };
});
export const deleteProductSuccess = createAction(DELETE_PRODUCT_SUCCESS, (id: string) => {
    return {
        payload:  {
            id: id,
            message: `Product with ID: ${id} deleted successfully`
        }
    };
});
import { Action, createReducer, PayloadAction } from "@reduxjs/toolkit";

import { 
   getProducts,
   getProductsSuccess,
   getProductById,
   createProduct,
   createProductSuccess,
   updateProduct,
   updateProductSuccess,
   deleteProduct,
   deleteProductSuccess
} from '../actions';

import { ProductInfo } from '../../dataschema/props';
import { IState } from "../store";
import { productsDb } from "../database/db";
export const initialState: IState = {
    products: [],
    product: null as ProductInfo | null,
    message: ''
}
 
export const productReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getProducts, (state) => {
            state.message = 'Fetching products...';
        })
        .addCase(getProductsSuccess, (state, action) => {
            state.products = action.payload.products;
            state.message = action.payload.message;
        })
        .addCase(getProductById, (state, action) => {
            const index = state.products.findIndex(p => p.ProductId === action.payload.id);
            state.product = index !== -1 ? state.products[index] : null; 
            state.message = action.payload.message;
            console.log(`Product with ID: ${action.payload.id} fetched successfully ${JSON.stringify(state.product)}`);
        })
        // .addCase(getProductByIdSuccess, (state, action) => {
        //     state.product = action.payload.product;
        //     state.message = action.payload.message;
        // })
        .addCase(createProduct, (state, action) => {
            state.message = action.payload.message;
        })
        .addCase(createProductSuccess, (state, action) => {
            state.products.push(action.payload.product);
            state.message = action.payload.message;
        })
        .addCase(updateProduct, (state, action) => {
            state.message = action.payload.message;
        })
        .addCase(updateProductSuccess, (state, action) => {
            const index = state.products.findIndex(p => p.ProductId === action.payload.product.ProductId);
            if (index !== -1) {
                state.products[index] = action.payload.product;
            }
            state.message = action.payload.message;
        })
        .addCase(deleteProduct, (state, action) => {
            state.message = action.payload.message;
        })
        .addCase(deleteProductSuccess, (state, action) => {
            state.products = state.products.filter(p => p.ProductId !== action.payload.id);
            state.message = action.payload.message;
        });
})
 
import { Action, createReducer, PayloadAction } from "@reduxjs/toolkit";

import { 
   getProducts,
   getProductsSuccess,
   getProductById,
    getProductByIdSuccess,
   createProduct,
   createProductSuccess,
   updateProduct,
   updateProductSuccess,
   deleteProduct,
   deleteProductSuccess
} from '../actions';

import { ProductInfo } from '../../dataschema/props';
import { IState } from "../store";
export const initialState: IState = {
    products: [],
    product: {} as ProductInfo,
    canUpdate: false,
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
             state.canUpdate = action.payload.canUpdate;
        })
        .addCase(getProductByIdSuccess, (state, action) => {
            state.product = action.payload.product;
            state.canUpdate = action.payload.canUpdate;
            state.message = action.payload.message;
        })
        .addCase(createProduct, (state, action) => {
            state.message = action.payload.message;
        })
        .addCase(createProductSuccess, (state, action) => {
            let prod = action.payload.product;
            state.product = {...state.product, ProductRecordId: prod.ProductRecordId, ProductId: prod.ProductId, ProductName: prod.ProductName, CategoryName: prod.CategoryName, Description: prod.Description, UnitPrice: prod.UnitPrice};
            state.products.push(action.payload.product);
            state.message = action.payload.message;
            console.log(`Product with ID: ${prod.ProductId} created successfully ${JSON.stringify(prod)}`);
        })
        .addCase(updateProduct, (state, action) => {
            state.product = action.payload.product;
            state.canUpdate = action.payload.canUpdate;
            state.message = action.payload.message;
        })
        .addCase(updateProductSuccess, (state, action) => {
            const index = state.products.findIndex(p => p.ProductId === action.payload.product.ProductId);
            if (index !== -1) {
                state.products[index] = action.payload.product;
            }
            state.product = action.payload.product;
            state.canUpdate = action.payload.canUpdate;
            state.message = action.payload.message;
        })
        .addCase(deleteProduct, (state, action) => {
            state.message = action.payload.message;
        })
        .addCase(deleteProductSuccess, (state, action) => {
            state.products = state.products.filter(p => p.ProductId !== action.payload.product.ProductId);
            state.product = {} as ProductInfo; // Reset product after deletion
            state.message = action.payload.message;
        });
})
 
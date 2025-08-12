// The saga effects

import {all,takeLatest, call, put} from 'redux-saga/effects';
// Ensure the file exists at the correct path and the import matches the file name and casing
 import { ProductHttpService } from '../../services/producthtttpservice';



import { ProductInfo } from '../../dataschema/props';
import { 
   GET_PRODUCTS, 
    GET_PRODUCT_BY_ID, 
    CREATE_PRODUCT, 
    UPDATE_PRODUCT, 
    DELETE_PRODUCT, 
    getProductsSuccess,
    getProductByIdSuccess,
    createProductSuccess,
    updateProductSuccess,
    deleteProductSuccess
} from '../actions';
 

function* fetchProducts() {
    try {
        const productService = new ProductHttpService();
        const products: ProductInfo[] = yield call([productService, productService.getProducts]);
        yield put(getProductsSuccess(products));
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
function* fetchProductById(action:any) {
    try {
        const productService = new ProductHttpService();
        const product: ProductInfo = yield call([productService, productService.getProductById], action.payload.id);
        alert(`In Effect Fetching product with ID: ${action.payload.id}`);
        yield put(getProductByIdSuccess(product));
    } catch (error) {
        console.error('Error fetching product by ID:', error);
    }
}
function* createProduct(action:any) {
    try {
        const productService = new ProductHttpService();
        const product: ProductInfo = yield call([productService, productService.addProduct], action.payload.product);
        yield put(createProductSuccess(product));
    } catch (error) {
        console.error('Error creating product:', error);
    }
}
function* updateProduct(action:any) {
    try {
        const productService = new ProductHttpService();
        const product: ProductInfo = yield call([productService, productService.updateProduct], action.payload.product);
        yield put(updateProductSuccess(product));
    } catch (error) {
        console.error('Error updating product:', error);
    }
}
function* deleteProduct(action:any) {
    try {
        const productService = new ProductHttpService();
        yield call([productService, productService.deleteProduct], action.payload.product.ProductId);
        yield put(deleteProductSuccess(action.payload.product));
    } catch (error) {
        console.error('Error deleting product:', error);
    }
}
export function* watchProductActions() {
    yield all([
        takeLatest(GET_PRODUCTS, fetchProducts),
        takeLatest(GET_PRODUCT_BY_ID, fetchProductById),
        takeLatest(CREATE_PRODUCT, createProduct),
        takeLatest(UPDATE_PRODUCT, updateProduct),
        takeLatest(DELETE_PRODUCT, deleteProduct)
    ]);
}
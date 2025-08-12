import React  from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import ProductCreateComponent from "./productcreatecomponent";
import ProductListComponent from "./productlistcomponent";
import { getProductsSuccess } from "../actions";
import { ProductInfo } from "../../dataschema/props";
import { Dispatch } from 'redux';
import { IState } from "../store";

const MainReduxComponent = () => {
        const products:  any = useSelector(
        (state: IState) => state.products,
        shallowEqual
      );
    
    return (
        <div className="container">
            <h2>Product Management</h2>
            <ProductCreateComponent product={products.product} />
            <ProductListComponent  products={products.products} getData= {()=>{}} />
        </div>
    );
};
export default MainReduxComponent;
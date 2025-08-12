import React  from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import ProductCreateComponent from "./productcreatecomponent";
import ProductListComponent from "./productlistcomponent";
 
import { IState } from "../store";
import { getProducts } from "../actions";

const MainReduxSagaComponent = () => {
        const products:  any = useSelector(
        (state: IState) => state.products,
        shallowEqual
      );

        const dispatch = useDispatch();


    const handleGetProducts = React.useCallback((): void => {
            console.log("Fetching products...");
            dispatch(getProducts());
        }, [dispatch]);
    
    return (
        <div className="container">
            <h2>Product Management</h2>
            <ProductCreateComponent product={products.product} canUpdate={products.canUpdate} />
            <ProductListComponent  products={products.products} getData= {handleGetProducts} />
        </div>
    );
};
export default MainReduxSagaComponent;
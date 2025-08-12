import React, {useEffect, useState} from "react";
import { ProductInfo } from "../../dataschema/props";
import { getProductById } from "../actions";
import { useDispatch } from "react-redux";

type ProductListProps = {
    getData:Function,
    products:Array<ProductInfo>
};


const ProductListComponent=(props: ProductListProps)=>{
    useEffect(()=>{
     props.getData({...props.products});
    },[]);
    const dispatch = useDispatch();
    const handleProductClick = (productId: string) => {
        dispatch(getProductById( productId));
    };

    return (
       <div className="container alert alert-dark">
         
       <div className="table-responsive" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <table className="table table-bordered table-striped">
                <thead>
                     <tr>
                          <th>Product Id</th>
                          <th>Product Name</th>
                          <th>Category Name</th>
                          <th>Description</th>
                          <th>Unit Price</th>
                     </tr>
                </thead>
               <tbody>
                {Array.isArray(props.products) &&
                    props.products.map((prod: ProductInfo, index: number) => (
                    <tr key={index} onClick={() => handleProductClick(prod.ProductId)}>
                        <td>{prod.ProductId}</td>
                        <td>{prod.ProductName}</td>
                        <td>{prod.CategoryName}</td>
                        <td>{prod.Description}</td>
                        <td>{prod.UnitPrice}</td>
                    </tr>
                    ))}
                </tbody>
              </table>
       </div> 
       </div>
    );

};
export default ProductListComponent;
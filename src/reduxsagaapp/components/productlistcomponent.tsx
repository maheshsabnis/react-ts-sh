import React, {useEffect, useState} from "react";
import { ProductInfo } from "../../dataschema/props";
import { deleteProduct, getProductById } from "../actions";
import { useDispatch } from "react-redux";

type ProductListProps = {
    getData:Function,
    products:Array<ProductInfo>
};


const ProductListComponent=(props: ProductListProps)=>{
    useEffect(()=>{
     props.getData({...props.products});
        console.log("Fetching products in ProductListComponent...");
    },[]);
    const dispatch = useDispatch();
    const handleProductClick = (productId: string) => {
        dispatch(getProductById( productId));
    };
    const handleDeleteProduct = (product: ProductInfo) => {
         dispatch(deleteProduct(product));
    };

    return (
       <div className="container alert alert-dark">
         
       <div className="table-responsive" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <table className="table table-bordered table-striped">
                <thead>
                     <tr>
                         <th>Product Record Id</th>
                          <th>Product Id</th>
                          <th>Product Name</th>
                          <th>Category Name</th>
                          <th>Description</th>
                          <th>Unit Price</th>
                          <th>Actions</th>
                     </tr>
                </thead>
               <tbody>
                {Array.isArray(props.products) &&
                    props.products.map((prod: ProductInfo, index: number) => (
                    <tr key={index} onClick={() => handleProductClick(prod.ProductId)}>
                        <td>{prod.ProductRecordId}</td>
                        <td>{prod.ProductId}</td>
                        <td>{prod.ProductName}</td>
                        <td>{prod.CategoryName}</td>
                        <td>{prod.Description}</td>
                        <td>{prod.UnitPrice}</td>
                        <td>
                            <button className="btn btn-danger" onClick={(e) => { e.stopPropagation(); handleDeleteProduct(prod); }}>X</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
              </table>
       </div> 
       </div>
    );

};
export default ProductListComponent;
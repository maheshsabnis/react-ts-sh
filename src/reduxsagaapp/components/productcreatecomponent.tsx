import React, {useEffect, useState} from "react";
import { ProductInfo } from "../../dataschema/props";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct } from "../actions";
import { IState } from "../store";

type productProp = {
    product: ProductInfo,
    canUpdate: boolean
}

const ProductCreateComponent=(props: productProp)=>{
     
    const [product,setProduct] = useState<ProductInfo>(
        new ProductInfo("", "", "", "", 0, 0));
    const [canUpdate,setCanUpdate] = useState<boolean>(false);
    const categories = ["Electronics", "Books", "Clothing", "Sports"];

    const dispatch = useDispatch();
    useEffect(() => {
        if (props.product) {
            setProduct(props.product);
        }
        setCanUpdate(props.canUpdate);
    }, [props.product, props.canUpdate]);

    const addProduct = () => {
        dispatch(createProduct(product));
    };
    const editProduct = () => {
        dispatch(updateProduct(product));
    }
    const clearForm = () => {
        setProduct(new ProductInfo("", "", "", "", 0, 0));
    }
    return (
       <div className="container alert alert-dark">
         <div className="form-group">
             <label htmlFor="ProductRecordId">Product Row Id:</label>
             <input type="text" className="form-control" id="ProductRecordId"
                value={product.ProductRecordId ?? 0} readOnly
                onChange={(e) => setProduct({...product, ProductRecordId: parseInt(e.target.value)})}></input>
        </div>
         <div className="form-group">
             <label htmlFor="ProductId">Product Id:</label>
             <input type="text" className="form-control" id="ProductId"
                value={product.ProductId ?? ""}
                onChange={(e) => setProduct({...product, ProductId: e.target.value})}></input>
        </div>
        <div className="form-group">
            <label htmlFor="ProductName">Product Name:</label>
            <input type="text" className="form-control" id="ProductName"
            value={product.ProductName ?? ""}
            onChange={(e) => setProduct({...product, ProductName: e.target.value})}></input>
        </div>
        <div className="form-group">
            <label htmlFor="CategoryName">Category Name:</label>
            <select className="form-select" id="CategoryName"
                value={product.CategoryName ?? ""}
                onChange={(e) => setProduct({...product, CategoryName: e.target.value})}>
                    <option value="">Select Category</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="Description">Description:</label>
            <textarea  className="form-control" id="Description"
            value={product.Description ?? ""}
            onChange={(e) => setProduct({...product, Description: e.target.value})}></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="UnitPrice">Unit Price:</label>
            <input type="number" className="form-control" id="UnitPrice"
            value={product.UnitPrice ?? 0}
            onChange={(e) => setProduct({...product, UnitPrice: parseFloat(e.target.value)})}></input>
       </div>
       <div className="btn-group-lg">
            {canUpdate ? (
                <button className="btn btn-success" onClick={editProduct}>Update Product</button>
            ) : (
                <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
            )}
            <button className="btn btn-secondary" onClick={clearForm}>Clear Form</button>
       </div>
       <br/>
       
       </div>
    );

};
export default ProductCreateComponent;
import React, {useState} from "react";
import { ProductInfo, SelectData } from "../dataschema/props";

const ProductComponent=()=>{
    const [product,setProduct] = useState<ProductInfo>(
        new ProductInfo("", "", "", "", 0, 0));
    const [products,setProducts] = useState<ProductInfo[]>([]);
    const categories = ["Electronics", "Books", "Clothing", "Sports"];
    const addProduct=()=>{
        setProducts([...products, {...product}]);
        setProduct(new ProductInfo("", "", "", "", 0, 0)); // Reset the form
    }
    const clearForm=()=>{
        setProduct(new ProductInfo("", "", "", "", 0, 0));
    }
    return (
       <div className="container alert alert-dark">
         <div className="form-group">
             <label htmlFor="ProductRecordId">Product Id:</label>
             <input type="text" className="form-control" id="ProductRecordId"
                value={product.ProductRecordId}
                onChange={(e) => setProduct({...product, ProductRecordId: parseInt(e.target.value)})}></input>
        </div>
         <div className="form-group">
             <label htmlFor="ProductId">Product Id:</label>
             <input type="text" className="form-control" id="ProductId"
                value={product.ProductId}
                onChange={(e) => setProduct({...product, ProductId: e.target.value})}></input>
        </div>
        <div className="form-group">
            <label htmlFor="ProductName">Product Name:</label>
            <input type="text" className="form-control" id="ProductName"
            value={product.ProductName}
            onChange={(e) => setProduct({...product, ProductName: e.target.value})}></input>
        </div>
        <div className="form-group">
            <label htmlFor="CategoryName">Category Name:</label>
            <select className="form-select" id="CategoryName"
                value={product.CategoryName}
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
            value={product.Description}
            onChange={(e) => setProduct({...product, Description: e.target.value})}></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="UnitPrice">Unit Price:</label>
            <input type="number" className="form-control" id="UnitPrice"
            value={product.UnitPrice}
            onChange={(e) => setProduct({...product, UnitPrice: parseFloat(e.target.value)})}></input>
       </div>
       <div className="btn-group-lg">
              <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
              <button className="btn btn-secondary" onClick={clearForm}>Clear Form</button> 
       </div>
       <br/>
       <div className="table-responsive">
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
                     {products.map((prod, index) => (
                          <tr key={index}>
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
export default ProductComponent;
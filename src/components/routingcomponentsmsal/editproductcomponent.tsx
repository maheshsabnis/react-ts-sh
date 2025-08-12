import React, {useState, useEffect} from 'react';
import { ProductInfo } from '../../dataschema/props';
import { ProductHttpService } from '../../services/producthtttpservice';
import { useNavigate, useParams } from 'react-router-dom';
const EditProductMSALComponent = () => {
    const [product, setProduct] = useState<ProductInfo>({
        ProductRecordId:0,
        ProductId: '',
        ProductName: '',
        CategoryName: '',
        Description: '',
        UnitPrice: 0
    });

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchProduct = async () => {
            if (id) {
                const serv = new ProductHttpService();
                const response = await serv.getProductById(id);
                setProduct(response);
            }
        };
        fetchProduct();
    }, [id]);

    const serv = new ProductHttpService();
 const categories = ["Electronics", "Books", "Clothing", "Sports"];
  const navigate = useNavigate();
  const editProduct=()=>{
         serv.updateProduct(product).then(newProduct => {
             setProduct(new ProductInfo("", "", "", "", 0, 0)); // Reset the form
             navigate(`/`);
         });
     }
     const clearForm=()=>{
         setProduct(new ProductInfo("", "", "", "", 0, 0));
     }
    
    return (
        <div>
           <div className="form-group">
             <label htmlFor="ProductRecordId">Product Row Id:</label>
             <input type="text" className="form-control" id="ProductRecordId"
                value={product.ProductRecordId}
                readOnly></input>
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
              <button className="btn btn-primary" onClick={editProduct}>Edit Product</button>
              <button className="btn btn-secondary" onClick={clearForm}>Clear Form</button> 
       </div>
       <br/>
       <div className='container'>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>
             Back to List Products
          </button>
       </div>
        </div>
    );
}

export default EditProductMSALComponent;
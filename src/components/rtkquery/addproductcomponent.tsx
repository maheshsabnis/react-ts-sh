import React,{useState} from 'react'
import { useAddProductMutation } from './api'
import { ProductInfo } from '../../dataschema/props';
const AddProductRTKComponent = () => {
  const [newProduct, setNewProduct] = useState<ProductInfo>(new ProductInfo('Prod-98765','Pen', 'Electronics','Light Pen',13333,0));
  const [addProduct] = useAddProductMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prd = new ProductInfo('Prod-98765','Pen', 'Electronics','Light Pen',13333,0);
    addProduct({
        ProductId: prd.ProductId,
        ProductName: prd.ProductName,
        CategoryName: prd.CategoryName,
        Description: prd.Description,
        UnitPrice: prd.UnitPrice
    });
  };
  return (
    <div className='container'>
       <button onClick={handleSubmit}>Add Product</button>
    </div>
  )
}

export default AddProductRTKComponent;

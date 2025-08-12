import React, {useState, useEffect} from 'react';
import { ProductHttpService } from '../../services/producthtttpservice';
import { ProductInfo } from '../../dataschema/props';
import { useNavigate } from 'react-router-dom';
const ListProductComponent=()=>{
    const [products, setProducts] = useState<ProductInfo[]>([]);
    const serv = new ProductHttpService();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await serv.getProducts();
            setProducts(response);
        };
        fetchProducts();
    }, []);

    const navigateToEdit=(id:string)=>{
        navigate(`/edit/${id}`);
    }

    const deleteProduct = async (productId: string) => {
        await serv.deleteProduct(productId);
        setProducts(products.filter(product => product.ProductId !== productId));
    }

    return (
        <div>
            <h2>List of Products</h2>
            <div className="table-responsive" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <table className="table table-bordered table-striped">
                <thead>
                     <tr>
                          <th>Product Id</th>
                          <th>Product Name</th>
                          <th>Category Name</th>
                          <th>Description</th>
                          <th>Unit Price</th>
                            <th></th>
                            <th></th>
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
                            <td>
                                <button className="btn btn-primary" 
                                onClick={() => navigateToEdit(prod.ProductId)}>
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-danger" 
                                onClick={() => deleteProduct(prod.ProductId)}>
                                    Delete
                                </button>
                            </td>
                          </tr>
                     ))}
                </tbody>
              </table>
       </div>
        </div>
    );
}

export default ListProductComponent;
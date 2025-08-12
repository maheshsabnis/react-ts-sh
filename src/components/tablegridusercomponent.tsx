import React,{useState, useEffect} from "react";
import { ProductInfo } from "../dataschema/props";
import { DataSchemaContext } from "../dataschema/datacontext";
import { ProductHttpService } from "../services/producthtttpservice";
import DataGridTableContextComponent from "./reusablecomponents/datagridtablecontextcomponent";
const TableGridUserComponent = () => {
    const serv = new ProductHttpService();
    const [products, setDataSchema] = React.useState<Array<ProductInfo>>([]);
    const [product, setProduct] = useState<ProductInfo | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await serv.getProducts();
            setDataSchema(data);
        };
        fetchData();
    }, []);

     
     

    return (
        <div className="container">
            <h2>User Table</h2>
            {
                  JSON.stringify(product)
            }
            <DataSchemaContext.Provider value={{ dataSource: products,setDataSchema: setProduct }}>
                <DataGridTableContextComponent />
            </DataSchemaContext.Provider>
        </div>
    );
};

export default TableGridUserComponent;

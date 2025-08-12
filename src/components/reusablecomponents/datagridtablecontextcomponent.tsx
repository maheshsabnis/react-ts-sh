import React, {useContext} from "react";  

import { DataSchemaContext } from "../../dataschema/datacontext";
const DataGridTableContextComponent =()=>{
    // 1. Subscribe to the DataSchemaContext
    const dataSchemaContext = useContext(DataSchemaContext);
    // 2. Read the dataSource from the context
    const dataSource = dataSchemaContext?.dataSource || [];
    if (dataSource.length === 0) {
        return <div>No data available</div>;
    }
    // 3. Read keys from the first item in the dataSource
    const keys = Object.keys(dataSource[0]);
     
    // 4. Read the setDataSchema function from the context
    const event = dataSchemaContext?.setDataSchema;

    return (
        <div className="contaner">
           <table className="table table-bordered table-striped">
               <thead>
                   <tr>
                       {keys.map((key) => (
                           <th key={key}>{key}</th>
                       ))}
                   </tr>
               </thead>
               <tbody>

                   {dataSource.map((item, index) => (
                       <tr key={index} onClick={() => event(item)}>
                           {keys.map((key) => (
                               <td key={key}>{item[key]}</td>
                           ))}
                       </tr>
                   ))}
               </tbody>
           </table>
        </div>
    )
}  
export default DataGridTableContextComponent;
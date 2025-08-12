import { createContext } from "react";

export interface DataSchemaContextType {
  dataSource: Array<any>; // Replace 'any' with the actual type of your data schema
    setDataSchema: (data: any) => void; // Function to update the data schema
}

export const DataSchemaContext = createContext<DataSchemaContextType>({
    dataSource: [],
    setDataSchema: (data:any) => {}
});

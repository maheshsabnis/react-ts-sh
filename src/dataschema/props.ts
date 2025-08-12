export type Props = {
    info:string
}

export type SelectData = {
   dataSource: string[];
   propertyName?: string; // Optional property for additional data
   selectedValue?: (value:string) => void; 
};


export class ProductInfo {
     constructor(
        public ProductId: string,
        public ProductName: string,
        public CategoryName: string,
        public Description: string,
        public UnitPrice: number,
        public ProductRecordId: number
     ){}
}


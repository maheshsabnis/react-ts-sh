import { ProductInfo } from "../../dataschema/props";

export interface IState  {
    products:  ProductInfo[],
    product: ProductInfo | null,
    canUpdate: boolean,
    message: string
}
 
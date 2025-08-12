import { ProductInfo } from "../dataschema/props";
import axios from "axios";

export class ProductHttpService {
    private baseUrl: string = "https://coreapireact-argvg8edavfrb7fp.centralindia-01.azurewebsites.net/api/products";

    async getProducts(): Promise<ProductInfo[]> {
        const response = await axios.get<ProductInfo[]>(this.baseUrl);
        return response.data;
    }
    async getProductById(id: string): Promise<ProductInfo> {
        const response = await axios.get<ProductInfo>(`${this.baseUrl}/${id}`);
        return response.data;
    }

    async addProduct(product: ProductInfo): Promise<ProductInfo> {
        const response = await axios.post<ProductInfo>(this.baseUrl, product);
        return response.data;
    }

    async updateProduct(product: ProductInfo): Promise<ProductInfo> {
        const response = await axios.put<ProductInfo>(`${this.baseUrl}/${product.ProductId}`, product);
        return response.data;
    }

    async deleteProduct(productId: string): Promise<void> {
        await axios.delete(`${this.baseUrl}/${productId}`);
    }
}

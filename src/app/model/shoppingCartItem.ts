import { GetProductImageResponse } from './getProductImageResponse';

export interface ShoppingCartItem{

        id: number;
        name: string;
        categoryName: string;
        price: number;
        quantity: number;
        totalItemPrice: number;
        images:Array<GetProductImageResponse>;

}

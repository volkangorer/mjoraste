import { ShoppingCartItem } from "./shoppingCartItem";

export interface Card {
    id: number;
    userId: number;
    cartItems: Array<ShoppingCartItem>;
    totalPrice: number;
}

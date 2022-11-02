export interface CartItem {
    price: number
    image: string;
    pizzaFlavor: string;
    pizzaSize: 'normal' | 'large',
    quantity: number,
    catupiryBorder: boolean;
}

export interface CartState {
    cart: CartItem[]
}
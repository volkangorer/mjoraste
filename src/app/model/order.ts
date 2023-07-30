export interface Order {

      id: number,
      orderCode: string,
      orderDate: string,
      orderItems: [
        {
          id: number,
          quantity: number,
          totalItemPrice: number
        }
      ],
      orderStatus: boolean,
      order_status:string,
      shippingAddress: {
        city: string,
        fullAddress: string,
        id: number,
        town: string,
        user: {
          cart: {
            cartItems: [
              {
                id: number,
                product: {
                  color: string,
                  description: string,
                  id: number,
                  images: [
                    {
                      id: number,
                      imageUrl: string
                    }
                  ],
                  name: string,
                  price: number,
                  size: string,
                  stock: number
                },
                quantity: number,
                totalItemPrice: number
              }
            ],
            id: number,
            totalPrice: number
          },
          email: string,
          id: 0,
          isAdmin: boolean,
          name: string,
          password: string,
          phoneNumber: string,
          surName: string
        }
      },
      totalPrice: number,
      userId: number

}

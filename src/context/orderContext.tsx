import { ReactNode, createContext, useState } from "react";
import { ProductProps } from "@/interfaces/productInterface";
import { OrderContextProps, OrderContextType } from "../interfaces/productInterface"


export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProps) {

    const [productsList, setProductsList] = useState<ProductProps[]>([])

    function addToCart(newProduct: ProductProps) {

        const productExisting = productsList.some(product => product.id === newProduct.id)

        if (!productExisting) {
            setProductsList((oldProduct) => [...oldProduct, newProduct])
        }
    }

    return (
        <OrderContext.Provider value={{
            productsList,
            setProductsList,
            addToCart
        }}>
            {children}
        </OrderContext.Provider>
    )
}
import { stripe } from "@/lib/stripe";
import axios from "axios";
import { ReactNode, createContext, useState, useEffect } from "react";
import { ProductProps } from "@/interfaces/productInterface";

export interface OrderContextProps {
    children: ReactNode
}

export interface OrderContextType {
    productsList: ProductProps[]
    setProductsList: React.Dispatch<React.SetStateAction<ProductProps[]>>
    addToCart: (newProduct: ProductProps) => void
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProps) {

    const [productsList, setProductsList] = useState<ProductProps[]>([])

    function addToCart(newProduct: ProductProps) {

        const productExisting = productsList.some(product => product.id === newProduct.id)

        if (!productExisting) {
            productsList.push(newProduct)
            setProductsList(productsList)
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
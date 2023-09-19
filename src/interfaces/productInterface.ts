import { ReactNode } from "react"

export interface ProductProps {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    description?: string,
    defaultPrice: string,
}

export interface OrderContextProps {
    children: ReactNode
}

export interface OrderContextType {
    productsList: ProductProps[]
    setProductsList: React.Dispatch<React.SetStateAction<ProductProps[]>>
    addToCart: (newProduct: ProductProps) => void
}

export interface HomeProps {
    products: ProductProps[]
}

export interface SuccessProps {
    customerName: string
    products: any
}
export interface ProductProps {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    description?: string,
    defaultPriceId: string,
}
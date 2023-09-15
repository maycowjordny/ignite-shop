import Image from "next/image";
import { ContainerOrderDetails, ImageContainer, InfoProduct } from "./styles";
import { priceToCurrency } from "@/utils/priceUtils";
import { ProductProps } from "@/interfaces/productInterface";
import { useContext } from 'react'
import { OrderContext } from "@/context/orderContext";

export function OrderDetails(props: { data: ProductProps }) {

    const { productsList, setProductsList } = useContext(OrderContext)

    function deleteProduct(productId: string) {
        const productDeleted = productsList.filter(product => product.id !== productId)
        setProductsList(productDeleted)
    }

    return (
        <ContainerOrderDetails>
            <ImageContainer>
                <Image src={props.data.imageUrl} alt="" height={96} width={96} />
            </ImageContainer>
            <InfoProduct>
                <div>
                    <span>{props.data.name}</span>
                    <strong>{priceToCurrency(props.data.price)}</strong>
                </div>
                <button onClick={() => deleteProduct(props.data.id)}>Remover</button>
            </InfoProduct>
        </ContainerOrderDetails>
    )
}
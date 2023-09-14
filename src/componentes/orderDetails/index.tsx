import Image from "next/image";
import { ContainerOrderDetails, ImageContainer, InfoProduct } from "./styles";
import { priceToCurrency } from "@/utils/priceUtils";
import { ProductProps } from "@/pages";



export function OrderDetails(props: { data: ProductProps }) {

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
                <button>Remover</button>
            </InfoProduct>
        </ContainerOrderDetails>
    )
}
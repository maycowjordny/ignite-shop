import Image from "next/image";
import { ContainerOrderDetails, ImageContainer, InfoProduct } from "./styles";
import camisa1 from "../../assets/1.png"
export function OrderDetails() {
    return (
        <ContainerOrderDetails>
            <ImageContainer>
                <Image src={camisa1} alt="" height={96} width={96} />
            </ImageContainer>
            <InfoProduct>
                <div>
                    <span>Camiseta Explorer</span>
                    <strong>R$ 79,90</strong>
                </div>
                <button>Remover</button>
            </InfoProduct>
        </ContainerOrderDetails>
    )
}
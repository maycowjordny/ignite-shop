import * as Dialog from '@radix-ui/react-dialog';
import { OrderDetails } from "../orderDetails"
import { CloseButton, Content, Overlay, TitleModal } from './styles';
import { X } from "phosphor-react"
export function OrderModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <CloseButton>
                    <X size={24} color="#8D8D99" />
                </CloseButton>
                <TitleModal>Sacola de compras</TitleModal>
                <OrderDetails />
                <OrderDetails />
                <OrderDetails />
                <div className="quantity">
                    <span>Quantidade</span>
                    <p>3 itens</p>
                </div>
                <div className="totalAmount">
                    <strong>Valor total</strong>
                    <strong>R$ 270,00</strong>
                </div>

            </Content>
        </Dialog.Portal>
    )
}
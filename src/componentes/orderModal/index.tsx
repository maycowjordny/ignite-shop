import * as Dialog from '@radix-ui/react-dialog';
import { OrderDetails } from "../orderDetails"
import { CloseButton, Content, Overlay, TitleModal } from './styles';
import { X } from "phosphor-react"
import { useContext } from 'react'
import { OrderContext } from "@/context/orderContext";
import { priceToCurrency } from '@/utils/priceUtils';

export function OrderModal() {

    const { productsList } = useContext(OrderContext)


    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <div className="scroll">
                    <CloseButton>
                        <X size={24} color="#8D8D99" />
                    </CloseButton>
                    <TitleModal>Sacola de compras</TitleModal>
                    {
                        productsList.map(product => (
                            < OrderDetails
                                key={product.id}
                                data={product}
                            />
                        ))
                    }
                    <div className="orderWrapper">
                        <div className="quantity">
                            <span>Quantidade</span>
                            <p>{productsList.length} itens</p>
                        </div>
                        <div className="totalAmount">
                            <span>Valor total</span>
                            <strong>{priceToCurrency(productsList.reduce((sum, current) => sum + current.price, 0))}</strong>
                        </div>
                        <button id='buttonPayment' >
                            Finalizar compra
                        </button>
                    </div>
                </div>
            </Content>
        </Dialog.Portal>
    )
}
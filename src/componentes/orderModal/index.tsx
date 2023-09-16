import * as Dialog from '@radix-ui/react-dialog';
import { OrderDetails } from "../orderDetails"
import { CloseButton, Content, Overlay, TitleModal } from './styles';
import { X } from "phosphor-react"
import { useContext } from 'react'
import { OrderContext } from "@/context/orderContext";
import { priceToCurrency } from '@/utils/priceUtils';
import axios from 'axios';
import Image from 'next/image';
import shirt1 from "../../assets/1.png"
import shirt2 from "../../assets/2.png"
import shirt3 from "../../assets/3.png"

export function OrderModal() {

    const { productsList } = useContext(OrderContext)

    async function finalizePayment() {
        try {

            const items = productsList.map(p => {
                return {
                    price: p.defaultPrice,
                    quantity: 1
                }
            })

            const response = await axios.post('/api/checkout', {
                data: items
            })

            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl;
        } catch (err) {

            alert('Falha ao redirecionar ao checkout!')
        }
    }

    const totalAmount = priceToCurrency(productsList.reduce((sum, current) => sum + current.price, 0))

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <div className="scroll">

                    {
                        productsList.length >= 1 ?
                            <>
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
                                        <strong>{totalAmount}</strong>
                                    </div>
                                    <button id='buttonPayment' onClick={finalizePayment} >
                                        Finalizar compra
                                    </button>
                                </div>
                            </>
                            :
                            <>
                                <CloseButton>
                                    <X size={24} color="#8D8D99" />
                                </CloseButton>
                                <div className='withoutTshirt'>
                                    <h1>Adicione camisas ao seu carrinho</h1>
                                    <div className='shirtWrapper'>
                                        <Image src={shirt1} alt="" width={110} height={120} />
                                        <Image src={shirt2} alt="" width={110} height={120} />
                                        <Image src={shirt3} alt="" width={110} height={120} />
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </Content>

        </Dialog.Portal>
    )
}
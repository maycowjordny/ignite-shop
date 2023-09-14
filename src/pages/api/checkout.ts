import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { OrderContext } from "@/context/orderContext";
import { useContext } from 'react'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { productsList } = useContext(OrderContext)
    const { priceId } = req.body;

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Price not allowed.' })
    }

    if (!priceId) {
        return res.status(400).json({ error: 'Price not found.' })
    }

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_URL}/`;

    const items = productsList.map(product => {
        return {
            price: product.defaultPrice,
            quantity: 1
        }
    })

    console.log(items);
    const checkoutSessions = await stripe.checkout.sessions.create({
        cancel_url: cancelUrl,
        success_url: successUrl,
        mode: 'payment',
        line_items: items
    })

    return res.status(201).json({
        checkoutUrl: checkoutSessions.url,
    })
}
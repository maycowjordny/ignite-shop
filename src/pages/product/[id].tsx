import Stripe from "stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { stripe } from "../../lib/stripe";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useState, useContext } from "react";
import Head from "next/head";
import { OrderContext } from "@/context/orderContext";
import { ProductProps } from "@/interfaces/productInterface";
import { priceToCurrency } from "@/utils/priceUtils";


export default function Product(product: ProductProps) {

    const { addToCart, productsList, setProductsList } = useContext(OrderContext)

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>

            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{priceToCurrency(product.price)}</span>

                    <p>{product.description}</p>

                    <button onClick={() => addToCart(product)}>
                        Comprar agora
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_MLH5Wy0Y97hDAC' } },
        ],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    if (!params) {
        return {
            notFound: true
        }
    }

    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price;

    return {
        props: {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: price.unit_amount,
            description: product.description,
            defaultPriceId: price.id

        },
        revalidate: 60 * 60 * 1
    }
}
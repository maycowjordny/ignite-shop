import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import Stripe from "stripe"
import Head from "next/head";
import { OrderContext } from "@/context/orderContext"
import { useContext } from 'react'
import { ProductProps } from "@/interfaces/productInterface"


export default function Product(product: ProductProps) {

    const { addToCart } = useContext(OrderContext)

    return (
        <>
            <Head>
                <title>{product.description} | Ignite Shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} alt="" width={520} height={400} />
                </ImageContainer>
                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>
                    <p>{product.description}</p>
                    <button >
                        Colocar na sacola
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

    if (!params) {
        return {
            notFound: true
        }
    }

    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price,
                description: product.description,
                defaultPriceId: price.id
            }
        },
        revalidate: 60 * 60 * 1 // 1 hour 
    }

}






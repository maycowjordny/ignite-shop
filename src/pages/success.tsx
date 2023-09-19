import { stripe } from "@/lib/stripe";
import { SuccessContainer, ImageContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { SuccessProps } from "@/interfaces/productInterface";

export default function Success({ products, customerName }: SuccessProps) {
    return (
        <>
            <Head>
                <title>Compra efetuada com sucesso | Ignite Shop</title>
                <meta name="robots" content="noindex" />
            </Head>
            <SuccessContainer>
                <h1>Compra efetuada!</h1>
                <div className="imageWrapper">
                    {
                        products.map((data: any) => (
                            < ImageContainer >
                                <Image src={data.price.product.images[0]} alt="imagem de uma camisa" width={110} height={120} />
                            </ImageContainer>
                        ))
                    }
                </div>
                <p>
                    Uhuul <strong>{customerName}</strong>,  sua compra de {products.length + ` camiseta`}{products.length > 1 ? 's' : null} já está a caminho da sua casa.
                </p>
                <Link href="/">
                    Voltar ao catálogo
                </Link>
            </SuccessContainer >
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }
    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details?.name
    const products = session.line_items?.data
    console.log(products);

    return {
        props: {
            customerName,
            products
        }
    }
}

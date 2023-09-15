import { styled } from "@/styles"
import { HomeContainer, Product } from "@/styles/pages/home"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image';
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Head from "next/head";
import Stripe from "stripe";
import Link from "next/link";
import { Tote } from 'phosphor-react';
import { useContext } from 'react'
import { OrderContext } from "@/context/orderContext";
import axios from "axios";
import { priceToCurrency } from "@/utils/priceUtils";
import { ProductProps } from "@/interfaces/productInterface";

export interface HomeProps {
  products: ProductProps[]
}

export default function Home({ products }: HomeProps) {

  const { addToCart, productsList } = useContext(OrderContext)
  console.log(productsList, "lista da pagina home");
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {

          return (
            <Product className="keen-slider__slide" key={product.id}>
              <Link href={`/product/${product.id}`} prefetch={false}  >
                <Image src={product.imageUrl} alt="" width={520} height={480} />
              </Link>
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{priceToCurrency(product.price)}</span>
                </div>
                <button onClick={() => addToCart(product)}>
                  <Tote size={24} color="#ffff" weight="bold" />
                </button>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  })


  const products = response.data.map(product => {

    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      defaultPrice: price.id,
      description: product.description
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
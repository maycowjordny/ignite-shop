import { HomeContainer, Product } from "@/styles/pages/home"
import Image from 'next/image';
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Head from "next/head";
import Stripe from "stripe";
import Link from "next/link";
import { CaretLeft, CaretRight, Tote } from 'phosphor-react';
import { useContext, useState } from 'react'
import { OrderContext } from "@/context/orderContext";
import { priceToCurrency } from "@/utils/priceUtils";
import { HomeProps } from "@/interfaces/productInterface";
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"

export default function Home({ products }: HomeProps) {

  const [showArrowLeft, setShowArrowLeft] = useState(false)
  const [showArrowRight, setShowArrowRight] = useState(true)
  const { addToCart } = useContext(OrderContext)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setShowArrowLeft(slider.animator.targetIdx != slider.track.details.minIdx);
      setShowArrowRight(slider.animator.targetIdx != slider.track.details.maxIdx);
    },
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

        {
          showArrowLeft ?
            <button
              className="button-left"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()}>
              <CaretLeft size={42} weight="bold" color="#C4C4CC" />
            </button>
            :
            null
        }
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
        {
          showArrowRight ?
            <button
              className="button-right"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()}>
              <CaretRight size={42} weight="bold" color="#C4C4CC" />
            </button>
            :
            null
        }
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
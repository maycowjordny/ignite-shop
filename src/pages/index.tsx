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

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {

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
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}  >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} alt="" width={520} height={480} />
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>

                  </div>
                  <button>
                    <Tote size={24} color="#ffff" weight="bold" />
                  </button>

                </footer>
              </Product>
            </Link>
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
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format((Number(price.unit_amount) / 100)),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
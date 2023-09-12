import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import logoImg from "../assets/logo.svg"
import { Container, Header } from '@/styles/pages/app';
import Image from 'next/image';
import { Tote } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import { OrderModal } from '@/componentes/orderModal';
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="logo" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <span>1</span>
              <Tote size={24} color="#8D8D99" weight="bold" />
            </button>
          </Dialog.Trigger>
          <OrderModal />
        </Dialog.Root>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

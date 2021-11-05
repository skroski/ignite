import { GetStaticProps } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

interface HomeProps {
  product:{
    priceId: string,
    amount: number
  }
}
export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title> Home | Inicio IG News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.
          <p>
            Get access: objectl the publications <br />
            <span>for { product.amount } month</span>
            <SubscribeButton priceId={product.priceId}/>
          </p>
          </h1>
        </section>
        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JqRnuAcHXzIe9b5wtIptvuD', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  }
  return{
    props:{
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
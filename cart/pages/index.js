import Head from 'next/head'
import { Inter } from 'next/font/google'
import products from '../products.json5'
import { NavBarContext } from '../NavBarContext'
import { useContext } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {cart, add} = useContext(NavBarContext)
  return (
        <> 
          <Head>
            <title>Shop</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div>   
            <h1>SHOP: {cart.length}</h1>
          </div>
          <ul id="shop">
            {products.map(({name,price}) => (
              <li key={name}>
                <span>{name} (${price.toFixed(2)})</span> 
                <button className='addButton' onClick={() => add({name, price})}>🛒</button>
              </li>
            ))}
          </ul>
        </>
  )
}
    
  



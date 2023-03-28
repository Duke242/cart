import NavBar from '../components/NavBar'
import '@/styles/globals.css'
import { NavBarContext } from '../NavBarContext'
import { useCallback, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([])
  const add = useCallback((info) => {
    setCart((cart) => (
      [...cart, info]
    ))
  }, [])
  const total = useCallback(() => (
    cart.reduce((acc, item) => acc + item.price, 0)
  ), [cart])
  console.log('it does run')
  return (
    <NavBarContext.Provider value={{cart, add, total}}>
      <header>
        <NavBar/>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </NavBarContext.Provider>
  )}






































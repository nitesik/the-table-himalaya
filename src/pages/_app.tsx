import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import { icons } from '@/utils/icons'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [scrollTopButton, setScrollTopButton] = useState(false);
  const [scroll, setScroll] = useState(0);

  function getScrollValue() {
    setScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", getScrollValue);
    setScrollTopButton(scroll > 50)
  }, [scroll])
  
  return (
    <>
      <Navbar id="navbar" />
      <div onClick={() => document.getElementById("navbar")?.scrollIntoView({ behavior: "smooth" })} className={`fixed bottom-0 right-0 mb-[25px] mr-[25px] lg:mb-[50px] lg:mr-[50px] border border-white p-3 rounded-lg bg-primary ${scrollTopButton ? "scale-100" : "scale-0"}`}>
        <Image src={icons.arrow_top} width={20} alt='arrow' />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

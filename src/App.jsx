import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { useState } from 'react'



function App() {

  const [count, setCount] = useState(0)

  const loadMony = (count) => {
      const newMony = count + 6000000;
      console.log(newMony)
      setCount(newMony)
  }


  const [isActive, setActive] = useState({
    cart: true,
    status: "cart"
  })
  const handleActiveBtn = (status) => {
    if (status == 'cart') {
      setActive({
        cart: true,
        status: "cart"
      })
    } else {
      setActive({
        cart: false,
        status: "about"
      })
    }
  }

    return (
      <>
        {/* Navber section */}
        <Header count={count}></Header>

        {/* Banner section */}
        <Banner count={count} loadMony={loadMony}></Banner>

        {/* main section */}
        <Main    
        isActive={isActive} 
        handleActiveBtn={handleActiveBtn}></Main>
        
        {/* footer section*/}
        <Footer></Footer>
      </>
    )
  }



  export default App

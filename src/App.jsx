
// impot site
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// this is app component 
function App() {

  const [count, setCount] = useState(0)
  
  const loadMony = (count) => {
    const newMony = count + 6000000;
    setCount(newMony)
    toast.success(`${newMony} You have successfully received the money!`)
  }

  const balenceAdd = (player) => {
    setCount(count - player.price)
  }

  const balenceReduce = (player) => {
    console.log(player)
    setCount(count + player.price)
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
        handleActiveBtn={handleActiveBtn}
        count={count}
        balenceAdd = {balenceAdd}
        balenceReduce = {balenceReduce}
        ></Main>

      {/* footer section*/}
      <Footer></Footer>
      <ToastContainer position='top-center' autoClose={3000} />
    </>
  )
}
export default App

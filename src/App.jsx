import { Suspense } from 'react'
import './App.css'
import Banner from './component/banner'
import Nav from './component/nav'
import Rating from './component/rating'
import Products from './component/Products'
import { ToastContainer } from 'react-toastify'
import Steps from './component/Steps'
import Pricing from './component/pricing'
import Footer from './component/Footer'

 const fetchProducts=fetch("/data.json")
  .then(res => res.json())
function App() {
    // const [cart,setTotal]=useState(0)
 
  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
    <Rating></Rating>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
     <Products fetchProducts={fetchProducts}></Products>
    </Suspense>
    <Steps></Steps>
    <Pricing></Pricing>
    <Footer></Footer>
    <ToastContainer />
    <div>
    </div>
    </>
  )
}

export default App

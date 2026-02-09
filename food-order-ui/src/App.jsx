

import { Route, Routes } from "react-router-dom";

import MainLayout from './components/MainLayout'
import Header from './components/Header'
import Container from './components/Container'
import Menu from './pages/Menu'
import Footer from './components/Footer'
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import { CART, MENU, ORDERS } from "./constants/pathconsts";



function App() {

  return (
    <>
      <MainLayout>
        <Header />
        <Container >
          <Routes>
              <Route path={MENU} element={<Menu />} />
              <Route path={CART} element={<Cart  />} />
              <Route path={ORDERS} element={<Order  />} />
          </Routes>
        </Container>
        <Footer />
      </MainLayout>
    </>
  )
}

export default App

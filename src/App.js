import { Provider } from "react-redux";
import Checkout from "./pages/Cart/Cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./components/reducer/store.jsx";
import ProductList from "./pages/Home/Home.jsx";
import AppLayout from "./components/Layout";
import { useEffect, useState } from "react";
const App = () => {
  const [cart, setcarts] = useState(
    JSON.parse(localStorage.getItem("save_cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("save_cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<ProductList></ProductList>}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </Provider>
  );
};
export default App;

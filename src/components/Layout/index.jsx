import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { updateCart } from "../reducer/cartSlice";

export default function AppLayout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const localCart = localStorage.getItem("localCart");
    if (localCart) {
      console.log(JSON.parse(localCart));
      dispatch(updateCart(JSON.parse(localCart)));
    }
  }, []);
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

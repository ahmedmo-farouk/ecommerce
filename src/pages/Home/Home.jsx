import React, { useEffect, useState } from "react";
import image1 from "../../image/download.jpg";
import image2 from "../../image/download (1).jpg";
import image3 from "../../image/download (2).jpg";
import image4 from "../../image//images (3).jpg";
import image5 from "../../image//download (3).jpg";
import image6 from "../../image/download (4).jpg";
import image7 from "../../image/images (5).jpg";
import image8 from "../../image/images (2).jpg";
import { useDispatch, useSelector } from "react-redux";
import { addItemtoCart, isExit } from "../../components/reducer/cartSlice";
import Navbar from "../../components/Navbar/Navbar";
import BeatLoader from "react-spinners/ClipLoader";
import "./Home.css";

function ProductList() {
  const products = [
    { id: 1, thumbnail: image1, title: "pamegranate", price: 248 },
    { id: 2, thumbnail: image2, title: "Avocado", price: 241 },
    { id: 3, thumbnail: image3, title: "Grapes", price: 247 },
    { id: 4, thumbnail: image4, title: "Fruits", price: 254 },
    { id: 5, thumbnail: image5, title: "Grapes", price: 284 },
    { id: 6, thumbnail: image6, title: "Banana", price: 214 },
    { id: 7, thumbnail: image7, title: "orange", price: 204 },
    { id: 8, thumbnail: image8, title: "Apple", price: 254 },
  ];
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const cart = useSelector((state) => state.cart?.data);
  useEffect(() => {
    // setLoading(true)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 5000);
  }, []);
  // useEffect(() => {
  //   dispatch(getCarttotal());
  // }, [carts]);
  return (
    <div>
      {loading ? (
        <h1 className="text-center m-5px">
          is loading
          <BeatLoader color={"black"} loading={loading} size={25} />
        </h1>
      ) : (
        <>
          {/* <Navbar /> */}
          <div className="product">
            <form className="form">
              <input
                placeholder="search order"
                onChange={(e) => setSearch(e.target.value)}
              ></input>
            </form>
            {products
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.title.toLocaleLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <div key={val.id} className="card">
                    <img src={val.thumbnail} alt="" className=" " />
                    <h1 className="font-semibold">{val.title}</h1>
                    <p className="font-semibold">{val.price}</p>
                    <button
                      onClick={() => {
                        dispatch(addItemtoCart(val));
                      }}
                      className="AddtoCart"
                    >
                      {cart?.carts?.find((item) => item.id === val.id)
                        ? cart?.carts?.find((item) => item.id === val.id)
                            ?.quantity
                        : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
}
export default ProductList;

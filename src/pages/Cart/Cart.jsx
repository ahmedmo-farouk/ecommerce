import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import {
  decrease,
  deleteItemFromCart,increase
} from "../../components/reducer/cartSlice";
import "./cart.css";

const Checkout = () => {
  const { carts, totalAmount } = useSelector((state) => state.cart?.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteItemFromCart({ id: id }));
  };

  console.log("carts", carts);
  if (carts?.length === 0) {
    return (
      <>
        <h3 className=" text-center fs-bold mt-4">
          your Shopping
          <span>
            <i class="bi bi-bag-x-fill"></i>
          </span>
          is Empty
        </h3>
      </>
    );
  }
  return (
    <div className="check">
      <div className="icon">
        <i
          onClick={() => navigate("/")}
          class="bi bi-arrow-left-circle-fill"
        ></i>
      </div>
      <div className="produt">
        {carts?.map((item) => (
          <div key={item.id} className="card">
            <img src={item.thumbnail} alt="" className="w-10 " />
            <h1 className="font-semibold">{item.title}</h1>
            <p className="font-semibold">{item.price}</p>
            <div className="AddSubQuantity">
              <button
                className="sub"
                onClick={() => dispatch(decrease(item.id))}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                className="add"
                onClick={() => dispatch(increase(item.id))}
              >
                +
              </button>
            </div>
            <button className="remove" onClick={() => handleDelete(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <h1>
        total:$<span>{totalAmount}</span>
      </h1>
    </div>
  );
};
export default Checkout;

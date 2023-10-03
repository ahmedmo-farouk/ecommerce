import React from "react";

export default function ProductCard() {
  return (
    <div className="card">
      <img src={val.thumbnail} alt="" className=" " />
      <h1 className="font-semibold">{val.title}</h1>
      <p className="font-semibold">{val.price}</p>
      <button
        onClick={() => {
          dispatch(addItemtoCart(val));
        }}
        className="AddtoCart"
      >
        {dispatch(isExit(val))
          ? dispatch(isExit(val))?.quantity
          : "Add to Cart"}
      </button>
    </div>
  );
}

import { createSlice } from "@reduxjs/toolkit";
import { getCarttotalInvoice } from "../../helpers/getCartTotal";
const initialState = {
  // carts: [],
  // quantity: 0,
  // totalAmount: 0,
  // totalCount: 0,
  // amount: 0,
  // //   id: 1,
  // //   name: "product name",
  // price: 0,
  // //   quantity: 0,
  // //   total: 0,
  // // },

  data: {
    carts: [],
    quantity: 0,
    totalAmount: 0,
    totalCount: 0,
    amount: 0,

    price: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.data.carts = state.data.carts.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      state.data = getCarttotalInvoice(state.data);
    },
    decrease: (state, action) => {
      state.data.carts = state.data.carts
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);

      state.data = getCarttotalInvoice(state.data);
    },
    updateCart: (state, action) => {
      state.data = action.payload;
    },

    isExit: (state, action) => {
      const target = state?.data?.carts?.find(
        (item) => item.id === action.payload.id
      );

      console.log("target", target);

      return target;
    },
    addItemtoCart: (state, action) => {
      const find = state.data?.carts?.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(find);
      if (find >= 0) {
        state.data.carts[find].quantity += 1;
      } else {
        const tempvar = { ...action.payload, quantity: 1 };
        console.log(tempvar);
        state?.data?.carts?.push(tempvar);
      }
      state.data = getCarttotalInvoice(state.data);
      // const { name, id, price, quantity } = (action.payload);
      // const item = state.items.find((item) => item.id === id);
      // console.log(item);
      // if (item) {
      //   item.quantity += 1;
      // } else {
      //   state.items.push({
      //     name,
      //     price,
      //     quantity,
      //     total: price * quantity,
      //   });
      // }
    },
    deleteItemFromCart: (state, action) => {
      state.data.carts = state.data.carts.filter(
        (f) => f.id !== action.payload.id
      );
      state.data = getCarttotalInvoice(state.data);
    },

    // getCartTotalPrice: (state) => {
    //   return state.carts.reduce((total = 0, item) => (total += item.total), 0);
    // },
  },
});
export const {
  addItemtoCart,
  updateCart,
  decrease,
  increase,
  deleteItemFromCart,
  isExit,
} = cartSlice.actions;
export default cartSlice.reducer;

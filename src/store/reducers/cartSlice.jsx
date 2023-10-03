import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: [],
  quantity:0,
  totalAmount:0,
  totalCount:0,
  // amount:0,
    //   id: 1,
    //   name: "product name",
     price: 0,
    //   quantity: 0,
    //   total: 0,
    // },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCarttotal:(state,action)=>{
    let {totalAmount,totalCount} = state.carts.reduce((cartTotal,cartItem)=>{
      const{price,quantity}=cartItem;
      const itemTotal = price * quantity; 
      cartTotal.totalAmount += itemTotal
      cartTotal.totalCount += quantity
      return cartTotal ;
    },
    {totalAmount:0 ,totalCount:0}
    );
    state.totalAmount = parseInt(totalAmount.toFixed(2));
    state.totalCount=totalCount;
    },
    increase:(state ,action)=>{
      state.carts= state.carts.map((item) => {
        if(item.id === action.payload){
          return{ ...item , quantity: item.quantity + 1};
        }
        return item ;
      })
    },
    decrease:(state ,action)=>{
      state.carts= state.carts.map((item) => {
        if(item.id === action.payload){
          return{ ...item , quantity: item.quantity - 1};
        }
        return item ;
      }).filter((item) => item.quantity !== 0)
    },
    addItemtoCart: (state, action) => {
      const find = state.carts.findIndex(item => item.id === action.payload.id)
      console.log(find)
      if(find>=0){
        state.carts[find].quantity +=1
      }
      else{
        const tempvar = {...action.payload, quantity:1}
        console.log(tempvar)
        state.carts.push(tempvar)
      }
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
      state.carts = state.carts.filter((f) => f.id !== action.payload.id);
    },

    // getCartTotalPrice: (state) => {
    //   return state.carts.reduce((total = 0, item) => (total += item.total), 0);
    // },
  },
});
export const { addItemtoCart,getCarttotal, decrease,increase ,deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
 
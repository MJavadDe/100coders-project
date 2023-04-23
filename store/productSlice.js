import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart : []
}
export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        addProduct: (state ,action)=>{
            const {item} = action.payload;
            state.cart.push(item);
            if(state.cart.length !== 0){
                localStorage.setItem("products" , JSON.stringify(state.cart))
            }
        }
    }
})
export const {addProduct} = productsSlice.actions;
export default productsSlice.reducer;
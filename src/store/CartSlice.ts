import {createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';

export interface CartState {
  items: [];
  quantity: number;
}

const initialState: CartState = {
  items: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push({product: action.payload.product, quantity: 1});
    },
    changeQuantity: (state, action) => {
      const selectedProduct: any = state.items.filter(
        (item: any) => item.product.id === action.payload.product.id,
      );
      selectedProduct[0].quantity += action.payload.quantity;
      const selectedIndex = state.items.indexOf(selectedProduct[0]);

      if (selectedProduct[0].quantity <= 0) {
        state.items.splice(selectedIndex, 1);
      }
    },
  },
});

export const totalState = createSelector(
  (state: RootState) => state.cart.items,
  items => {
    var sum = 0;
    items.forEach((item: any) => {
      sum += item.quantity * item.product.price;
    });
    return sum;
  },
);

export const {addToCart, changeQuantity} = cartSlice.actions;

export default cartSlice.reducer;

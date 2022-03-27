import {createSlice} from '@reduxjs/toolkit';
import PRODUCTS from '../data/dummy-product';
import {Product} from '../models/product';

interface ProductState {
  availabelProduct: Array<Product>;
  userProducts: Array<Product>;
}

const initialState: ProductState = {
  availabelProduct: PRODUCTS,
  userProducts: PRODUCTS.filter(product => product.ownerId === 'u1'),
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
